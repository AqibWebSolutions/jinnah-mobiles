import React, { useState } from 'react';
import { BRANDS } from '../data/products';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Smartphone, CheckCircle } from 'lucide-react';

interface BrandsPageProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (p: Product) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({
  products,
  onAddToCart,
  onViewDetails,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [activeBrand, setActiveBrand] = useState<string>('Samsung');

  const brandDescriptions: Record<string, string> = {
    'Samsung': 'World-renowned Galaxy S-series flagships and reliable A-series mid-rangers with Samsung Knox security.',
    'Apple': 'Premium iPhones with aerospace-grade titanium, Apple Silicon, and industry-leading video performance.',
    'Xiaomi': 'Exceptional flagship performance with Leica optical lenses and ultra-fast HyperCharge technology.',
    'Redmi': 'Best-in-class value for money, 200MP cameras, and massive battery durability.',
    'OnePlus': 'Fast and Smooth OxygenOS experience paired with Hasselblad photography and 100W SUPERVOOC.',
    'Vivo': 'Ultra-slim designs with ZEISS portrait optics and groundbreaking camera stabilization.',
    'Oppo': 'Sleek aesthetics, AI portrait enhancement, and military drop-proof reliability.',
    'Realme': 'Youth-centric style, periscope telephoto cameras, and vibrant AMOLED displays.',
    'Infinix': 'Official PUBG tournament gaming devices, cyberpunk LED mecha designs, and budget champions.',
    'Tecno': 'Innovative camera technology and durable everyday performance at accessible prices in Pakistan.',
    'Jinnah Pro Audio': 'Exclusive genuine accessories, GaN fast chargers, 9H tempered glass, and ANC earbuds.',
  };

  const filtered = activeBrand === 'All Brands' 
    ? products 
    : products.filter((p) => p.brand === activeBrand);

  const realBrands = BRANDS.filter((b) => b !== 'All Brands');

  return (
    <div className="py-8 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6]">
            Official Partner Lineup
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F2747] font-display tracking-tight mt-1">
            Shop By Official Brand
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Explore authentic models from the world’s top manufacturers available at Jinnah Mobile's in Khichi Wala.
          </p>
        </div>

        {/* Brand Selector Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {realBrands.map((brand) => {
            const isSelected = activeBrand === brand;
            const count = products.filter((p) => p.brand === brand).length;

            return (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1557A6] border-[#1557A6] text-white shadow-md shadow-blue-900/10 -translate-y-0.5'
                    : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50 text-slate-800'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Smartphone className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold block truncate">
                  {brand}
                </span>
                <span className={`text-[10px] block mt-0.5 ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                  {count} Available
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Brand Information Banner */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black text-[#0F2747] font-display">
                {activeBrand} Collection
              </h2>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600" />
                PTA Approved
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {brandDescriptions[activeBrand] || 'Browse authentic devices with official Pakistan warranty support.'}
            </p>
          </div>

          <div className="text-xs text-slate-500 shrink-0 font-medium bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
            Available at: <strong className="text-slate-800">Khichi Wala Store</strong>
          </div>
        </div>

        {/* Brand Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {filtered.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
              isWishlisted={wishlistIds.includes(item.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
