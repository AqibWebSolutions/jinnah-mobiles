import React, { useState } from 'react';
import { 
  Phone, 
  Search, 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  Tag, 
  MapPin, 
  MessageCircle,
  Smartphone,
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { PageRoute } from '../types';

interface HeaderProps {
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute) => void;
  cartCount: number;
  wishlistCount: number;
  openCart: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  cartCount,
  wishlistCount,
  openCart,
  searchTerm,
  setSearchTerm,
  onSearchSubmit,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);

  const navLinks: { label: string; route: PageRoute; badge?: string; isSpecial?: boolean }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Mobiles', route: 'mobiles' },
    { label: 'Accessories', route: 'accessories' },
    { label: 'Brands', route: 'brands' },
    { label: 'Deals', route: 'deals', badge: 'Hot', isSpecial: true },
    { label: 'Store Location', route: 'store-location' },
    { label: 'Support', route: 'support' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    setCurrentPage(route);
    setMobileMenuOpen(false);
    setShowSearchMobile(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-slate-100">
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#0F2747] text-white text-xs py-2 px-4 sm:px-8 border-b border-blue-950/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="font-semibold text-blue-300">Welcome to Jinnah Mobile's</span>
            <span className="text-slate-400 hidden sm:inline">·</span>
            <span className="text-slate-300 hidden sm:inline">Khichi Wala's Trusted Mobile & Accessories Store</span>
          </div>
          <div className="flex items-center gap-4 shrink-0 text-slate-200">
            <a 
              href={`tel:${BUSINESS_INFO.phoneTel}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-medium tabular-nums">{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a 
              href={BUSINESS_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Brand & Search Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Brand Logo Lockup */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-3 shrink-0 group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1557A6] to-[#0F2747] flex items-center justify-center text-white shadow-md shadow-blue-900/15 group-hover:scale-105 transition-transform duration-200">
              <Smartphone className="w-5 h-5 text-blue-200" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0F2747] font-display block leading-none">
                Jinnah <span className="text-[#2563EB]">Mobile's</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase mt-0.5 block">
                Khichi Wala · Genuine Store
              </span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <form 
            onSubmit={onSearchSubmit}
            className="hidden md:flex flex-1 max-w-xl relative"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search phones, accessories, brands (e.g. Samsung, Earbuds, Charger)..."
                className="w-full pl-11 pr-24 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-3 focus:ring-blue-100 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs font-semibold rounded-full transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Action Icons */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setShowSearchMobile(!showSearchMobile)}
              className="p-2 text-slate-600 hover:text-[#1557A6] md:hidden rounded-lg hover:bg-slate-50"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => handleNavClick('wishlist')}
              className="relative p-2 text-slate-600 hover:text-[#1557A6] rounded-lg hover:bg-slate-50 transition-colors"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="flex items-center gap-2 px-3 py-2 bg-[#EAF3FF] hover:bg-[#d8e9ff] text-[#1557A6] rounded-xl font-semibold text-sm transition-all duration-150 hover:shadow-xs"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#2563EB] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-bold tabular-nums">Cart ({cartCount})</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#1557A6] lg:hidden rounded-lg hover:bg-slate-50"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input Expanded */}
        {showSearchMobile && (
          <form onSubmit={onSearchSubmit} className="mt-3 md:hidden">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search phones, accessories..."
                autoFocus
                className="w-full pl-10 pr-20 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#2563EB]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#1557A6] text-white text-xs font-semibold rounded-md"
              >
                Search
              </button>
            </div>
          </form>
        )}
      </div>

      {/* 3. Navigation Row (Desktop) */}
      <div className="hidden lg:block border-t border-slate-100 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <ul className="flex items-center gap-1 py-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.route;
                return (
                  <li key={link.route}>
                    <button
                      onClick={() => handleNavClick(link.route)}
                      className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-150 flex items-center gap-1.5 ${
                        link.isSpecial
                          ? 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                          : isActive
                          ? 'text-[#1557A6] bg-blue-50/70 font-bold'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                      }`}
                    >
                      {link.isSpecial && <Tag className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />}
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.2 font-bold bg-rose-500 text-white rounded-full">
                          {link.badge}
                        </span>
                      )}
                      {isActive && !link.isSpecial && (
                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#1557A6] rounded-full" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Quick in-store pickup guarantee badge */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 py-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Khichi Wala In-Store Demo & Pickup Available</span>
            </div>
          </nav>
        </div>
      </div>

      {/* 4. Slide-Out Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 pt-1">Navigation</div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg text-left ${
                  currentPage === link.route
                    ? 'bg-[#EAF3FF] text-[#1557A6] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 font-bold bg-rose-500 text-white rounded-full">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-100 text-slate-800 rounded-xl font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Us: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 text-white rounded-xl font-semibold text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
