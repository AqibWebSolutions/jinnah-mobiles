import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  MessageCircle,
  Sparkles,
  MapPin
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { PageRoute } from '../types';

interface HeroProps {
  onShopMobiles: () => void;
  onExploreDeals: () => void;
  onSelectProductById: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onShopMobiles,
  onExploreDeals,
  onSelectProductById
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F4F8FD] via-[#FFFFFF] to-[#EAF3FF] py-10 lg:py-16 border-b border-blue-100/60">
      {/* Subtle decorative glowing mesh */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Sub-label kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200/80 shadow-xs text-xs font-semibold text-[#1557A6]">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Khichi Wala’s Premier Mobile & Gadget Destination</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-[#0F2747] font-display leading-[1.12]">
              Upgrade Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1557A6] via-[#2563EB] to-[#1D4ED8]">
                Mobile Experience
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Latest smartphones, genuine accessories, and competitive prices — all at <span className="font-semibold text-slate-900">Jinnah Mobile's</span>. Visit our showroom in Khichi Wala or order directly on WhatsApp.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onShopMobiles}
                className="px-6 py-3.5 bg-[#1557A6] hover:bg-[#0F2747] text-white font-bold rounded-xl shadow-md shadow-blue-900/15 hover:shadow-lg transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <span>Shop Mobiles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreDeals}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#0F2747] font-bold rounded-xl border border-slate-200 hover:border-blue-300 shadow-xs transition-all duration-200 cursor-pointer"
              >
                <span>Explore Deals</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-xs transition-all duration-200 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            {/* Feature Indicators */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                  <Smartphone className="w-3 h-3" />
                </div>
                <span>Latest Smartphones</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <span>Genuine Accessories</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <Zap className="w-3 h-3" />
                </div>
                <span>Competitive Prices</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Realistic Visual Arrangement */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Product Showcase Card */}
              <div className="relative bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-3xl border border-blue-100 shadow-xl shadow-blue-900/8 overflow-hidden group">
                
                {/* Floating badge top */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0F2747]/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full backdrop-blur-md shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Featured Flagship Series</span>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-b from-blue-50/50 to-white flex items-center justify-center overflow-hidden">
                  <img
                    src={BUSINESS_INFO.heroImage}
                    alt="Latest Smartphones at Jinnah Mobile's"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Overlay text on image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider font-semibold text-blue-200">New Arrivals 2026</p>
                    <p className="text-base font-bold drop-shadow-sm">Next-Gen Flagship & Mid-Range Lineup</p>
                  </div>
                </div>

                {/* Quick specs grid bar */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">PTA Status</span>
                    <span className="font-bold text-[#0F2747]">100% Approved</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">Warranty</span>
                    <span className="font-bold text-[#0F2747]">Official 1 Year</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">Store Pickup</span>
                    <span className="font-bold text-emerald-600">Khichi Wala</span>
                  </div>
                </div>

                {/* Quick button to view S25 Ultra */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">Featured Model</span>
                    <span className="text-sm font-bold text-[#0F2747]">Galaxy S25 Ultra / iPhone 16</span>
                  </div>
                  <button
                    onClick={() => onSelectProductById('samsung-s25-ultra')}
                    className="px-3.5 py-1.5 bg-[#EAF3FF] hover:bg-[#1557A6] hover:text-white text-[#1557A6] text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    View Specs
                  </button>
                </div>

              </div>

              {/* Floating Testimonial / Store Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-lg items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">
                  <MapPin className="w-5 h-5 text-[#1557A6]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Fort Abbas - Haroonabad Rd</p>
                  <p className="text-[11px] text-slate-500">Khichi Wala, Punjab</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
