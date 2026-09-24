import React from 'react';
import { Smartphone, ShieldCheck, HeartHandshake, MapPin, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-10 bg-[#FAFBFD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6]">
            Our Story & Commitment
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0F2747] font-display tracking-tight mt-1">
            About Jinnah Mobile's
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            Providing authentic smartphones, verified accessories, and honest mobile guidance to Khichi Wala and surrounding Punjab communities.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-[#0F2747] font-display">
                Dedicated to Genuine Technology in Khichi Wala
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Founded with a mission to bring true brand-authorized smartphones and top-quality mobile gear to Fort Abbas - Haroonabad Road, <strong>Jinnah Mobile's</strong> has grown into the area's most trusted name in mobile retail.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unlike unverified sellers, we verify every single phone on the official Pakistan Telecommunication Authority (PTA) DIRBS database before handing it to a customer. We also rigorously test chargers, power banks, and cables so you never risk your phone's battery health.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={BUSINESS_INFO.storeImage}
                alt="Jinnah Mobile's Khichi Wala Retail Shop"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Pillars */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <ShieldCheck className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="text-sm font-bold text-[#0F2747]">100% Authentic Stock</h3>
              <p className="text-xs text-slate-500 mt-1">
                Zero fake clones or refurbs. Only genuine boxed units with official warranties.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <HeartHandshake className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="text-sm font-bold text-[#0F2747]">Fair Local Pricing</h3>
              <p className="text-xs text-slate-500 mt-1">
                Transparent rates in PKR matching open national retail benchmarks.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <MapPin className="w-6 h-6 text-rose-600 mb-2" />
              <h3 className="text-sm font-bold text-[#0F2747]">Physical Presence</h3>
              <p className="text-xs text-slate-500 mt-1">
                A real storefront you can visit anytime for service, advice, and assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="bg-[#0F2747] text-white p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Visit us at Khichi Wala</h3>
            <p className="text-xs text-slate-300 mt-1">
              8XH5+H7G, Fort Abbas - Haroonabad Rd, Khichi Wala, Pakistan
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>03239036568</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
