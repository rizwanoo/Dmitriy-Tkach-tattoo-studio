import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, ShieldCheck, Compass, Eye, Layers, Feather, Activity } from 'lucide-react';
import cathedralImage from '../assets/images/portfolio_cathedral_skull_realism_1792057936583.jpg';
import macroImage from '../assets/images/portfolio_detail_needle_macro_1792057937244.jpg';
import machineImage from '../assets/images/hero_tattoo_process_1792057440855.jpg';

import Breadcrumbs from '../components/Breadcrumbs';

export default function ArtistPage() {
  const techniques = [
    {
      code: 'TECH 01',
      title: 'GRADUATED GREYWASH DILUTION',
      subtitle: 'TRANSLUCENT TONAL DEPTH',
      icon: Layers,
      desc: 'Rather than relying on pre-mixed opaque gray pigments that heal chalky, Dmitriy hand-mixes a progressive 5-tier wash dispersion directly on the palette. Pure distilled suspension allows microscopic carbon particles to settle into the dermis like a watercolor wash, aging into rich graphite hues.',
    },
    {
      code: 'TECH 02',
      title: 'ANATOMICAL KINETIC MAPPING',
      subtitle: 'CONTOURED MOVEMENT DYNAMICS',
      icon: Activity,
      desc: 'Human skin is a living, flexing canvas. Every custom sleeve or torso piece is mapped directly over muscular insertion points and joint rotations. When your forearm twists or your shoulder lifts, the artwork breathes with your anatomy rather than bending out of proportion.',
    },
    {
      code: 'TECH 03',
      title: 'NEGATIVE SPACE LUMINOSITY',
      subtitle: 'SKIN AS THE PRIMARY LIGHT',
      icon: Eye,
      desc: 'In elite black-and-grey tattooing, light is not painted—it is preserved. By strategically carving raw, uninked skin through deep carbon shadow fields, Dmitriy achieves dramatic chiaroscuro that maintains razor-sharp contrast 10 and 20 years down the line.',
    },
    {
      code: 'TECH 04',
      title: 'MICRO-TAPER NEEDLE CALIBRATION',
      subtitle: 'MINIMAL TRAUMA & MICRO-REALISM',
      icon: Feather,
      desc: 'Employing custom long-taper single needles and curved bugpin magnums running at calibrated voltage, Dmitriy achieves photographic textures—from the glint in a subject’s pupil to the fractured stone of a gothic arch—with minimal skin irritation and swift, flawless healing.',
    },
  ];

  return (
    <div className="pt-28 md:pt-36 bg-[#090909] text-[#E9E4DC] min-h-screen">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 border-b border-white/10">
        <Breadcrumbs items={[{ label: 'THE ARTIST' }]} />
        <span className="text-xs font-mono tracking-[0.25em] text-[#76262B] uppercase font-bold block mb-3">
          BIOGRAPHY &amp; ARTISTIC MASTERY
        </span>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-[0.03em] uppercase mb-4 leading-none">
          DMITRIY TKACH
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm tracking-[0.2em] text-[#999995] uppercase font-sans">
          <span>BLACK &amp; GREY REALISM SPECIALIST</span>
          <span className="text-white/20">·</span>
          <span>YEARS OF DEDICATED CRAFT</span>
          <span className="text-white/20">·</span>
          <span className="text-[#E9E4DC]">NEW JERSEY &amp; NEW YORK</span>
        </div>
      </div>

      {/* Main Cinematic Hero Split */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Verified Portrait Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#111112] border border-white/10 overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/artist-dmitriy.jpg"
                  alt="Dmitriy Tkach, Black and Grey Tattoo Artist"
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.12] brightness-[0.92]"
                />
              </div>

              {/* Status & Location Bar */}
              <div className="p-6 bg-[#090909] border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#999995] uppercase block">
                    FOUNDER &amp; RESIDENT ARTIST
                  </span>
                  <span className="font-display text-2xl text-white uppercase tracking-wider">
                    DMITRIY TKACH
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#76262B] uppercase font-bold block">
                    SERVICE AREA
                  </span>
                  <span className="text-xs text-[#E9E4DC] font-sans">
                    NJ / NY METRO
                  </span>
                </div>
              </div>
            </div>

            {/* Backframe Accent */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#76262B]/30 -z-10 pointer-events-none hidden sm:block" />
          </div>

          {/* Cinematic Biography Prose */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#76262B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#76262B] uppercase font-sans">
                CHAPTER 01 · THE JOURNEY
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wide leading-tight mb-6">
              A DECADE REFINED IN SHADOW &amp; SKIN.
            </h2>

            <p className="font-accent text-xl sm:text-2xl text-[#E9E4DC] leading-relaxed mb-6 italic">
              &ldquo;Tattooing is not merely transferring an image onto skin. It is an unhurried, intimate dialogue between the artist, the machine, and the anatomical cadence of the human body.&rdquo;
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#999995] font-sans font-light leading-relaxed mb-8">
              <p>
                Across years of intensive studio dedication, Dmitriy Tkach has honed a singular, uncompromising specialization: <strong>monochromatic black-and-grey realism</strong>. Guided by the masters of European chiaroscuro and neoclassical sculpture, his work treats the living body as a three-dimensional sculpture rather than a flat piece of paper.
              </p>
              <p>
                From his early formative years immersed in classical drawing, anatomical draftsmanship, and fine ink techniques, Dmitriy discovered that true mastery in tattoo art requires profound patience. Where color fades or relies on superficial brightness, black-and-grey tattooing relies on the raw emotional gravity of light versus shadow—the deep, velvety permanence of carbon pigment settled beneath the dermis.
              </p>
              <p>
                Serving discerning collectors throughout New Jersey and New York, Dmitriy established his private studio practice as an antidote to the rushed, chaotic flash-shop aesthetic. Every commission is private, sterile, and individually sculpted—designed to endure for decades as an indelible piece of personal identity.
              </p>
            </div>

            {/* Quick Metrics of Dedication */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 mb-8">
              <div>
                <span className="font-display text-3xl sm:text-4xl text-white block">
                  100%
                </span>
                <span className="text-[11px] text-[#999995] tracking-wider uppercase font-mono">
                  CUSTOM REALISM
                </span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl text-white block">
                  BESPOKE
                </span>
                <span className="text-[11px] text-[#999995] tracking-wider uppercase font-mono">
                  ANATOMICAL FLOW
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="font-display text-3xl sm:text-4xl text-[#76262B] block">
                  PRIVATE
                </span>
                <span className="text-[11px] text-[#999995] tracking-wider uppercase font-mono">
                  STUDIO SUITE
                </span>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-colors shadow-lg active:scale-95"
              >
                <span>BOOK YOUR SESSION</span>
                <ArrowUpRight size={16} />
              </Link>

              <a
                href="https://www.facebook.com/profile.php?id=61595210122065"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#E9E4DC] border border-white/20 hover:border-white transition-colors"
              >
                <span>VERIFIED FACEBOOK PROFILE</span>
                <ExternalLink size={15} className="text-[#999995]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 02: Specialized Black & Grey Technical Breakdown */}
      <section className="py-24 md:py-32 bg-[#111112] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#76262B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#76262B] uppercase font-sans">
                CHAPTER 02 · TECHNICAL METHODOLOGY
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide leading-none mb-4">
              SPECIALIZED INKING TECHNIQUES
            </h2>
            <p className="text-sm sm:text-base text-[#999995] font-sans font-light leading-relaxed">
              Black-and-grey tattooing is often misunderstood as simply using black ink. In Dmitriy&apos;s studio, it is an exacting science of needle taper, fluid dispersion, and dermis preservation.
            </p>
          </div>

          {/* 4 Pillars of Technical Mastery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {techniques.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.code}
                  className="p-8 sm:p-10 bg-[#090909] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono tracking-widest text-[#76262B] font-bold">
                        {t.code}
                      </span>
                      <div className="w-10 h-10 border border-white/10 rounded flex items-center justify-center text-[#999995] group-hover:text-white group-hover:border-white/30 transition-colors">
                        <Icon size={18} />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono tracking-widest text-[#999995] uppercase block mb-1">
                      {t.subtitle}
                    </span>

                    <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-4 group-hover:text-[#E9E4DC] transition-colors">
                      {t.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#999995] font-sans font-light leading-relaxed">
                      {t.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-[#E9E4DC]/80 flex items-center justify-between">
                    <span>STANDARD SPEC</span>
                    <span className="text-[#76262B]">STUDIO SPEC · DMITRIY TKACH</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technical Visual Proof Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#090909] border border-white/10 overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cathedralImage}
                  alt="Cathedral skull full back realism by Dmitriy Tkach"
                  className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 border-t border-white/5 text-xs text-[#999995]">
                <strong className="text-white block uppercase mb-0.5">Scale &amp; Contrast</strong>
                Deep black carbon packing beneath gothic arches
              </div>
            </div>

            <div className="bg-[#090909] border border-white/10 overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={macroImage}
                  alt="Macro needle detail showing fine line precision"
                  className="w-full h-full object-cover filter contrast-[1.12] brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 border-t border-white/5 text-xs text-[#999995]">
                <strong className="text-white block uppercase mb-0.5">Micro-Stippling</strong>
                Individual hair and pore texture using bugpin groupings
              </div>
            </div>

            <div className="bg-[#090909] border border-white/10 overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={machineImage}
                  alt="Precision sterile studio equipment"
                  className="w-full h-full object-cover filter contrast-[1.15] brightness-[0.9] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 border-t border-white/5 text-xs text-[#999995]">
                <strong className="text-white block uppercase mb-0.5">Sterile Craft</strong>
                Hospital-grade barrier control &amp; custom stroke calibration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 03: The Studio Philosophy & Experience */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#111112] border border-white/10 p-8 sm:p-14 lg:p-16">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-[0.25em] text-[#76262B] uppercase font-bold block mb-3">
              CHAPTER 03 · THE PRIVATE SUITE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wide mb-6">
              AN IMMERSIVE, PRIVATE COLLABORATION
            </h2>
            <p className="text-sm sm:text-base text-[#999995] font-sans font-light leading-relaxed mb-6">
              When you book a session with Dmitriy Tkach, the private studio space is exclusively yours. There are no distracting walk-in interruptions, no loud counter chatter, and no rushing against the clock. The atmosphere is quiet, contemplative, and focused on executing your piece to the highest standard possible.
            </p>
            <p className="text-sm sm:text-base text-[#999995] font-sans font-light leading-relaxed mb-8">
              Whether you are embarking on a full sleeve, a dramatic back piece, or an intimate memorial symbol, you work directly with Dmitriy from the first enquiry through the final healing check.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-colors shadow-xl"
              >
                <span>BOOK YOUR SESSION WITH DMITRIY</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center px-6 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#E9E4DC] border border-white/20 hover:border-white transition-colors"
              >
                VIEW PORTFOLIO WORK
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
