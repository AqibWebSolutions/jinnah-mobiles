import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, ShieldCheck, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const StoreLocationSection: React.FC = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-white to-[#F4F8FD] border-b border-blue-100/60" id="store-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1557A6]">
            Physical Retail Presence
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F2747] font-display tracking-tight mt-1">
            Visit Jinnah Mobile's
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Experience smartphones in hand, test audio accessories, and enjoy immediate on-site fitting in Khichi Wala.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg shadow-blue-900/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Store details info side */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today 9:00 AM - 10:00 PM
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#0F2747] font-display">
                  Khichi Wala Flagship Store
                </h3>

                {/* Address block */}
                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1557A6] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Address / Plus Code:</span>
                      <p className="text-slate-600 mt-0.5 text-xs sm:text-sm leading-relaxed">
                        {BUSINESS_INFO.location}
                      </p>
                      <span className="text-[11px] text-blue-600 font-medium mt-1 block">
                        Located directly on Fort Abbas - Haroonabad Main Road, Khichi Wala
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Phone & WhatsApp:</span>
                      <p className="text-slate-700 font-bold tabular-nums mt-0.5">
                        {BUSINESS_INFO.phoneFormatted}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Operating Hours:</span>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        {BUSINESS_INFO.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Store Services List */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-2">Available In Store:</span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Live Device Testing</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Free Glass Installation</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Data Transfer Assist</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Official PTA Check</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="flex-1 min-w-[130px] py-3 px-4 bg-[#1557A6] hover:bg-[#0F2747] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={BUSINESS_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-600" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

            {/* Visual Store Map & Photo Display */}
            <div className="lg:col-span-6 bg-slate-100 flex flex-col border-t lg:border-t-0 lg:border-l border-slate-200">
              
              {/* Store interior photo */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img
                  src={BUSINESS_INFO.storeImage}
                  alt="Jinnah Mobile's Storefront and Showroom in Khichi Wala"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-white text-xs font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Jinnah Mobile's Showroom & Service Desk</span>
                  </p>
                </div>
              </div>

              {/* Embedded Map Container */}
              <div className="flex-1 min-h-[220px] relative bg-slate-200">
                <iframe
                  title="Jinnah Mobile's Location Map"
                  src="https://maps.google.com/maps?q=Khichi+Wala,+Haroonabad+Road,+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
