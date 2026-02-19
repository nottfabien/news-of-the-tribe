'use client'

import { useState } from 'react';
import { X, Gift, CheckCircle, Loader } from 'lucide-react';
import { pushEvent } from '@/lib/analytics';

const PROMO_CODE = 'D2474B1E';


type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function WelcomeOfferWidget({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-400 w-80 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gift className="text-white" size={22} />
            <span className="font-bold text-white text-base">Welcome Offer</span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-amber-100 transition-colors"
            aria-label="Close offer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-5 text-center">
          <p className="text-gray-500 text-sm mb-4 leading-relaxed">
            Your first <strong>News Of The Tribe</strong> is offered at:
          </p>

          <p className="text-5xl font-extrabold text-green-800 mb-1">
            $4.99
            <span className="text-2xl font-bold text-gray-500 ml-1">AUD</span>
          </p>

          <p className="text-gray-400 text-xs mb-5">Limited time offer · No commitment</p>

          <div className="bg-amber-50 border-2 border-dashed border-amber-400 rounded-xl px-4 py-3">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Your promo code</p>
            <p className="text-2xl font-extrabold tracking-widest text-gray-900 select-all">
              D2474B1E
            </p>
          </div>

          <p className="text-gray-400 text-xs mt-4">
            Use this code at checkout to claim your offer.
          </p>

          <button
            onClick={onClose}
            className="mt-4 text-sm text-gray-400 hover:text-gray-600 underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
