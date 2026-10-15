import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import aestheticPoster from '../assets/images/aesthetic_black_grey_tattoo_session_1792063787731.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#090909]">
      {/* Background Cinematic Video Layer: Aesthetic Master Tattoo Session */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.12]"
          poster={aestheticPoster}
        >
          <source src="/videos/hero-tattoo-aesthetic.mp4" type="video/mp4" />
        </video>

        {/* Ambient Overlay: Rich dark vignette & warm cinematic grading */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-[#090909]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#090909_92%)] opacity-70" />
      </div>

      {/* Spacer to account for fixed top navbar */}
      <div className="h-28 md:h-32 pointer-events-none" />

      {/* Hero Central Content Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto py-12 flex flex-col items-start justify-center">
        {/* Subtle Upper Label */}
        <div className="inline-flex items-center gap-3 mb-6 bg-[#090909]/70 backdrop-blur-md px-3.5 py-1.5 border border-white/10">
          <span className="w-4 h-[1.5px] bg-[#76262B]" />
          <span className="text-[11px] md:text-xs font-semibold tracking-[0.28em] text-[#E9E4DC] uppercase font-sans">
            DMITRIY TKACH · BLACK &amp; GREY REALISM · NEW JERSEY / NEW YORK
          </span>
        </div>

        {/* Oversized Cinematic Editorial Headline */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#E9E4DC] tracking-[0.03em] uppercase leading-[0.88] max-w-4xl text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] mb-8">
          YOUR STORY.<br />
          <span className="text-white">INKED IN SHADOW.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#E9E4DC]/90 font-sans font-light max-w-2xl leading-relaxed mb-10 text-balance drop-shadow-md bg-[#090909]/30 backdrop-blur-[2px] p-2 -ml-2 rounded">
          Custom black-and-grey tattoos, designed around the stories, symbols, and moments that make you who you are.
        </p>

        {/* Refined CTAs */}
        <div className="flex flex-wrap items-center gap-5 mb-8">
          <Link
            to="/book"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-all duration-300 shadow-2xl active:scale-[0.98]"
          >
            BOOK YOUR SESSION
            <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            to="/work"
            className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase text-[#E9E4DC] border border-white/30 bg-[#090909]/50 backdrop-blur-sm hover:bg-[#E9E4DC] hover:text-[#090909] hover:border-[#E9E4DC] transition-all duration-300 active:scale-[0.98]"
          >
            EXPLORE THE WORK
          </Link>
        </div>

        {/* Artist Credit Caption */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#E9E4DC]/80 font-sans bg-[#090909]/40 backdrop-blur-xs px-2.5 py-1">
          <span>ARTIST:</span>
          <span className="text-white font-bold">DMITRIY TKACH</span>
        </div>
      </div>

      {/* Hero Bottom Bar Details */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-8 pt-4 flex items-end justify-between border-t border-white/10 text-[#999995] text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase">
        <div className="flex items-center gap-4">
          <span className="text-[#E9E4DC]/90 font-medium">STUDIO APPOINTMENTS ONLY</span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span className="hidden sm:inline">PRIVATE SUITE ENVIRONMENT</span>
        </div>

        <a
          href="#statement"
          className="group inline-flex items-center gap-2 hover:text-[#E9E4DC] transition-colors"
        >
          <span>DISCOVER</span>
          <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform text-[#76262B]" />
        </a>
      </div>
    </section>
  );
}
