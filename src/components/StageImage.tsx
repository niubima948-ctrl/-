import React, { useState, useEffect, useRef } from 'react';
import { ParasiteStage } from '../types';
import { Loader2, ImageOff, Upload, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const StageImage: React.FC<{ stage: ParasiteStage }> = ({ stage }) => {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [customImages, setCustomImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      // Switch to the newly uploaded image immediately
      setCurrentIndex(newImages.length - 1);
      try {
        localStorage.setItem('custom_image_' + stage.id, JSON.stringify(newImages));
      } catch (err) {
        alert('图片太大，无法在本地保存！请尝试更小的图片。');
      }
    };
    reader.readAsDataURL(file);
    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeCustomImage = (index: number) => {
    const newImages = [...customImages];
    newImages.splice(index, 1);
    setCustomImages(newImages);
    if (currentIndex >= index && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
    }
    try {
      localStorage.setItem('custom_image_' + stage.id, JSON.stringify(newImages));
    } catch (e) {}
  };

  const validImages = stage.imageUrls?.filter((_, i) => !failedImages.has(i)) || [];
  const allImages = [...customImages, ...validImages];
  const safeIndex = (currentIndex >= allImages.length && allImages.length > 0) ? allImages.length - 1 : currentIndex;

  console.log("Rendering StageImage:", stage.name, "Images:", allImages, "Current safeIndex:", safeIndex);

  return (
    <div className="flex flex-col gap-4 md:gap-5 p-6 md:p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-row items-center justify-between">
        <h4 className="text-xl font-semibold text-teal-800 flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
          {stage.name}
        </h4>
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors"
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

      <div className="w-full h-80 md:h-[400px] lg:h-[450px] bg-gray-50 rounded-lg overflow-hidden relative flex flex-row items-center justify-center group flex-shrink-0 border border-gray-100 p-2 gap-2">
        {allImages.length > 0 ? (
          <>
             <div className="w-full h-full bg-black/5 rounded flex items-center justify-center overflow-hidden relative group/item">
                 <AnimatePresence mode="popLayout">
                   <motion.img
                     key={safeIndex}
                     initial={{ opacity: 0, scale: 0.98 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 1.02 }}
                     transition={{ duration: 0.15, ease: 'easeInOut' }}
                     src={allImages[safeIndex]}
                     alt={`${stage.name} - view ${safeIndex + 1}`}
                     className="absolute inset-0 w-full h-full object-contain"
                     loading="lazy"
                     onError={(e) => {
                       console.warn("Image load error for", allImages[safeIndex], e);
                       // We temporarily disabled the aggressive filtering:
                       // if (safeIndex >= customImages.length) {
                       //    const originalUrl = allImages[safeIndex];
                       //    const originalIndex = stage.imageUrls!.indexOf(originalUrl);
                       //    if (originalIndex !== -1) {
                       //        handleImageError(originalIndex);
                       //    }
                       // }
                     }}
                   />
                 </AnimatePresence>
                 {safeIndex < customImages.length && (
                   <button 
                     onClick={() => removeCustomImage(safeIndex)}
                     className="absolute top-2 right-2 z-10 bg-red-500/80 hover:bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"
                     title="移除图片"
                   >
                     <X className="w-4 h-4" />
                   </button>
                 )}
              </div>

             {allImages.length > 1 && (
               <>
                 <button
                   onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1))}
                   className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                   aria-label="Previous image"
                 >
                   <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                 </button>
                 <button
                    onClick={() => setCurrentIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    aria-label="Next image"
                 >
                   <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                 </button>
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 max-w-[80%] overflow-x-auto no-scrollbar scroll-smooth bg-black/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-sm">
                   {allImages.map((_, idx) => (
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
            <span className="text-base font-medium text-gray-500 mb-1">暂缺标准高清特写图</span>
            <span className="text-sm mt-1 text-gray-400 leading-relaxed max-w-sm">为保证医学影像的绝对严谨与正确性，已将不符合或模糊的网传图片移除。目前在开源图库中未能检索到该寄生虫病理结构极高清晰度的镜下图片，您可以点击右上角上传本地图片进行补充。</span>
          </div>
        )}
      </div>
      
      <div className="space-y-4 md:space-y-5 mt-2">
        <div className="bg-blue-50/50 p-5 md:p-6 rounded-xl">
           <h5 className="text-base font-bold text-blue-800 mb-2">🔍 镜下形态提取：</h5>
           <p className="text-sm md:text-base text-gray-700 leading-relaxed">{stage.morphology}</p>
        </div>
        <div className="bg-amber-50 p-5 md:p-6 rounded-xl border border-amber-100/50">
           <h5 className="text-base font-bold text-amber-800 mb-2">🚨 核心考点速记：</h5>
           <p className="text-sm md:text-base text-amber-900 leading-relaxed font-medium">{stage.keyPoints}</p>
        </div>
      </div>
    </div>
  );
}
