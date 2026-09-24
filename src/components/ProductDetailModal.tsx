import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShoppingCart, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  Check, 
  Heart,
  Smartphone,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Product } from '../types';
import { FORMAT_PKR, CREATE_WHATSAPP_LINK, BUSINESS_INFO } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedColor?: string, selectedStorage?: string, selectedRam?: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onDirectCheckout: (product: Product, quantity: number, selectedColor?: string, selectedStorage?: string, selectedRam?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  onDirectCheckout,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedStorage, setSelectedStorage] = useState(product.storageOptions?.[0] || '');
  const [selectedRam, setSelectedRam] = useState(product.ramOptions?.[0] || '');
  const [activeTab, setActiveTab] = useState<'specs' | 'features'>('specs');

  const whatsappInquiryUrl = CREATE_WHATSAPP_LINK(
    `${product.name} (${selectedColor ? selectedColor + ', ' : ''}${selectedStorage ? selectedStorage : ''})`,
    product.price,
    quantity
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]">
        
        {/* Sticky Modal Top Bar */}
        <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="uppercase text-[#1557A6] font-bold">{product.brand}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="truncate max-w-[200px] sm:max-w-xs">{product.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWishlist(product)}
              className="p-1.5 rounded-full hover:bg-slate-200/60 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
              title="Add to Wishlist"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-200/60 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left: Product Image & Badges */}
            <div className="md:col-span-6 flex flex-col items-center justify-center">
              <div className="w-full h-72 sm:h-84 bg-gradient-to-b from-blue-50/50 via-slate-50 to-white rounded-3xl border border-slate-200/80 p-6 flex items-center justify-center relative overflow-hidden">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 text-xs font-bold px-3 py-1 rounded-full bg-[#1557A6] text-white shadow-xs">
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Local Pickup assurance */}
              <div className="mt-4 w-full bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 flex items-center gap-2.5 text-xs text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>Available in Khichi Wala:</strong> Physical inspection & immediate pickup available today.
                </span>
              </div>
            </div>

            {/* Right: Buy Module */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {product.categoryLabel}
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-[#0F2747] font-display mt-0.5">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="text-xs font-bold text-slate-800 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs text-slate-500">Based on {product.reviewsCount} customer reviews</span>
                </div>
              </div>

              {/* Price */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-black text-[#0F2747] tabular-nums">
                  {FORMAT_PKR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through tabular-nums">
                    {FORMAT_PKR(product.originalPrice)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="ml-auto text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                    Save {FORMAT_PKR(product.originalPrice - product.price)}
                  </span>
                )}
              </div>

              {/* Short description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2">
                    Select Color: <span className="font-normal text-slate-500">{selectedColor}</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                          selectedColor === c.name
                            ? 'border-[#1557A6] bg-blue-50/50 text-[#1557A6] ring-2 ring-blue-500/20'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span 
                          className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs" 
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Storage Selection */}
              {product.storageOptions && product.storageOptions.length > 0 && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2">
                    Internal Storage:
                  </label>
                  <div className="flex items-center gap-2">
                    {product.storageOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setSelectedStorage(opt)}
                        className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          selectedStorage === opt
                            ? 'border-[#1557A6] bg-[#1557A6] text-white shadow-xs'
                            : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">
                  Quantity:
                </label>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 font-bold transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 text-xs font-bold text-slate-900 tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 font-bold transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">In stock at Khichi Wala store</span>
                </div>
              </div>

              {/* Purchase Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => {
                      onAddToCart(product, quantity, selectedColor, selectedStorage, selectedRam);
                      onClose();
                    }}
                    className="py-3 px-4 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs sm:text-sm font-bold rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-md shadow-blue-900/10 cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    onClick={() => {
                      onDirectCheckout(product, quantity, selectedColor, selectedStorage, selectedRam);
                      onClose();
                    }}
                    className="py-3 px-4 bg-[#0F2747] hover:bg-[#1557A6] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Buy Now</span>
                  </button>
                </div>

                {/* WhatsApp Inquiry Direct CTA */}
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire or Order via WhatsApp (03239036568)</span>
                </a>
              </div>

            </div>

          </div>

          {/* Technical Specs & Features Tabs */}
          <div className="pt-6 border-t border-slate-200">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
              <button
                onClick={() => setActiveTab('specs')}
                className={`text-sm font-bold pb-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'specs'
                    ? 'border-[#1557A6] text-[#1557A6]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Technical Specifications
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`text-sm font-bold pb-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'features'
                    ? 'border-[#1557A6] text-[#1557A6]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Key Highlights
              </button>
            </div>

            <div className="mt-4">
              {activeTab === 'specs' && product.specs && (
                <div className="bg-slate-50/70 rounded-2xl border border-slate-200/80 overflow-hidden divide-y divide-slate-200/80 text-xs">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="grid grid-cols-3 sm:grid-cols-4 p-3 sm:p-3.5">
                      <span className="font-bold text-slate-700 capitalize col-span-1">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="text-slate-600 col-span-2 sm:col-span-3">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'features' && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Have a question prompt */}
          <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-[#0F2747] block text-sm">Have a question?</span>
              <span className="text-slate-600">
                Contact Jinnah Mobile's store directly on WhatsApp <strong>03239036568</strong> for color availability, PTA checks, or reservations.
              </span>
            </div>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shrink-0 flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
