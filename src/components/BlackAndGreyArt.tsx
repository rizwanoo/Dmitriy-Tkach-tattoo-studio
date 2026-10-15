import cathedralImage from '../assets/images/portfolio_cathedral_skull_realism_1792057936583.jpg';
import macroImage from '../assets/images/portfolio_detail_needle_macro_1792057937244.jpg';
import machineImage from '../assets/images/hero_tattoo_process_1792057440855.jpg';

export default function BlackAndGreyArt() {
  return (
    <section className="py-28 md:py-36 bg-[#111112] text-[#E9E4DC] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#76262B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#999995] uppercase font-sans">
                CURATED DISCIPLINE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#E9E4DC] tracking-[0.03em] uppercase leading-none">
              THE ART OF BLACK &amp; GREY
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#999995] font-light leading-relaxed font-sans">
            Every shadow, every line, every detail has a reason to exist. A custom piece should feel personal long before the needle touches the skin.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Dominant Large Artwork (Cathedral Skull Full Back / Shoulder) */}
          <div className="lg:col-span-7 relative group">
            <div className="bg-[#090909] border border-white/10 overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <img
                  src={cathedralImage}
                  alt="Gothic cathedral and skull realism back piece tattoo by Dmitriy Tkach"
                  className="w-full h-full object-cover object-top filter contrast-[1.1] brightness-[0.92] group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Editorial Caption Bar */}
              <div className="p-6 bg-[#090909] flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/5 gap-2">
                <div>
                  <h3 className="font-display text-xl text-[#E9E4DC] tracking-wider uppercase">
                    GOTHIC ARTIFACT · FULL BACK CANOPY
                  </h3>
                  <p className="text-xs text-[#999995] font-sans">
                    Architecture, anatomical skull, and filigree integration
                  </p>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#999995] uppercase border border-white/10 px-2.5 py-1 self-start sm:self-auto">
                  CUSTOM STUDY
                </span>
              </div>
            </div>
          </div>

          {/* Supporting Micro-Detail & Process Grid */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Supporting Image 1: Macro Needle / Skin Shading */}
            <div className="bg-[#090909] border border-white/10 overflow-hidden group shadow-xl">
              <div className="aspect-square sm:aspect-[4/3] overflow-hidden">
                <img
                  src={macroImage}
                  alt="Extreme close-up of healed black and grey tattoo skin texture"
                  className="w-full h-full object-cover filter contrast-[1.12] brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-lg text-[#E9E4DC] tracking-wider uppercase">
                    MICRO-CONTRAST &amp; GRADIENT
                  </h4>
                  <p className="text-xs text-[#999995]">
                    Seamless wash dilution without harsh edge saturation
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#76262B] tracking-wider uppercase font-bold">
                  HEALED DETAIL
                </span>
              </div>
            </div>

            {/* Supporting Image 2: Studio Tools & Hand Work */}
            <div className="bg-[#090909] border border-white/10 overflow-hidden group shadow-xl">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={machineImage}
                  alt="Precision coil tattoo machine and hand work in studio"
                  className="w-full h-full object-cover filter contrast-[1.15] brightness-[0.9] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-lg text-[#E9E4DC] tracking-wider uppercase">
                    TOOL PRECISION
                  </h4>
                  <p className="text-xs text-[#999995]">
                    Sterile single-use cartridge arrays &amp; customized stroke length
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#999995] tracking-wider uppercase">
                  SETUP
                </span>
              </div>
            </div>

            {/* Editorial Statement Box */}
            <div className="p-6 bg-[#202022]/40 border border-white/5">
              <p className="font-accent text-lg text-[#E9E4DC]/90 leading-relaxed mb-3">
                &ldquo;Black and grey ink ages with the body. When built with deep saturation and smooth midtones, it holds its contrast for decades.&rdquo;
              </p>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#999995] font-sans">
                DMITRIY TKACH · BLACK &amp; GREY REALISM · NJ / NY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
