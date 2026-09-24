import React from 'react';
import { 
  Smartphone, 
  Sparkles, 
  Tag, 
  Gamepad2, 
  Camera, 
  Wifi, 
  Headphones, 
  LayoutGrid 
} from 'lucide-react';
import { CATEGORIES } from '../data/products';

interface CategorySectionProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'flagship':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'midrange':
        return <Smartphone className="w-5 h-5 text-blue-600" />;
      case 'budget':
        return <Tag className="w-5 h-5 text-emerald-600" />;
      case 'gaming':
        return <Gamepad2 className="w-5 h-5 text-purple-600" />;
      case 'camera':
        return <Camera className="w-5 h-5 text-rose-500" />;
      case '5g':
        return <Wifi className="w-5 h-5 text-indigo-600" />;
      case 'accessories':
        return <Headphones className="w-5 h-5 text-sky-600" />;
      default:
        return <LayoutGrid className="w-5 h-5 text-[#1557A6]" />;
    }
  };

  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0F2747] font-display tracking-tight">
              Browse by Category
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Explore smartphones, gaming devices, and accessories in Khichi Wala
            </p>
          </div>
          <button
            onClick={() => onSelectCategory('all')}
            className="text-xs sm:text-sm font-bold text-[#1557A6] hover:text-[#0F2747] hover:underline cursor-pointer"
          >
            View All ({CATEGORIES.find(c => c.id === 'all')?.count || 20})
          </button>
        </div>

        {/* Horizontal Category Row with mobile smooth scroll */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`snap-start shrink-0 flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer min-w-[100px] sm:min-w-[125px] ${
                  isSelected
                    ? 'bg-[#EAF3FF] border-[#2563EB] shadow-sm shadow-blue-100'
                    : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-xs hover:-translate-y-0.5'
                }`}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all ${
                  isSelected ? 'bg-white shadow-xs scale-105' : 'bg-white border border-slate-200/60'
                }`}>
                  {getCategoryIcon(cat.id)}
                </div>
                <div className="text-center">
                  <span className={`text-xs sm:text-sm font-bold block leading-tight whitespace-nowrap ${
                    isSelected ? 'text-[#1557A6]' : 'text-slate-800'
                  }`}>
                    {cat.name}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">
                    {cat.count} Items
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
