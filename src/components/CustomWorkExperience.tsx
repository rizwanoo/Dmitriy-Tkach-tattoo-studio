import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageSquare, Compass, CalendarCheck } from 'lucide-react';

export default function CustomWorkExperience() {
  const steps = [
    {
      step: '01',
      title: 'SHARE YOUR IDEA',
      subtitle: 'CONCEPT & RAW INSPIRATION',
      icon: MessageSquare,
      desc: 'Tell Dmitriy what you have in mind. Include any reference images, desired anatomical placement, approximate dimensions, and the personal meaning or symbolic weight behind the project. Your concept does not need to be finalized—a rough idea or mood board is the perfect starting point.',
    },
    {
      step: '02',
      title: 'DISCUSS THE DESIGN',
      subtitle: 'ANATOMY & ARTISTIC DIRECTION',
      icon: Compass,
      desc: 'The artist directly reviews your enquiry, assesses body curvature, scale, and tonal contrast, and communicates with you to refine the composition. Together you will establish how the elements flow organically over muscle contours.',
    },
    {
      step: '03',
      title: 'MOVE TOWARD YOUR APPOINTMENT',
      subtitle: 'CONFIRMATION & PRIVATE SESSION',
      icon: CalendarCheck,
      desc: 'Once the direction and session scope are agreed upon, your date is scheduled. A deposit is required to secure every studio booking. The exact deposit amount and payment instructions will be confirmed directly by the artist prior to reservation.',
    },
  ];

  return (
    <section className="py-28 md:py-40 bg-[#111112] text-[#E9E4DC] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#76262B]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#999995] uppercase font-sans">
              THE COLLABORATIVE JOURNEY
            </span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E9E4DC] tracking-[0.03em] uppercase leading-[0.9] mb-6">
            THE CUSTOM TATTOO<br />
            <span className="text-white/95">EXPERIENCE.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#999995] font-sans font-light leading-relaxed">
            &ldquo;Your idea doesn&apos;t need to be finished. Bring the inspiration, the symbols, the story, or even a rough sketch. Start with the concept — the details can take shape from there.&rdquo;
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#090909] border border-white/10 p-8 sm:p-10 flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-4xl text-[#76262B]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-[#999995] group-hover:text-white group-hover:border-white/30 transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>

                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#999995] block mb-2 font-mono">
                    {item.subtitle}
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase mb-4">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#999995] font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#999995]">
                  <span>STEP {item.step} OF 03</span>
                  <span className="text-[#E9E4DC]">DIRECT CONSULTATION</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Deposit Notice Banner */}
        <div className="bg-[#090909] border-l-2 border-[#76262B] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-widest uppercase font-mono text-[#76262B] font-bold block mb-1">
              STUDIO DEPOSIT POLICY
            </span>
            <p className="text-sm text-[#E9E4DC] font-sans leading-relaxed">
              <strong>A deposit is required to secure a booking.</strong> The deposit amount and payment instructions will be confirmed directly by the artist.
            </p>
          </div>

          <Link
            to="/book"
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold tracking-[0.16em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-colors shrink-0"
          >
            SUBMIT A REQUEST
            <ArrowUpRight size={15} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
