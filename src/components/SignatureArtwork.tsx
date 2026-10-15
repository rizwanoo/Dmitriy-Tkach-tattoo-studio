import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import signatureImage from '../assets/images/signature_gambling_mask_sleeve_1792057936885.jpg';

export default function SignatureArtwork() {
  const storyElements = [
    {
      title: 'THE VENETIAN MASK',
      role: 'DUALITY & IDENTITY',
      desc: 'Positioned over the shoulder and upper arm, embodying the faces we present to the world versus the inner determination that drives us.',
    },
    {
      title: 'THE NOCTURNAL CITY',
      role: 'ROOTS & AMBITION',
      desc: 'A dense urban skyline beneath nocturnal clouds, grounding the sleeve in the grit and electric energy of the metropolitan landscape.',
    },
    {
      title: 'DICE & ROULETTE WHEEL',
      role: 'THE CALCULATED RISK',
      desc: 'Motion-blurred dice and a photorealistic roulette cylinder wrapping the forearm, acknowledging life as a game where boldness dictates the outcome.',
    },
    {
      title: 'THE POKER HAND & SMOKE',
      role: 'STRATEGY & RESOLVE',
      desc: 'A fanned royal flush emerging through textured smoke currents, linking the forearm to the wrist in a seamless anatomical flow.',
    },
  ];

  return (
    <section className="py-28 md:py-40 bg-[#090909] text-[#E9E4DC] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Lead */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#76262B]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#999995] uppercase font-sans">
              FEATURED CONCEPT SLEEVE
            </span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E9E4DC] tracking-[0.03em] uppercase leading-[0.9] mb-6">
            EVERY ELEMENT<br />
            <span className="text-white/95">TELLS A STORY.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#999995] font-sans font-light leading-relaxed">
            Some designs are more than a collection of images. They are memories, risks, ambitions, and personal symbols brought together in one composition.
          </p>
        </div>

        {/* Showcase Grid: Full Sleeve Showcase & Narrative Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Visual Presentation */}
          <div className="lg:col-span-7 relative group">
            <div className="relative bg-[#111112] border border-white/10 overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={signatureImage}
                  alt="Custom black and grey narrative tattoo sleeve with mask, city skyline, dice, roulette, and cards by Dmitriy Tkach"
                  className="w-full h-full object-cover object-center filter contrast-[1.1] brightness-[0.95] group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* High-End Artwork Watermark / Spec Bar */}
              <div className="p-6 bg-[#090909] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-[#76262B]" />
                    <span className="font-display text-lg text-white tracking-wider uppercase">
                      DMITRIY TKACH SIGNATURE COMMISSION
                    </span>
                  </div>
                  <span className="text-xs text-[#999995] font-sans block">
                    Full Arm Sleeve · Multi-Session Narrative Realism
                  </span>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] tracking-widest text-[#999995] uppercase block">
                    LOCATION
                  </span>
                  <span className="text-xs font-semibold text-[#E9E4DC]">
                    NEW JERSEY / NEW YORK
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle aesthetic backdrop border */}
            <div className="absolute -inset-2 border border-white/5 -z-10 pointer-events-none hidden md:block" />
          </div>

          {/* Storyteller Breakdown Accordion / List */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="divide-y divide-white/10 mb-10">
              {storyElements.map((elem, idx) => (
                <div key={elem.title} className="py-6 first:pt-0 last:pb-0 group">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#76262B] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] tracking-widest text-[#999995] uppercase font-sans">
                      {elem.role}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-[#E9E4DC] tracking-wide uppercase mb-2 group-hover:text-white transition-colors">
                    {elem.title}
                  </h3>
                  <p className="text-xs text-[#999995] font-sans font-light leading-relaxed">
                    {elem.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Call To Action */}
            <div className="p-8 bg-[#111112] border border-white/10 flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.25em] text-[#999995] uppercase font-sans">
                BESPOKE COMPOSITION
              </span>
              <p className="font-accent text-lg text-[#E9E4DC] leading-snug">
                &ldquo;Every custom sleeve is designed specifically for your anatomical proportions and personal journey.&rdquo;
              </p>
              <Link
                to="/custom"
                className="inline-flex items-center justify-between w-full px-6 py-4 mt-2 text-xs font-bold tracking-[0.16em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-colors"
              >
                <span>LET&apos;S DESIGN YOURS</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
