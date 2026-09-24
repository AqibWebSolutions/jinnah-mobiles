import React from 'react';
import { Star, ShoppingCart, Heart, MessageCircle, Eye } from 'lucide-react';
import { Product } from '../types';
import { FORMAT_PKR, CREATE_WHATSAPP_LINK } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails,
  isWishlisted,
  onToggleWishlist,
}) => {
  const whatsappUrl = CREATE_WHATSAPP_LINK(product.name, product.price, 1);

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden relative">
      
      {/* Top badges & Wishlist button */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div>
          {product.badge && (
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#1557A6] text-white shadow-xs">
              {product.badge}
            </span>
          )}
          {product.isDeal && product.originalPrice && (
            <span className="ml-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-500 text-white shadow-xs">
              SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className="pointer-events-auto p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-400 hover:text-rose-500 shadow-xs backdrop-blur-xs transition-colors cursor-pointer"
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>
      </div>

      {/* Product Image Area */}
      <div 
        onClick={() => onViewDetails(product)}
        className="relative pt-8 pb-4 px-4 bg-gradient-to-b from-slate-50/70 to-white flex items-center justify-center h-48 sm:h-52 overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Quick View Floating Button on Desktop Hover */}
        <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-white/95 text-[#0F2747] text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs">
            <Eye className="w-3.5 h-3.5 text-[#1557A6]" />
            Quick View
          </span>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <span className="font-semibold uppercase tracking-wider text-blue-600">{product.brand}</span>
            <span className="bg-slate-100 px-2 py-0.5 rounded-md text-slate-600 font-medium">{product.categoryLabel}</span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onViewDetails(product)}
            className="text-sm sm:text-base font-bold text-[#0F2747] hover:text-[#1557A6] transition-colors line-clamp-1 cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Specs / Short Description */}
          <p className="text-xs text-slate-500 mt-1 line-clamp-1">
            {product.shortDescription}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="text-xs font-bold text-slate-800 ml-1">{product.rating}</span>
            </div>
            <span className="text-slate-300 text-xs">·</span>
            <span className="text-[11px] text-slate-400">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Pricing & CTA Controls */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-base sm:text-lg font-extrabold text-[#0F2747] tabular-nums">
              {FORMAT_PKR(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through tabular-nums">
                {FORMAT_PKR(product.originalPrice)}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onAddToCart(product)}
              className="w-full py-2 px-3 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs font-bold rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-xl transition-all duration-150 flex items-center justify-center gap-1"
              title="Order directly on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span className="truncate">WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
