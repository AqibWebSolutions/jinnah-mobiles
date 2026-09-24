import React from 'react';
import { 
  Smartphone, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ArrowUp,
  Instagram,
  Facebook,
  Youtube,
  Send
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F2747] text-white pt-14 pb-8 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-blue-900/60">
          
          {/* Col 1 & 2: Brand Lockup & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1557A6] flex items-center justify-center text-white shadow-md">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-2xl font-black font-display tracking-tight block leading-none">
                  Jinnah <span className="text-blue-400">Mobile's</span>
                </span>
                <span className="text-[11px] text-blue-200/70 font-medium tracking-wider uppercase mt-1 block">
                  Khichi Wala, Pakistan
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your trusted local destination for authentic smartphones, premium mobile accessories, screen guards, and everyday mobile essentials.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="hover:text-white transition-colors tabular-nums font-bold">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={BUSINESS_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-300 transition-colors font-medium"
                >
                  WhatsApp: {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>

            {/* Social Placeholders */}
            <div className="flex items-center gap-3 pt-3">
              <a 
                href="#social-facebook" 
                className="w-8 h-8 rounded-lg bg-blue-900/60 hover:bg-[#1557A6] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#social-instagram" 
                className="w-8 h-8 rounded-lg bg-blue-900/60 hover:bg-[#1557A6] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#social-youtube" 
                className="w-8 h-8 rounded-lg bg-blue-900/60 hover:bg-[#1557A6] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href={BUSINESS_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-600/40 hover:bg-emerald-600 flex items-center justify-center text-emerald-300 hover:text-white transition-colors"
                aria-label="WhatsApp Channel"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Shop */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-blue-900 pb-2">
              Shop Catalog
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button 
                  onClick={() => onNavigate('mobiles')} 
                  className="hover:text-blue-300 transition-colors text-left cursor-pointer"
                >
                  All Mobiles & Phones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('accessories')} 
                  className="hover:text-blue-300 transition-colors text-left cursor-pointer"
                >
                  Mobile Accessories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('deals')} 
                  className="hover:text-rose-400 font-semibold transition-colors text-left cursor-pointer"
                >
                  Deals & Special Offers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('brands')} 
                  className="hover:text-blue-300 transition-colors text-left cursor-pointer"
                >
                  Explore by Brand
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-blue-300 transition-colors text-left cursor-pointer"
                >
                  New Arrivals 2026
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-blue-900 pb-2">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-blue-300 transition-colors text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a 
                  href={BUSINESS_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  WhatsApp Ordering
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('support')} 
                  className="hover:text-blue-300 transition-colors text-left cursor-pointer"
                >
                  Shipping & Local Pickup
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('support')} 
                  className="hover:text-blue-300 transition-colors text-left cursor-pointer"
                >
                  Warranty & Returns
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('support')} 
                  className="hover:text-blue-300 transition-colors text-left cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-blue-900 pb-2">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-blue-300 transition-colors text-left cursor-pointer"
                >
                  About Jinnah Mobile's
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('store-location')} 
                  className="hover:text-blue-300 transition-colors text-left cursor-pointer"
                >
                  Khichi Wala Store Location
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('support')} 
                  className="hover:text-blue-300 transition-colors text-left cursor-pointer"
                >
                  PTA Verification Info
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('support')} 
                  className="hover:text-blue-300 transition-colors text-left cursor-pointer"
                >
                  Privacy Policy & Terms
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 Jinnah Mobile's. All rights reserved.</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              8XH5+H7G, Fort Abbas - Haroonabad Rd, Khichi Wala, Pakistan
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-900/50 hover:bg-blue-900 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
