import React from 'react';
import { ArrowRight, Shield, Zap, Sparkles, Smartphone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface PromoBannersProps {
  onShopMobiles: () => void;
  onShopAccessories: () => void;
  onExploreDeals: () => void;
}

export const PromoBanners: React.FC<PromoBannersProps> = ({
  onShopMobiles,
  onShopAccessories,
  onExploreDeals,
}) => {
  return (
    <section className="py-10 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Banner 1: Upgrade Your Phone */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#EAF3FF] via-[#F0F7FF] to-[#DCEBFF] border border-blue-200/70 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-700 text-xs font-bold mb-3">
                <Smartphone className="w-3.5 h-3.5" />
                Latest Smartphones
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0F2747] font-display leading-tight">
                Upgrade Your Phone
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-4 leading-relaxed">
                Explore the latest iPhone, Samsung, Xiaomi, and Vivo models with official PTA warranty.
              </p>
            </div>
            
            <div className="relative z-10 pt-2">
              <button
                onClick={onShopMobiles}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer group"
              >
                <span>View Smartphone Lineup</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Banner 2: Protect Your Device */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#E0E7FF] border border-indigo-200/70 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-600/10 text-indigo-700 text-xs font-bold mb-3">
                <Shield className="w-3.5 h-3.5" />
                Armor & Protection
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0F2747] font-display leading-tight">
                Protect Your Phone
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-4 leading-relaxed">
                9H diamond tempered glass and military-grade shockproof cases with free in-store application.
              </p>
            </div>
            
            <div className="relative z-10 pt-2">
              <button
                onClick={onShopAccessories}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0F2747] hover:bg-[#1557A6] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer group"
              >
                <span>Shop Screen & Cases</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Banner 3: Power Up */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F0FDF4] via-[#F8FAFC] to-[#DCFCE7] border border-emerald-200/70 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-600/10 text-emerald-700 text-xs font-bold mb-3">
                <Zap className="w-3.5 h-3.5" />
                GaN Fast Charging
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0F2747] font-display leading-tight">
                Power Up & Never Run Out
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-4 leading-relaxed">
                65W GaN superchargers, 100W cables, and 20,000mAh digital power banks at wholesale rates.
              </p>
            </div>
            
            <div className="relative z-10 pt-2">
              <button
                onClick={onExploreDeals}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer group"
              >
                <span>Explore Charger Deals</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
};
