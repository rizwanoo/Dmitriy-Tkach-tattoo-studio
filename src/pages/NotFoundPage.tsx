import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Compass } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function NotFoundPage() {
  return (
    <div className="pt-28 md:pt-36 bg-[#090909] text-[#E9E4DC] min-h-[85vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 text-center w-full">
        <div className="flex justify-center mb-6">
          <Breadcrumbs items={[{ label: '404 NOT FOUND' }]} />
        </div>

        <span className="text-xs font-mono tracking-[0.25em] text-[#76262B] uppercase font-bold block mb-3">
          ERROR 404 · UNMAPPED COORDINATES
        </span>

        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl text-white tracking-[0.02em] uppercase leading-none mb-6">
          LOST IN SHADOW
        </h1>

        <p className="text-base sm:text-lg text-[#999995] font-sans font-light max-w-lg mx-auto leading-relaxed mb-10">
          The archive or route you are looking for does not exist or has been relocated within Dmitriy Tkach&apos;s tattoo catalog.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-colors shadow-xl"
          >
            <ArrowLeft size={15} />
            <span>RETURN TO HOME</span>
          </Link>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#E9E4DC] border border-white/20 hover:border-white transition-colors"
          >
            <span>VIEW PORTFOLIO</span>
            <ArrowUpRight size={15} />
          </Link>

          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#999995] hover:text-white transition-colors"
          >
            <span>BOOK SESSION</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
