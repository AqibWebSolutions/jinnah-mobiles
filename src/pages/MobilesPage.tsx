import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { Product } from '../types';

interface MobilesPageProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (p: Product) => void;
}

export const MobilesPage: React.FC<MobilesPageProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onViewDetails,
  wishlistIds,
  onToggleWishlist,
}) => {
  const mobilePhones = products.filter((p) => !p.isAccessory);

  return (
    <div className="py-6 sm:py-8">
      {/* Category Pills Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Filter by Phone Type
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Phones' },
              { id: 'flagship', label: 'Flagship Series' },
              { id: 'midrange', label: 'Mid-Range' },
              { id: 'budget', label: 'Budget Phones' },
              { id: 'gaming', label: 'Gaming Phones' },
              { id: 'camera', label: 'Camera Phones' },
              { id: '5g', label: '5G Enabled' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1557A6] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ProductGrid
        products={mobilePhones}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        onAddToCart={onAddToCart}
        onViewDetails={onViewDetails}
        wishlistIds={wishlistIds}
        onToggleWishlist={onToggleWishlist}
        title="Smartphones & Mobile Devices"
        subtitle="Explore official PTA approved smartphones with 1-year official brand warranty in Khichi Wala"
        showFiltersDefault={true}
      />
    </div>
  );
};
