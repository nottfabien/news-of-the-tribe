'use client'

import { useState } from 'react';
import { X, Gift, CheckCircle, Loader } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function WelcomeOfferWidget() {
  const [isOpen, setIsOpen]     = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail]       = useState('');
  const [status, setStatus]     = useState<Status>('idle');

  if (isDismissed) return null;

  const handleSubmit = async () => {
    if (!firstName.trim() || !email.trim()) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/welcome-offer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* Expanded card */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-400 w-80 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gift className="text-white" size={22} />
              <span className="font-bold text-white text-base">Welcome Offer</span>
            </div>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-white hover:text-amber-100 transition-colors"
              aria-label="Dismiss offer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-5">
            {status === 'success' ? (
              /* Thank you state */
              <div className="text-center py-4">
                <CheckCircle className="text-green-700 mx-auto mb-3" size={40} />
                <p className="font-bold text-gray-900 text-lg mb-1">You're in! 🎉</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We've received your request. Our team will send your exclusive offer to <strong>{email}</strong> shortly.
                </p>
              </div>
            ) : (
              <>
                <p className="font-bold text-gray-900 text-lg mb-1 leading-tight">
                  Your first 2 months for just $7 AUD
                </p>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  Start connecting your family today at a fraction of the price. Limited time offer.
                </p>

                <div className="space-y-3 mb-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700"
                  />
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-xs mb-3">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading' || !firstName.trim() || !email.trim()}
                  className="w-full bg-green-800 text-white py-3 rounded-lg font-bold text-sm hover:bg-green-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Claim My Offer'
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs mt-3">
                  No commitment · Cancel anytime
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Teaser tab / toggle button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="bg-amber-400 hover:bg-amber-500 text-white font-bold px-5 py-3 rounded-full shadow-xl flex items-center gap-2 transition-all text-sm"
      >
        <Gift size={18} />
        {isOpen ? 'Close' : '🎁 Special Offer'}
      </button>
    </div>
  );
}