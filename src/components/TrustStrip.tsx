import React from 'react';
import { Truck, ShieldCheck, ShoppingCart, MessageSquare } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: <Truck className="w-5 h-5 text-blue-600" />,
      title: 'Fast Local Service',
      desc: 'Same-day pickup in Khichi Wala'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: 'Quality Products',
      desc: '100% Genuine and PTA verified'
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-indigo-600" />,
      title: 'Easy Ordering',
      desc: 'Cash on delivery or store pickup'
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-emerald-600" />,
      title: 'WhatsApp Support',
      desc: '03239036568 quick answers'
    },
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0F2747] leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
