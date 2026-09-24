import React, { useState } from 'react';
import { 
  HelpCircle, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  MessageCircle, 
  Phone, 
  MapPin, 
  ChevronDown, 
  Check 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const SupportPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are all phones at Jinnah Mobile's PTA approved?",
      a: "Yes! Every single smartphone sold at Jinnah Mobile's is 100% official and PTA approved. We assist you with instant IMEI verification on the official PTA DIRBS system right in front of you."
    },
    {
      q: "Can I inspect the phone or accessories in person before buying?",
      a: "Absolutely! We encourage you to visit our store at Fort Abbas - Haroonabad Rd, Khichi Wala. You can hold the phones, test the screens, try the earbuds audio quality, and verify everything before paying."
    },
    {
      q: "Do you offer free screen protector installation?",
      a: "Yes! When you purchase any 9H tempered glass screen protector or matte privacy guard from us, our experienced technician installs it on your device for free with zero dust and zero bubbles."
    },
    {
      q: "How does WhatsApp ordering work?",
      a: "Simply click any 'Order on WhatsApp' button on our website. A pre-filled message with the product name and price will open directly in your WhatsApp conversation with us at 03239036568. We confirm availability within minutes and arrange pickup or delivery."
    },
    {
      q: "What warranty comes with phones and accessories?",
      a: "Smartphones come with the manufacturer's official 1-year brand warranty (Samsung, Xiaomi, Apple, Infinix, Tecno, etc.) valid at authorized service centers across Pakistan. Accessories carry our direct 6-month Khichi Wala store replacement guarantee."
    },
    {
      q: "What areas do you deliver to?",
      a: "We offer local same-day delivery across Khichi Wala, Haroonabad, Fort Abbas, and surrounding villages with Cash on Delivery."
    }
  ];

  return (
    <div className="py-10 bg-[#FAFBFD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6]">
            Here to Help You
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0F2747] font-display tracking-tight mt-1">
            Customer Support & FAQs
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-lg mx-auto">
            Find answers regarding PTA verification, local store pickup in Khichi Wala, warranties, and WhatsApp ordering.
          </p>
        </div>

        {/* Support Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#0F2747]">100% PTA Approved</h3>
            <p className="text-xs text-slate-500 mt-1">
              Guaranteed official IMEI status verified directly via PTA DIRBS portal.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#0F2747]">Khichi Wala Pickup</h3>
            <p className="text-xs text-slate-500 mt-1">
              Pick up same day at Fort Abbas - Haroonabad Rd, or get local delivery.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#0F2747]">Direct Warranty</h3>
            <p className="text-xs text-slate-500 mt-1">
              1-Year official brand warranty + local store replacement for accessories.
            </p>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
          <h2 className="text-xl font-black text-[#0F2747] font-display flex items-center gap-2 pb-2 border-b border-slate-100">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </h2>

          <div className="divide-y divide-slate-100">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-3.5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-bold text-sm text-[#0F2747] hover:text-blue-600 transition-colors py-1 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed pl-1 animate-in fade-in">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Need Direct Help CTA */}
        <div className="p-6 bg-gradient-to-r from-[#1557A6] to-[#0F2747] rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">Still have a question?</h3>
            <p className="text-xs text-blue-200 mt-0.5">
              Talk directly with our store owner or technician in Khichi Wala.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="px-4 py-2.5 bg-white text-[#0F2747] text-xs font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call 03239036568</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
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
