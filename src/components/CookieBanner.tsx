import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, X } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('monster_ink_cookie_consent');
    if (!consent) {
      // Delay slightly so it does not pop up instantly on first paint
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (mode: 'all' | 'essential') => {
    localStorage.setItem('monster_ink_cookie_consent', mode);
    setVisible(false);

    // If Google Tag is present, update consent
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
      if (mode === 'all') {
        gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'denied',
        });
      } else {
        gtag('consent', 'update', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
        });
      }
    }
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-[#111112]/95 backdrop-blur-md border border-white/10 p-5 shadow-2xl text-[#E9E4DC] animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#76262B] font-bold uppercase">
          <Shield size={14} /> PRIVACY &amp; COOKIES
        </div>
        <button
          type="button"
          onClick={() => handleConsent('essential')}
          className="text-[#999995] hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <X size={15} />
        </button>
      </div>

      <p className="text-xs text-[#999995] font-sans font-light leading-relaxed mb-4">
        We respect your privacy. We use minimal essential storage for your booking inquiries and anonymous performance analytics to refine studio services.{' '}
        <Link to="/privacy" className="text-[#E9E4DC] underline hover:text-[#76262B] transition-colors">
          Read Privacy Policy
        </Link>.
      </p>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => handleConsent('all')}
          className="flex-1 py-2 px-3 text-[11px] font-bold tracking-wider uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-colors"
        >
          ACCEPT ALL
        </button>
        <button
          type="button"
          onClick={() => handleConsent('essential')}
          className="flex-1 py-2 px-3 text-[11px] font-semibold tracking-wider uppercase text-[#E9E4DC] border border-white/20 hover:border-white transition-colors"
        >
          ESSENTIAL ONLY
        </button>
      </div>
    </div>
  );
}
