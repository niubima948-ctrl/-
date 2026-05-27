import { useState, useMemo } from 'react';
import { parasiteData } from './data';
import { Category } from './types';
import { ParasiteCard } from './components/ParasiteCard';
import { Search, Info, Microscope } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | '全部'>('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: (Category | '全部')[] = ['全部', '医学原虫', '医学吸虫', '医学绦虫', '医学线虫', '医学节肢动物'];

  const filteredParasites = useMemo(() => {
    return parasiteData.filter(p => {
      const matchesCategory = activeCategory === '全部' || p.category === activeCategory;
      const matchesSearch = p.chineseName.includes(searchQuery) || 
                            p.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-teal-200">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Microscope className="w-8 h-8 text-teal-600" />
            <h1 className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block">
              医学寄生虫学<span className="text-teal-600">实验识图系统</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative group max-w-xs w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400 group-focus-within:text-teal-500 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="搜索寄生虫名、学名..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition-all shadow-inner"
                />
             </div>
          </div>
        </div>
        
        {/* Mobile / Horizontal Category Nav */}
        <div className="border-t border-gray-100 bg-white/50 overflow-x-auto hide-scrollbar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex space-x-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         {filteredParasites.length === 0 ? (
           <div className="text-center py-20">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="w-8 h-8 text-gray-400" />
             </div>
             <h3 className="text-lg font-medium text-gray-900">未找到相关虫种</h3>
             <p className="text-gray-500 mt-1">请尝试其他关键词或类别</p>
           </div>
         ) : (
           <div className="space-y-8">
             {filteredParasites.map(parasite => (
               <ParasiteCard key={parasite.id} parasite={parasite} />
             ))}
           </div>
         )}
      </main>
    </div>
  );
}
