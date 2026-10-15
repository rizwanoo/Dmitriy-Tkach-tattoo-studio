import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Shield, Plus, Minus, HelpCircle, CheckCircle2 } from 'lucide-react';
import heroTattooImage from '../assets/images/hero_tattoo_process_1792057440855.jpg';
import Breadcrumbs from '../components/Breadcrumbs';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export default function ProcessPage() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const steps = [
    {
      num: '01',
      title: 'INITIAL ENQUIRY & BRIEF',
      desc: 'Submit your concept, body placement, and reference imagery through our private booking portal. Dmitriy reviews every submission directly to assess scale, anatomical fit, and creative viability.',
    },
    {
      num: '02',
      title: 'COMPOSITION & ANATOMICAL MAPPING',
      desc: 'The design is tailored to the exact curvature of your body. Unlike flat paper sketches, tattoo compositions must account for natural muscle elongation, bone ridges, and daily movement.',
    },
    {
      num: '03',
      title: 'DEPOSIT & DATE RESERVATION',
      desc: 'A deposit is required to secure every studio booking. The deposit amount and payment instructions will be confirmed directly by the artist. Once received, your studio date is locked into the schedule.',
    },
    {
      num: '04',
      title: 'THE STUDIO SESSION',
      desc: 'Sessions take place in a private, focused, sterile studio environment. We review the final stencil on skin, make micro-adjustments, and begin inking under hospital-grade hygiene standards.',
    },
    {
      num: '05',
      title: 'AFTERCARE & HEALING',
      desc: 'Receive comprehensive aftercare instructions. Black-and-grey tattoos heal over 2–4 weeks as superficial redness fades, revealing velvety charcoal and graphite tones.',
    },
  ];

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'CONSULTATION & EXPECTATIONS',
      question: 'How does the consultation work? Do I need to visit in person first?',
      answer: 'Most project consultations begin digitally through our booking portal where you share your ideas, body placement, and references. Dmitriy evaluates the scale, anatomical feasibility, and creative flow. If a complex cover-up evaluation or intricate body mapping is necessary, an in-person studio consultation is scheduled prior to your session.',
    },
    {
      id: 'faq-2',
      category: 'CONSULTATION & EXPECTATIONS',
      question: 'Can I see the final artwork drawing before the tattoo session?',
      answer: 'Dmitriy prepares and refines the composition leading up to your appointment. On the morning of your session, you and Dmitriy review the design together in the studio, test the stencil placement over your musculature, and make any micro-adjustments to ensure the anatomical fit is seamless before needle touches skin.',
    },
    {
      id: 'faq-3',
      category: 'CONSULTATION & EXPECTATIONS',
      question: 'Can I bring a guest or friend with me to my appointment?',
      answer: 'Dmitriy Tkach operates as an exclusive, private appointment-only studio. To guarantee absolute focus, privacy, and hospital-grade sterility, one calm companion is welcomed. However, solitary sessions are recommended to foster complete concentration and relaxation.',
    },
    {
      id: 'faq-4',
      category: 'PRICING & DEPOSITS',
      question: 'How is pricing determined for custom black-and-grey work?',
      answer: 'Every tattoo is unique. Rather than a generic flat fee, projects are priced based on the scale, level of detail, placement on the body, and estimated session duration. Dmitriy discusses clear financial expectations directly with you once your concept is submitted.',
    },
    {
      id: 'faq-5',
      category: 'PRICING & DEPOSITS',
      question: 'Why is a deposit required, and how is it confirmed?',
      answer: 'A deposit is required to secure every studio booking. It guarantees your dedicated time on Dmitriy’s calendar and covers preliminary design architecture. The deposit amount and payment instructions will be confirmed directly by the artist prior to reservation and applied toward your final piece.',
    },
    {
      id: 'faq-6',
      category: 'PRICING & DEPOSITS',
      question: 'What happens if I need to reschedule my session?',
      answer: 'We understand unexpected life events arise. If you provide at least 72 hours advance notice, your deposit can be transferred to a newly agreed-upon date. Specific rescheduling parameters are confirmed directly with Dmitriy.',
    },
    {
      id: 'faq-7',
      category: 'AFTERCARE & HEALING',
      question: 'What aftercare routine is recommended for black-and-grey realism?',
      answer: 'We provide specialized medical-grade breathable dermal bandages (SecondSkin / Saniderm) for the first 3 to 5 days to isolate the tattoo from friction and airborne bacteria. After removing the bandage under warm water, clean gently with mild fragrance-free antibacterial soap, pat dry with a clean paper towel, and apply a thin layer of recommended fragrance-free moisturizer twice daily.',
    },
    {
      id: 'faq-8',
      category: 'AFTERCARE & HEALING',
      question: 'What is the full healing timeline for black-and-grey tattoos?',
      answer: 'The initial epidermis closes within 10 to 14 days. During weeks 2 through 4, the tattoo will go through a light peeling phase as fresh skin forms over the pigment. By week 6, the deeper dermis has fully settled, revealing rich charcoal gradients and smooth graphite transitions with zero redness.',
    },
    {
      id: 'faq-9',
      category: 'AFTERCARE & HEALING',
      question: 'When can I resume workouts, swimming, or sun exposure?',
      answer: 'Avoid heavy gym workouts and excessive sweating for 48 to 72 hours. Strenuous exercises that pull or stretch the tattooed skin directly should be paused for 5 to 7 days. Submerging in pools, hot tubs, saunas, or ocean water and direct sunbathing are strictly prohibited for at least 3 to 4 weeks until the skin is fully regenerated.',
    },
  ];

  return (
    <div className="pt-28 md:pt-36 bg-[#090909] text-[#E9E4DC] min-h-screen">
      {/* Schema.org FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          }),
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 border-b border-white/10">
        <Breadcrumbs items={[{ label: 'THE PROCESS' }]} />

        <span className="text-xs font-mono tracking-[0.25em] text-[#76262B] uppercase font-bold block mb-3">
          STUDIO PROTOCOL &amp; CLIENT GUIDANCE
        </span>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-white tracking-[0.03em] uppercase mb-4 leading-none">
          THE PROCESS &amp; FAQ
        </h1>
        <p className="text-base sm:text-lg text-[#999995] font-sans font-light max-w-2xl leading-relaxed">
          From concept intake to fully healed skin. A transparent, methodical approach designed to remove friction, answer questions, and prepare you for your session.
        </p>
      </div>

      {/* 5-Stage Studio Protocol Timeline */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Steps List */}
          <div className="lg:col-span-7 space-y-8">
            <div className="mb-2">
              <span className="text-xs font-mono tracking-widest text-[#76262B] uppercase font-bold block">
                STAGE-BY-STAGE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wide">
                THE 5 STAGES OF YOUR COMMISSION
              </h2>
            </div>

            {steps.map((s) => (
              <div
                key={s.num}
                className="p-8 bg-[#111112] border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-display text-3xl text-[#76262B]">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#999995] uppercase">
                    STAGE
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide mb-3 group-hover:text-[#E9E4DC] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#999995] font-sans font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Sticky Visual Card & Deposit Policy */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="bg-[#111112] border border-white/10 overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={heroTattooImage}
                  alt="Tattoo machine in sterile studio environment"
                  className="w-full h-full object-cover filter contrast-[1.15] brightness-[0.9]"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#76262B] mb-2 uppercase font-bold">
                  <Shield size={14} /> STERILE ENVIRONMENT
                </div>
                <h4 className="font-display text-xl text-white uppercase mb-2">
                  HOSPITAL-GRADE PROTOCOLS
                </h4>
                <p className="text-xs text-[#999995] font-sans leading-relaxed">
                  All needle cartridges are 100% single-use EO gas sterilized. Surface barriers, medical disinfectants, and cross-contamination prevention govern every session.
                </p>
              </div>
            </div>

            {/* Deposit Policy Callout */}
            <div className="p-6 bg-[#090909] border-l-2 border-[#76262B] border-t border-r border-b border-white/5">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#76262B] font-bold block mb-1">
                DEPOSIT POLICY
              </span>
              <p className="text-xs text-[#E9E4DC] font-sans leading-relaxed">
                A deposit is required to secure a booking. The deposit amount and payment instructions will be confirmed directly by the artist.
              </p>
            </div>

            <Link
              to="/book"
              className="w-full py-4 text-xs font-bold tracking-[0.18em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-colors flex items-center justify-center gap-2 shadow-xl active:scale-[0.99]"
            >
              <span>BOOK YOUR SESSION</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Accordion-Style FAQ Section */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#76262B]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#76262B] uppercase font-sans">
              CLEAR EXPECTATIONS &amp; GUIDANCE
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide leading-none mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm sm:text-base text-[#999995] font-sans font-light leading-relaxed">
            Everything you need to know about preparing for your session, deposit arrangements, pricing philosophy, and healed aftercare protocols.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#111112] border border-white/10 transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#76262B] font-bold block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wider">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-[#E9E4DC] shrink-0 mt-1 group-hover:border-white/30 transition-colors">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-0 border-t border-white/5 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-[#999995] font-sans font-light leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Strip */}
        <div className="mt-16 p-8 bg-[#111112] border border-white/10 max-w-4xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-2xl text-white uppercase mb-1">
              STILL HAVE A QUESTION ABOUT YOUR CONCEPT?
            </h4>
            <p className="text-xs text-[#999995] font-sans">
              Dmitriy is happy to address any technical or placement questions in your enquiry.
            </p>
          </div>

          <Link
            to="/book"
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold tracking-[0.16em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-colors shrink-0"
          >
            <span>SUBMIT AN ENQUIRY</span>
            <ArrowUpRight size={15} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
