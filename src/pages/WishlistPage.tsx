import React from 'react';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';

interface WishlistPageProps {
  products: Product[];
  wishlistIds: string[];
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
  onToggleWishlist: (p: Product) => void;
  onStartShopping: () => void;
}

export const WishlistPage: React.FC<WishlistPageProps> = ({
  products,
  wishlistIds,
  onAddToCart,
  onViewDetails,
  onToggleWishlist,
  onStartShopping,
}) => {
  const wishlistedProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="py-10 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider mb-1">
              <Heart className="w-3.5 h-3.5 fill-rose-500" />
              <span>Saved Items</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0F2747] font-display">
              Your Wishlist ({wishlistedProducts.length})
            </h1>
          </div>
          {wishlistedProducts.length > 0 && (
            <button
              onClick={onStartShopping}
              className="text-xs font-bold text-[#1557A6] hover:underline"
            >
              Continue Browsing
            </button>
          )}
        </div>

        {/* Content */}
        {wishlistedProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto my-12 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">Your wishlist is empty</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6">
              Save your favorite phones and accessories while exploring our catalog.
            </p>
            <button
              onClick={onStartShopping}
              className="px-6 py-3 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Mobiles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {wishlistedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
                isWishlisted={true}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
