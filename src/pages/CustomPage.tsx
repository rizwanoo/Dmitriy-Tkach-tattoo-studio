import CustomWorkExperience from '../components/CustomWorkExperience';
import SignatureArtwork from '../components/SignatureArtwork';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CustomPage() {
  return (
    <div className="pt-28 md:pt-36 bg-[#090909] text-[#E9E4DC] min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 border-b border-white/10">
        <Breadcrumbs items={[{ label: 'CUSTOM PIECES' }]} />
        <span className="text-xs font-mono tracking-[0.25em] text-[#76262B] uppercase font-bold block mb-3">
          BESPOKE COMMISSIONS
        </span>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-white tracking-[0.03em] uppercase mb-4 leading-none">
          CUSTOM TATTOOS
        </h1>
        <p className="text-base sm:text-lg text-[#999995] font-sans font-light max-w-2xl leading-relaxed">
          How an abstract concept, personal memory, or emotional turning point is transformed into a custom black-and-grey composition.
        </p>
      </div>

      <CustomWorkExperience />

      <SignatureArtwork />

      {/* Inquiry strip */}
      <div className="py-24 bg-[#090909] text-center border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-[10px] font-mono tracking-widest text-[#76262B] uppercase block mb-3">
            GET STARTED
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-white uppercase mb-4">
            YOUR IDEA STARTS HERE
          </h2>
          <p className="text-sm text-[#999995] font-sans max-w-md mx-auto mb-8">
            Tell Dmitriy about your concept, placement, and timeline. No finished drawings required.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-colors"
          >
            <span>SUBMIT A PROJECT REQUEST</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
