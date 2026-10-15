import PortfolioGallery from '../components/PortfolioGallery';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PortfolioPage() {
  return (
    <div className="pt-28 md:pt-36 bg-[#090909] min-h-screen">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12 border-b border-white/10">
        <Breadcrumbs items={[{ label: 'PORTFOLIO ARCHIVE' }]} />
        <span className="text-xs font-mono tracking-[0.25em] text-[#76262B] uppercase font-bold block mb-3">
          GALLERY ARCHIVE
        </span>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-white tracking-[0.03em] uppercase mb-4 leading-none">
          PORTFOLIO &amp; COMMISSIONS
        </h1>
        <p className="text-base sm:text-lg text-[#999995] font-sans font-light max-w-2xl leading-relaxed">
          Explore a curated selection of black-and-grey realism, custom full sleeves, and fine-line anatomical detail work created by Dmitriy Tkach.
        </p>
      </div>

      <PortfolioGallery previewOnly={false} />

      {/* Booking CTA strip */}
      <div className="bg-[#111112] py-20 border-b border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide uppercase mb-4">
            READY TO BRING YOUR CONCEPT TO LIFE?
          </h2>
          <p className="text-sm text-[#999995] font-sans max-w-lg mx-auto mb-8">
            Each piece is custom designed for the individual. Reserve your studio consultation today.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-colors"
          >
            <span>SUBMIT AN ENQUIRY</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
