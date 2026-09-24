import React from 'react';
import { ArrowRight, Headphones, Star, ShoppingCart, MessageCircle, Heart } from 'lucide-react';
import { Product } from '../types';
import { FORMAT_PKR, CREATE_WHATSAPP_LINK } from '../data/products';

interface TopAccessoriesProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onViewAllAccessories: () => void;
}

export const TopAccessories: React.FC<TopAccessoriesProps> = ({
  products,
  onAddToCart,
  onViewDetails,
  wishlistIds,
  onToggleWishlist,
  onViewAllAccessories,
}) => {
  // Filter accessories only
  const accessories = products.filter((p) => p.isAccessory).slice(0, 8);

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              <Headphones className="w-3.5 h-3.5" />
              <span>Essential Mobile Gear</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2747] font-display tracking-tight">
              Top Selling Accessories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Fast chargers, wireless earbuds, tough screen guards, and everyday mobile essentials
            </p>
          </div>
          <button
            onClick={onViewAllAccessories}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1557A6] hover:text-[#0F2747] transition-colors cursor-pointer group"
          >
            <span>View All Accessories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {accessories.map((item) => {
            const isWishlisted = wishlistIds.includes(item.id);
            const whatsappUrl = CREATE_WHATSAPP_LINK(item.name, item.price, 1);

            return (
              <div 
                key={item.id}
                className="group bg-slate-50/60 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Wishlist toggle */}
                <button
                  onClick={() => onToggleWishlist(item)}
                  className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-400 hover:text-rose-500 shadow-xs backdrop-blur-xs transition-colors cursor-pointer"
                  title="Wishlist"
                  aria-label="Add to wishlist"
                >
                  <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>

                {/* Badge if available */}
                {item.badge && (
                  <span className="absolute top-2.5 left-2.5 z-10 text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#1557A6] text-white">
                    {item.badge}
                  </span>
                )}

                {/* Image */}
                <div 
                  onClick={() => onViewDetails(item)}
                  className="pt-7 pb-3 px-3 h-44 flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-3.5 sm:p-4 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 
                      onClick={() => onViewDetails(item)}
                      className="text-xs sm:text-sm font-bold text-[#0F2747] hover:text-[#1557A6] line-clamp-2 cursor-pointer transition-colors leading-snug"
                    >
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      {item.shortDescription}
                    </p>
                    
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex items-center text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="text-xs font-bold text-slate-700 ml-1">{item.rating}</span>
                      </div>
                      <span className="text-slate-300 text-xs">·</span>
                      <span className="text-[10px] text-slate-400">({item.reviewsCount})</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100">
                    <div className="flex items-baseline gap-1.5 mb-2.5">
                      <span className="text-sm sm:text-base font-extrabold text-[#0F2747] tabular-nums">
                        {FORMAT_PKR(item.price)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-[11px] text-slate-400 line-through tabular-nums">
                          {FORMAT_PKR(item.originalPrice)}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        onClick={() => onAddToCart(item)}
                        className="py-1.5 px-2 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ShoppingCart className="w-3 h-3" />
                        <span>Add</span>
                      </button>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 text-center truncate"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">Order</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
