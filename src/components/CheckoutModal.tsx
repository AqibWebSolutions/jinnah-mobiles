import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, MapPin, Phone, User, FileText, ShoppingBag, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';
import { FORMAT_PKR, BUSINESS_INFO } from '../data/products';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Khichi Wala');
  const [notes, setNotes] = useState('');
  const [deliveryType, setDeliveryType] = useState<'store_pickup' | 'delivery'>('store_pickup');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const deliveryFee = deliveryType === 'store_pickup' ? 0 : 250;
  const grandTotal = subtotal + deliveryFee;

  // Build tailored WhatsApp message with customer details and cart contents
  const generateWhatsAppMessage = () => {
    let msg = `*NEW ORDER - JINNAH MOBILE'S*\n`;
    msg += `------------------------------\n`;
    msg += `*Customer:* ${name || 'Valued Customer'}\n`;
    msg += `*Phone:* ${phone || 'Not specified'}\n`;
    msg += `*Order Method:* ${deliveryType === 'store_pickup' ? 'In-Store Pickup (Khichi Wala)' : 'Local Delivery'}\n`;
    msg += `*Address / Area:* ${address ? address + ', ' : ''}${city}\n`;
    if (notes) msg += `*Notes:* ${notes}\n`;
    msg += `------------------------------\n`;
    msg += `*ITEMS ORDERED:*\n`;
    items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.product.name} (Qty: ${item.quantity})\n`;
      if (item.selectedColor) msg += `   Color: ${item.selectedColor}\n`;
      if (item.selectedStorage) msg += `   Storage: ${item.selectedStorage}\n`;
      msg += `   Price: ${FORMAT_PKR(item.product.price * item.quantity)}\n`;
    });
    msg += `------------------------------\n`;
    msg += `*Subtotal:* ${FORMAT_PKR(subtotal)}\n`;
    msg += `*Delivery:* ${deliveryFee === 0 ? 'FREE (Store Pickup)' : FORMAT_PKR(deliveryFee)}\n`;
    msg += `*Total Payable:* ${FORMAT_PKR(grandTotal)}\n\n`;
    msg += `Please confirm my order and stock availability. Thank you!`;

    return `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(msg)}`;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const randomOrder = 'JM-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomOrder);
    setIsSubmitted(true);
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#1557A6]" />
            <h2 className="text-base font-bold text-[#0F2747]">
              Checkout & Order Confirmation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-[#0F2747] font-display">
                Order Received Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>! Your order reference is <span className="font-bold text-[#1557A6]">{orderNumber}</span>.
                Our team at Jinnah Mobile's in Khichi Wala will contact you shortly via call or WhatsApp.
              </p>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Items:</span>
                  <span className="font-bold text-slate-800">{items.reduce((acc, i) => acc + i.quantity, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Amount:</span>
                  <span className="font-black text-[#1557A6]">{FORMAT_PKR(grandTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Method:</span>
                  <span className="font-semibold text-slate-800">{deliveryType === 'store_pickup' ? 'Khichi Wala Store Pickup' : 'Home Delivery'}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-2.5 justify-center max-w-md mx-auto">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation to WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Close & Continue
                </button>
              </div>
            </div>
          ) : (
            /* Order Form */
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              
              {/* Delivery Type Option */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">
                  Select Fulfillment Method:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setDeliveryType('store_pickup')}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                      deliveryType === 'store_pickup'
                        ? 'border-[#1557A6] bg-blue-50/70 text-[#1557A6] ring-1 ring-[#1557A6]'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold block">In-Store Pickup</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">FREE</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      Pick up at Fort Abbas Rd, Khichi Wala
                    </span>
                  </div>

                  <div
                    onClick={() => setDeliveryType('delivery')}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                      deliveryType === 'delivery'
                        ? 'border-[#1557A6] bg-blue-50/70 text-[#1557A6] ring-1 ring-[#1557A6]'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold block">Local Delivery</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">Rs. 250</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      Cash on Delivery to Khichi Wala & nearby
                    </span>
                  </div>
                </div>
              </div>

              {/* Customer Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mb-1.5">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span>Customer Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mb-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Phone / WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 03239036568"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-600" />
                    <span>City / Town *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Khichi Wala, Haroonabad, etc."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>Address / Nearby Landmark</span>
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street, Chowk, or Mohalla"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mb-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Order Notes / Inquiries</span>
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Please bring tempered glass installation kit, or check Blue color stock."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
              </div>

              {/* Order Summary Box */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal ({items.length} items):</span>
                  <span className="font-semibold text-slate-800">{FORMAT_PKR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Fulfillment ({deliveryType === 'store_pickup' ? 'Khichi Wala Store' : 'Delivery'}):</span>
                  <span className="font-semibold text-emerald-600">
                    {deliveryFee === 0 ? 'FREE' : FORMAT_PKR(deliveryFee)}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-bold text-[#0F2747]">
                  <span>Total Payable:</span>
                  <span className="text-base font-extrabold text-[#1557A6]">{FORMAT_PKR(grandTotal)}</span>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="space-y-2.5 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Place Order (Cash on Delivery)</span>
                  </button>

                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs text-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order via WhatsApp (Instant)</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>100% Genuine Guarantee · Official PTA Status Verified · Direct Local Contact</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>

    </div>
  );
};
