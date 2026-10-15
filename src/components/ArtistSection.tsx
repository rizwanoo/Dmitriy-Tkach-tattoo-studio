import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function ArtistSection() {
  return (
    <section className="py-28 md:py-40 bg-[#090909] text-[#E9E4DC] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column: Verified Local Asset */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative bg-[#111112] border border-white/10 overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                <img
                  src="/images/artist-dmitriy.jpg"
                  alt="Dmitriy Tkach, Black and Grey Tattoo Artist"
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.12] brightness-[0.92] hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Verified Artist Tag */}
              <div className="p-6 bg-[#111112] border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-[#999995] uppercase block font-sans">
                    PRINCIPAL ARTIST
                  </span>
                  <span className="font-display text-2xl text-[#E9E4DC] tracking-wider uppercase">
                    DMITRIY TKACH
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] tracking-widest text-[#76262B] font-semibold block uppercase">
                    STATUS
                  </span>
                  <span className="text-xs text-[#E9E4DC] font-sans">
                    ACCEPTING COMMISSIONS
                  </span>
                </div>
              </div>
            </div>

            {/* Framing offset line */}
            <div className="absolute -top-3 -left-3 w-full h-full border border-white/10 -z-10 pointer-events-none hidden sm:block" />
          </div>

          {/* Editorial Biography Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#76262B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#999995] uppercase font-sans">
                THE CRAFTSMAN
              </span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E9E4DC] tracking-[0.03em] uppercase leading-[0.9] mb-4">
              THE ARTIST<br />
              <span className="text-white/95">BEHIND THE INK.</span>
            </h2>

            <div className="mb-6">
              <span className="font-display text-2xl sm:text-3xl text-white tracking-widest uppercase block">
                DMITRIY TKACH
              </span>
              <span className="text-xs tracking-[0.25em] text-[#999995] uppercase font-sans font-medium mt-1 block">
                BLACK &amp; GREY TATTOO ARTIST · NEW JERSEY · NEW YORK
              </span>
            </div>

            <p className="text-base sm:text-lg text-[#E9E4DC]/90 font-sans font-light leading-relaxed mb-6">
              &ldquo;Every tattoo begins with an idea. The goal is to turn that idea into something personal — a composition that feels connected to the person wearing it.&rdquo;
            </p>

            <p className="text-sm sm:text-base text-[#999995] font-sans font-light leading-relaxed mb-8 max-w-xl">
              Specializing in custom black-and-grey tattooing across the New Jersey and New York metropolitan area. Every project is approached not as a routine flash stencil, but as an exclusive collaboration designed to fit the client&apos;s natural anatomy, movement, and personal narrative.
            </p>

            {/* Verified Public Route Link */}
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/10">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold tracking-[0.16em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-colors"
              >
                EXPLORE THE ARTWORK
                <ArrowUpRight size={15} />
              </Link>

              <a
                href="https://www.facebook.com/profile.php?id=61595210122065"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#E9E4DC] border border-white/20 hover:border-white hover:text-white transition-colors"
              >
                <span>OFFICIAL FACEBOOK PROFILE</span>
                <ExternalLink size={14} className="text-[#999995]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
