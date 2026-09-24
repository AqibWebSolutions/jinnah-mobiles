import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Building
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      setSubmitted(true);
    }
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Jinnah Mobile's! My name is ${name || 'Customer'}. ${message || 'I would like to inquire about phone availability at your Khichi Wala store.'}`;
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="py-10 bg-[#FAFBFD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0F2747] font-display tracking-tight mt-1">
            Contact Jinnah Mobile's
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Reach out for price inquiries, model availability, trade-in advice, or visit our retail store in Khichi Wala.
          </p>
        </div>

        {/* Contact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Call Us */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1557A6] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#0F2747]">Call Directly</h3>
              <p className="text-xs text-slate-500 mt-1 mb-3">
                Speak directly to our store staff during working hours.
              </p>
              <p className="text-lg font-black text-[#1557A6] tabular-nums">
                {BUSINESS_INFO.phoneFormatted}
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="mt-5 w-full py-2.5 px-4 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs font-bold rounded-xl text-center transition-colors block"
            >
              Call 03239036568
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white p-6 rounded-3xl border border-emerald-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#0F2747]">WhatsApp Chat</h3>
              <p className="text-xs text-slate-500 mt-1 mb-3">
                Instant quotes, live photos of box seals, and stock verification.
              </p>
              <p className="text-lg font-black text-emerald-600 tabular-nums">
                {BUSINESS_INFO.phoneFormatted}
              </p>
            </div>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl text-center transition-colors block"
            >
              Message on WhatsApp
            </a>
          </div>

          {/* Card 3: Store Address */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#0F2747]">Physical Store</h3>
              <p className="text-xs text-slate-500 mt-1 mb-3">
                Visit our retail shop on the main Fort Abbas - Haroonabad road.
              </p>
              <p className="text-xs font-semibold text-slate-800 leading-snug">
                {BUSINESS_INFO.location}
              </p>
            </div>
            <a
              href={BUSINESS_INFO.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl text-center transition-colors block"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Message Form & Map Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Form */}
          <div className="lg:col-span-6 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#0F2747]">
              Send Us a Message
            </h2>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Leave your inquiry and we will get back to you right away.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-emerald-900">Message Received!</h3>
                <p className="text-xs text-emerald-700">
                  Thank you, {name}. Our team in Khichi Wala has received your inquiry and will respond to {phone} shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-bold text-emerald-800 underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="03239036568"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Inquiry / Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Which phone model, storage variant, or accessory are you interested in?"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Direct WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-6 bg-slate-100 flex flex-col border-t lg:border-t-0 lg:border-l border-slate-200 relative min-h-[350px]">
            <iframe
              title="Jinnah Mobile's Khichi Wala Google Map"
              src="https://maps.google.com/maps?q=Khichi+Wala,+Haroonabad+Road,+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl border border-slate-200 shadow-md text-xs pointer-events-none">
              <span className="font-bold text-[#0F2747] block">Jinnah Mobile's</span>
              <span className="text-slate-600 block mt-0.5">8XH5+H7G, Fort Abbas - Haroonabad Rd, Khichi Wala</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
