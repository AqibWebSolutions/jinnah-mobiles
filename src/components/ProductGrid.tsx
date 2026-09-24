import React, { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { BRANDS } from '../data/products';
import { SlidersHorizontal, ArrowUpDown, X, Sparkles, Filter } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  title?: string;
  subtitle?: string;
  initialBrand?: string;
  showFiltersDefault?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onViewDetails,
  wishlistIds,
  onToggleWishlist,
  title = "Featured Mobiles & Devices",
  subtitle = "Genuine devices with official PTA approval & warranty support in Khichi Wala",
  initialBrand = 'All Brands',
  showFiltersDefault = false,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [showFilters, setShowFilters] = useState<boolean>(showFiltersDefault);
  const [priceRange, setPriceRange] = useState<number>(500000);

  // Filter and sort items
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category check
      if (selectedCategory !== 'all' && selectedCategory !== '') {
        if (selectedCategory === 'accessories' && !item.isAccessory) return false;
        if (selectedCategory !== 'accessories' && item.category !== selectedCategory) return false;
      }
      // Brand check
      if (selectedBrand !== 'All Brands' && item.brand !== selectedBrand) {
        return false;
      }
      // Price check
      if (item.price > priceRange) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured order
    });
  }, [products, selectedCategory, selectedBrand, priceRange, sortBy]);

  const resetFilters = () => {
    onSelectCategory('all');
    setSelectedBrand('All Brands');
    setPriceRange(500000);
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedBrand !== 'All Brands' || priceRange < 500000;

  return (
    <section className="py-10 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1557A6] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Jinnah Mobile's Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2747] font-display tracking-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {subtitle}
            </p>
          </div>

          {/* Action Bar (Filters Toggle & Sort) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-2 cursor-pointer ${
                showFilters || hasActiveFilters
                  ? 'bg-[#1557A6] text-white border-[#1557A6]'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters {hasActiveFilters ? '(Active)' : ''}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-700">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-400 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products by"
                className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Collapsible Filter Panel */}
        {showFilters && (
          <div className="mb-6 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#1557A6]" />
                <span className="text-sm font-bold text-[#0F2747]">Filter Products</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Brand Filter */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Brand:
                </label>
                <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                  {BRANDS.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-colors cursor-pointer ${
                        selectedBrand === brand
                          ? 'bg-[#1557A6] text-white border-[#1557A6]'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Max Filter */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Max Price:
                  </label>
                  <span className="text-xs font-bold text-[#1557A6] tabular-nums">
                    Rs. {priceRange.toLocaleString('en-PK')}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="500000"
                  step="5000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  aria-label="Max Price filter"
                  className="w-full accent-[#1557A6] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Rs. 500</span>
                  <span>Rs. 500,000</span>
                </div>
              </div>

              {/* Quick info note */}
              <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100 flex flex-col justify-center">
                <span className="text-xs font-bold text-[#1557A6]">Local Khichi Wala Store</span>
                <span className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  All devices listed are available for immediate test-drive and pickup at Fort Abbas - Haroonabad Rd.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-4 text-xs text-slate-500 font-medium">
          <span>Showing <strong className="text-slate-800">{filteredProducts.length}</strong> products</span>
          {hasActiveFilters && (
            <span className="text-blue-600 font-medium">Filters Applied</span>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#1557A6] flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No products found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mt-1 mb-5">
              We couldn't find any products matching your selected criteria. Try adjusting your filters or price range.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
