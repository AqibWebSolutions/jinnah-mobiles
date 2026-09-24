import React from 'react';
import { 
  Smartphone, 
  ShieldCheck, 
  BadgePercent, 
  Headphones, 
  MessageCircle, 
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const WhyChooseUs: React.FC = () => {
  const trustFeatures = [
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: 'Latest Mobile Models',
      description: 'Official stock of flagship, mid-range, and budget devices from Samsung, Apple, Xiaomi, Vivo, and Tecno.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Quality Accessories',
      description: 'Tested charging cables, genuine GaN fast adapters, tempered glass, and durable drop-proof armor cases.'
    },
    {
      icon: <BadgePercent className="w-6 h-6 text-amber-600" />,
      title: 'Competitive Prices',
      description: 'Honest, market-matching pricing in Pakistani Rupees with frequent store discounts and package bundles.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-indigo-600" />,
      title: 'Helpful Customer Service',
      description: 'Direct consultation, PTA verification guidance, data transfer assistance, and respectful local support.'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-emerald-600" />,
      title: 'Easy WhatsApp Ordering',
      description: 'One-click inquiries directly to 03239036568 with fast responses on price, stock, and reservation.'
    },
    {
      icon: <MapPin className="w-6 h-6 text-rose-600" />,
      title: 'Convenient Local Shopping',
      description: 'Convenient physical storefront on Fort Abbas - Haroonabad Rd in Khichi Wala for hands-on inspections.'
    },
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6]">
            Built On Local Trust
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F2747] font-display tracking-tight mt-1">
            Why Shop With Jinnah Mobile's?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Serving Khichi Wala and nearby communities with transparent advice, authentic inventory, and dedicated service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustFeatures.map((feat, index) => (
            <div 
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-[#0F2747] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{feat.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
