import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ParasiteStage } from '../types';
import { Loader2, ImageOff, Upload, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ImageTab = 'original' | 'custom';

const renderList = (text: string, isKeyPoints: boolean) => {
  if (!text) return null;
  const lines = text.split('\n');
  return (
    <div className="space-y-2 text-left">
      {lines.map((line, idx) => {
        const match = line.match(/^(\d+\.)\s*(.*)$/);
        if (match) {
          const [, num, content] = match;
          return (
            <div key={idx} className="flex items-start gap-1.5 text-sm md:text-base leading-relaxed">
              <span className={`font-semibold flex-shrink-0 ${isKeyPoints ? 'text-amber-900' : 'text-blue-900'}`}>{num}</span>
              <span className={isKeyPoints ? 'text-amber-900 font-medium' : 'text-gray-700'}>{content}</span>
            </div>
          );
        }
        return (
          <div key={idx} className={`text-sm md:text-base leading-relaxed ${isKeyPoints ? 'text-amber-900 font-medium' : 'text-gray-700'}`}>
            {line}
          </div>
        );
      })}
    </div>
  );
};

export const StageImage: React.FC<{ stage: ParasiteStage }> = ({ stage }) => {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [customImages, setCustomImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<ImageTab>('original');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Swipe gesture support on mobile touch screens
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Threshold distance in pixels

    if (diffX > minSwipeDistance) {
      // Swiped Left -> Show next image
      setCurrentIndex((prev) => (prev < displayImages.length - 1 ? prev + 1 : 0));
    } else if (diffX < -minSwipeDistance) {
      // Swiped Right -> Show prev image
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : displayImages.length - 1));
    }

    // Reset touch refs
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Lightbox zoom level state (1x to 4x)
  const [zoom, setZoom] = useState(1);

  // Reset zoom when image or tab changes, or lightbox toggles
  useEffect(() => {
    setZoom(1);
  }, [currentIndex, activeTab, lightboxOpen]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('custom_image_' + stage.id);
      if (stored) {
        setCustomImages(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load custom images', e);
    }
  }, [stage.id]);

  const handleImageError = (index: number) => {
    setFailedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      const newImages = [...customImages, dataUrl];
      setCustomImages(newImages);
      setActiveTab('custom');
      setCurrentIndex(newImages.length - 1);
      try {
        localStorage.setItem('custom_image_' + stage.id, JSON.stringify(newImages));
      } catch (err) {
        alert('图片太大，无法在本地保存！请尝试更小的图片。');
      }
    };
    reader.readAsDataURL(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeCustomImage = (index: number) => {
    const newImages = [...customImages];
    newImages.splice(index, 1);
    setCustomImages(newImages);
    if (currentIndex >= index && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
    if (newImages.length === 0) {
      setActiveTab('original');
      setCurrentIndex(0);
    }
    try {
      localStorage.setItem('custom_image_' + stage.id, JSON.stringify(newImages));
    } catch (e) {}
  };

  const validImages = stage.imageUrls?.filter((_, i) => !failedImages.has(i)) || [];
  const displayImages = activeTab === 'original' ? validImages : customImages;
  const safeIndex = (currentIndex >= displayImages.length && displayImages.length > 0) ? displayImages.length - 1 : currentIndex;

  const handleTabSwitch = (tab: ImageTab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const hasCustom = customImages.length > 0;

  return (
    <div className="flex flex-col gap-4 md:gap-5 p-6 md:p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-row items-start justify-between gap-4">
        <div className="flex flex-col gap-1 min-w-0">
          <h4 className="text-xl font-semibold text-teal-800 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 flex-shrink-0"></span>
            <span className="break-words">{stage.name}</span>
          </h4>
          {stage.englishName && (
            <span className="text-sm font-normal text-gray-500 pl-[22px] italic break-words leading-tight">
              {stage.englishName}
            </span>
          )}
        </div>
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors flex-shrink-0"
        >
          <Upload className="w-4 h-4" />
          <span className="hidden sm:inline">上传自定义图片</span>
          <span className="sm:hidden">上传</span>
        </button>
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
        />
      </div>

      {/* Tab switcher - only show when custom images exist */}
      {hasCustom && (
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => handleTabSwitch('original')}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              activeTab === 'original'
                ? 'bg-white text-teal-700 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            📚 标准图片
            {validImages.length > 0 && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === 'original' ? 'bg-teal-100 text-teal-700' : 'bg-gray-200 text-gray-500'
              }`}>
                {validImages.length}
              </span>
            )}
          </button>
          <button
            onClick={() => handleTabSwitch('custom')}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              activeTab === 'custom'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            📷 我的图片
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
              activeTab === 'custom' ? 'bg-orange-100 text-orange-600' : 'bg-gray-200 text-gray-500'
            }`}>
              {customImages.length}
            </span>
          </button>
        </div>
      )}

      <div className="w-full h-80 md:h-[400px] lg:h-[450px] bg-gray-50 rounded-lg overflow-hidden relative flex flex-row items-center justify-center group flex-shrink-0 border border-gray-100 p-2 gap-2">
        {displayImages.length > 0 ? (
          <>
             <div 
               className="w-full h-full bg-black/5 rounded flex items-center justify-center overflow-hidden relative group/item cursor-zoom-in" 
               onClick={() => setLightboxOpen(true)}
               onTouchStart={handleTouchStart}
               onTouchMove={handleTouchMove}
               onTouchEnd={handleTouchEnd}
             >
                 <AnimatePresence mode="popLayout">
                   <motion.img
                     key={`${activeTab}-${safeIndex}`}
                     initial={{ opacity: 0, scale: 0.98 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 1.02 }}
                     transition={{ duration: 0.15, ease: 'easeInOut' }}
                     src={displayImages[safeIndex]}
                     alt={`${stage.name} - ${activeTab === 'custom' ? '自定义' : '标准'} ${safeIndex + 1}`}
                     className="absolute inset-0 w-full h-full object-contain"
                     loading="lazy"
                     onError={(e) => {
                        console.warn("Failed to load image:", displayImages[safeIndex], e);
                     }}
                   />
                 </AnimatePresence>
                 {/* Delete button only for custom images */}
                 {activeTab === 'custom' && (
                   <button 
                     onClick={(e) => { e.stopPropagation(); removeCustomImage(safeIndex); }}
                     className="absolute top-2 right-2 z-10 bg-red-500/80 hover:bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"
                     title="移除图片"
                   >
                     <X className="w-4 h-4" />
                   </button>
                 )}
                 {/* Zoom hint */}
                 <div className="absolute bottom-2 right-2 z-10 bg-black/40 text-white p-1.5 rounded-full opacity-0 group-hover/item:opacity-70 transition-opacity pointer-events-none">
                   <ZoomIn className="w-4 h-4" />
                 </div>
              </div>

             {displayImages.length > 1 && (
               <>
                 <button
                   onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : displayImages.length - 1))}
                   className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                   aria-label="Previous image"
                 >
                   <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                 </button>
                 <button
                    onClick={() => setCurrentIndex((prev) => (prev < displayImages.length - 1 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    aria-label="Next image"
                 >
                   <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                 </button>
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 max-w-[80%] overflow-x-auto no-scrollbar scroll-smooth bg-black/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-sm">
                   {displayImages.map((_, idx) => (
                     <button
                       key={idx}
                       onClick={() => setCurrentIndex(idx)}
                       className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all flex-shrink-0 ${idx === safeIndex ? 'bg-white scale-125 shadow-sm' : 'bg-white/50 hover:bg-white/80'}`}
                       aria-label={`Go to slide ${idx + 1}`}
                     />
                   ))}
                 </div>
               </>
             )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400 p-6 text-center">
            <ImageOff className="w-12 h-12 mb-3 opacity-50" />
            {activeTab === 'custom' ? (
              <>
                <span className="text-base font-medium text-gray-500 mb-1">暂无自定义图片</span>
                <span className="text-sm mt-1 text-gray-400 leading-relaxed max-w-sm">点击右上角"上传自定义图片"按钮添加您的本地图片。</span>
              </>
            ) : (
              <>
                <span className="text-base font-medium text-gray-500 mb-1">暂缺标准高清特写图</span>
                <span className="text-sm mt-1 text-gray-400 leading-relaxed max-w-sm">为保证医学影像的绝对严谨与正确性，已将不符合或模糊的网传图片移除。目前在开源图库中未能检索到该寄生虫病理结构极高清晰度的镜下图片，您可以点击右上角上传本地图片进行补充。</span>
              </>
            )}
          </div>
        )}
      </div>
      
      <div className="space-y-4 md:space-y-5 mt-2">
        <div className="bg-blue-50/50 p-5 md:p-6 rounded-xl">
           <h5 className="text-base font-bold text-blue-800 mb-2">🔍 镜下形态：</h5>
           {renderList(stage.morphology, false)}
        </div>
        <div className="bg-amber-50 p-5 md:p-6 rounded-xl border border-amber-100/50">
           <h5 className="text-base font-bold text-amber-800 mb-2">🚨 {stage.keyPointTitle || '易混辨析'}：</h5>
           {renderList(stage.keyPoints, true)}
        </div>
      </div>

      {/* Lightbox overlay */}
      {createPortal(
        <AnimatePresence>
          {lightboxOpen && displayImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/90 overflow-auto flex"
              onClick={() => setLightboxOpen(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-50 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Counter */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm z-50 select-none">
                {safeIndex + 1} / {displayImages.length}
              </div>

              {/* Main image */}
              <motion.img
                key={`lightbox-${activeTab}-${safeIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                src={displayImages[safeIndex]}
                alt={stage.name}
                className="object-contain select-none transition-all duration-100 ease-out shrink-0"
                style={{
                  margin: 'auto',
                  width: `${90 * zoom}vw`,
                  height: `${85 * zoom}vh`,
                  cursor: zoom > 1 ? 'grab' : 'zoom-in',
                }}
                onClick={(e) => e.stopPropagation()}
              />

              {/* Zoom Slider Control */}
              <div 
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white select-none shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-xs font-semibold w-12 text-right">{Math.round(zoom * 100)}%</span>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="0.1"
                  value={zoom}
                  onChange={(e) => setZoom(parseFloat(e.target.value))}
                  className="w-32 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-teal-500"
                />
                <button
                  onClick={() => setZoom(1)}
                  className="text-[10px] bg-white/15 hover:bg-white/25 px-2 py-0.5 rounded-md font-bold transition-colors cursor-pointer"
                >
                  重置
                </button>
              </div>

              {/* Prev/Next */}
              {displayImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev > 0 ? prev - 1 : displayImages.length - 1)); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50 animate-fade-in-up"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev < displayImages.length - 1 ? prev + 1 : 0)); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50 animate-fade-in-up"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
