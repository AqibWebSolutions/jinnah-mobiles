import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = `Hello Jinnah Mobile's! I am contacting you from your website regarding mobiles and accessories in Khichi Wala. Please assist me.`;
  const whatsappUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-none">
      
      {/* Speech bubble / Tooltip */}
      {showTooltip && (
        <div className="pointer-events-auto hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat with Jinnah Mobile's</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg shadow-emerald-900/20 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Contact Jinnah Mobile's on WhatsApp"
        title="Chat on WhatsApp (03239036568)"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
        
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping -z-10 group-hover:hidden" />
      </a>

    </div>
  );
};
