import React from 'react';
import { Tag, Sparkles, ShoppingBag, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { FORMAT_PKR } from '../data/products';

interface DealsPageProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (p: Product) => void;
}

export const DealsPage: React.FC<DealsPageProps> = ({
  products,
  onAddToCart,
  onViewDetails,
  wishlistIds,
  onToggleWishlist,
}) => {
  const deals = products.filter((p) => p.isDeal);

  // Bundles for Jinnah Mobile's
  const bundles = [
    {
      title: "Smartphone Protection Bundle",
      items: "9H Diamond Tempered Glass + Shockproof Armor Case",
      originalPrice: 1800,
      bundlePrice: 1399,
      savings: "Save Rs. 401",
      badge: "Free In-Store Fit",
      description: "Complete 360-degree impact and screen protection for any smartphone model. Applied with zero bubbles at our Khichi Wala store."
    },
    {
      title: "Speed Power Bundle",
      items: "65W GaN Super Charger + 100W Braided USB-C Cable",
      originalPrice: 4849,
      bundlePrice: 3999,
      savings: "Save Rs. 850",
      badge: "Fast Charging",
      description: "Ultra-compact dual port fast charging capable of recharging your smartphone and laptop simultaneously."
    },
    {
      title: "Commuter Audio & Travel Bundle",
      items: "Jinnah Pro Sound ANC Earbuds + 20,000mAh Power Bank",
      originalPrice: 11498,
      bundlePrice: 8999,
      savings: "Save Rs. 2,499",
      badge: "Best Value",
      description: "Travel everywhere with 38 hours of noise-cancelling audio and 4 full smartphone battery recharges in your pocket."
    }
  ];

  return (
    <div className="py-8 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-500 via-[#1557A6] to-[#0F2747] rounded-3xl p-6 sm:p-10 text-white shadow-lg">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-3">
              <Tag className="w-3.5 h-3.5" />
              Special Discounts & Bundles
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight">
              Deals & Limited Offers
            </h1>
            <p className="text-xs sm:text-sm text-slate-100 mt-2 leading-relaxed">
              Save big on popular smartphones and genuine accessories at Jinnah Mobile's. Transparent pricing with instant WhatsApp reservation.
            </p>
          </div>
        </div>

        {/* Exclusive Store Bundles */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F2747] font-display flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Khichi Wala Store Exclusive Bundles</span>
            </h2>
            <p className="text-xs text-slate-500">
              Combine and save on complementary mobile gear
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {bundles.map((bundle, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl border border-blue-200/70 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700">
                  {bundle.savings}
                </div>

                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600">
                    {bundle.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F2747] mt-1 leading-snug">
                    {bundle.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700 mt-1">
                    {bundle.items}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {bundle.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-black text-[#0F2747] tabular-nums">
                      {FORMAT_PKR(bundle.bundlePrice)}
                    </span>
                    <span className="text-xs text-slate-400 line-through tabular-nums">
                      {FORMAT_PKR(bundle.originalPrice)}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/923239036568?text=${encodeURIComponent(`Hello Jinnah Mobile's! I am interested in reserving the "${bundle.title}" for ${FORMAT_PKR(bundle.bundlePrice)}. Please let me know availability in Khichi Wala.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    <span>Reserve Bundle on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discounted Products Grid */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F2747] font-display">
              Discounted Phones & Accessories
            </h2>
            <p className="text-xs text-slate-500">
              Verified items currently on sale at reduced prices in Pakistani Rupees
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {deals.map((item) => (
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
    </div>
  );
};
