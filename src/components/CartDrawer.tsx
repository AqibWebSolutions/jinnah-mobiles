import React from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';
import { FORMAT_PKR, BUSINESS_INFO } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  // Quick WhatsApp cart order message generator
  const createWhatsAppCartOrder = () => {
    let msg = `*New Order Inquiry - Jinnah Mobile's*\n\n`;
    items.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.product.name}*\n`;
      if (item.selectedColor) msg += `   Color: ${item.selectedColor}\n`;
      if (item.selectedStorage) msg += `   Storage: ${item.selectedStorage}\n`;
      msg += `   Qty: ${item.quantity} x ${FORMAT_PKR(item.product.price)}\n`;
      msg += `   Subtotal: ${FORMAT_PKR(item.product.price * item.quantity)}\n\n`;
    });
    msg += `*Total Order Amount:* ${FORMAT_PKR(subtotal)}\n`;
    msg += `*Location:* Khichi Wala / Delivery Inquiry\n`;
    msg += `Please confirm stock availability and pickup/delivery details.`;

    return `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#1557A6]" />
              <h2 className="text-base font-bold text-[#0F2747]">
                Shopping Cart ({items.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-800">Your cart is empty</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  Looks like you haven't added any phones or accessories to your cart yet.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-5 py-2.5 bg-[#1557A6] text-white text-xs font-bold rounded-xl hover:bg-[#0F2747] transition-colors cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div 
                  key={`${item.product.id}-${item.selectedColor}-${item.selectedStorage}`}
                  className="flex gap-3.5 p-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-blue-200 transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="w-18 h-18 rounded-xl bg-white border border-slate-100 p-1.5 flex items-center justify-center shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F2747] truncate">
                      {item.product.name}
                    </h4>
                    
                    <div className="text-[11px] text-slate-500 mt-0.5 space-x-1.5">
                      {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                      {item.selectedStorage && <span>· {item.selectedStorage}</span>}
                    </div>

                    <div className="text-xs font-bold text-[#1557A6] mt-1 tabular-nums">
                      {FORMAT_PKR(item.product.price)}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 text-xs font-bold cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-slate-800 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 text-xs font-bold cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-slate-400 hover:text-rose-500 p-1 transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500">Subtotal:</span>
                <span className="font-extrabold text-[#0F2747] text-base tabular-nums">
                  {FORMAT_PKR(subtotal)}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Khichi Wala Store Pickup:</span>
                <span className="text-emerald-600 font-bold">FREE</span>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={() => {
                    onClose();
                    onProceedToCheckout();
                  }}
                  className="w-full py-3 px-4 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={createWhatsAppCartOrder()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Cart Directly to WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                Payment on Delivery or In-Store Pickup at Fort Abbas Rd, Khichi Wala
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
