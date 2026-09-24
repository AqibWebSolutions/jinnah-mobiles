import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { Product } from '../types';
import { Headphones, Shield, Zap, Sparkles } from 'lucide-react';

interface AccessoriesPageProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (p: Product) => void;
}

export const AccessoriesPage: React.FC<AccessoriesPageProps> = ({
  products,
  onAddToCart,
  onViewDetails,
  wishlistIds,
  onToggleWishlist,
}) => {
  const accessories = products.filter((p) => p.isAccessory);

  return (
    <div className="py-6 sm:py-8">
      {/* Accessories Hero Highlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-gradient-to-r from-[#0F2747] to-[#1557A6] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-md">
          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              Genuine Mobile Accessories
            </span>
            <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight">
              Premium Gear & Everyday Protection
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 mt-2 leading-relaxed">
              Equip your device with 65W GaN chargers, ANC wireless earbuds, 20,000mAh power banks, and diamond-grade screen protectors with free application at our Khichi Wala store.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mt-6 relative z-10 text-xs">
            <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
              <Zap className="w-4 h-4 text-amber-300 mb-1" />
              <span className="font-bold block">Fast Charging</span>
              <span className="text-[10px] text-blue-200">GaN & 100W PD</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
              <Headphones className="w-4 h-4 text-sky-300 mb-1" />
              <span className="font-bold block">Audio Gear</span>
              <span className="text-[10px] text-blue-200">ANC Earbuds</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
              <Shield className="w-4 h-4 text-emerald-300 mb-1" />
              <span className="font-bold block">Armor Defense</span>
              <span className="text-[10px] text-blue-200">9H Tempered Glass</span>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid
        products={accessories}
        selectedCategory="accessories"
        onSelectCategory={() => {}}
        onAddToCart={onAddToCart}
        onViewDetails={onViewDetails}
        wishlistIds={wishlistIds}
        onToggleWishlist={onToggleWishlist}
        title="All Mobile Accessories"
        subtitle="Durable chargers, protective cases, and audio accessories in Khichi Wala"
        showFiltersDefault={false}
      />
    </div>
  );
};
