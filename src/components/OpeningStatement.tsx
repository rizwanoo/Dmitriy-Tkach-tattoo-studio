export default function OpeningStatement() {
  return (
    <section id="statement" className="relative py-28 md:py-40 bg-[#090909] overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Typography Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#76262B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#999995] uppercase font-sans">
                THE PHILOSOPHY
              </span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E9E4DC] tracking-[0.03em] uppercase leading-[0.92] text-balance mb-8">
              NOT JUST SOMETHING YOU WEAR.<br />
              <span className="text-white/90">SOMETHING YOU CARRY.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#999995] font-sans font-light leading-relaxed max-w-xl mb-6">
              A tattoo doesn&apos;t just rest on the surface. When executed with surgical precision and deep tonal control, it becomes woven into your physical presence—a permanent reflection of where you&apos;ve been and who you&apos;ve chosen to be.
            </p>

            <div className="flex items-center gap-6 pt-4 border-t border-white/10 text-xs tracking-[0.16em] uppercase text-[#E9E4DC]">
              <div>
                <span className="text-[#999995] block text-[10px] mb-1">MEDIUM</span>
                <span className="font-semibold">BLACK &amp; GREY REALISM</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <span className="text-[#999995] block text-[10px] mb-1">APPROACH</span>
                <span className="font-semibold">BESPOKE ANATOMICAL FIT</span>
              </div>
            </div>
          </div>

          {/* Focal Image Column: Authentic Artist Photo provided by user */}
          <div className="lg:col-span-5 relative">
            <div className="relative group overflow-hidden bg-[#111112] border border-white/10 shadow-2xl">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src="/images/artist-photo-philosophy.jpg"
                  alt="Dmitriy Tkach, Black and Grey Tattoo Artist"
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.1] brightness-[0.95] group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Minimal Editorial Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#090909] via-[#090909]/80 to-transparent flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#76262B] font-bold uppercase block mb-1">
                    ARTIST AT WORK
                  </span>
                  <span className="text-xs text-[#E9E4DC] font-medium tracking-wider uppercase">
                    DMITRIY TKACH · STUDIO
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-[#999995] uppercase font-mono">
                  NJ · NY
                </span>
              </div>
            </div>

            {/* Decorative background accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#76262B]/30 -z-10 pointer-events-none hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
