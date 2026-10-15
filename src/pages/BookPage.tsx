import BookingForm from '../components/BookingForm';
import { ShieldCheck, MapPin, Calendar, HelpCircle, ExternalLink } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function BookPage() {
  const faqs = [
    {
      q: 'How does the deposit process work?',
      a: 'A deposit is required to secure a booking. The deposit amount and payment instructions will be confirmed directly by the artist once your concept and session length are reviewed.',
    },
    {
      q: 'Where is the studio located?',
      a: 'Dmitriy Tkach serves the New Jersey and New York metropolitan area. Precise studio location and arrival instructions are provided upon confirmed booking for privacy and security.',
    },
    {
      q: 'Do I need a finalized design before submitting?',
      a: 'Not at all. You only need a core idea, personal symbols, or reference images. Dmitriy creates bespoke designs tailored to your anatomical flow.',
    },
    {
      q: 'Can I message on Facebook directly?',
      a: 'Yes. Dmitriy maintains an official Facebook profile for direct client inquiries and artwork updates.',
    },
  ];

  return (
    <div className="pt-28 md:pt-36 bg-[#090909] text-[#E9E4DC] min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 border-b border-white/10">
        <Breadcrumbs items={[{ label: 'BOOKING & CONSULTATION' }]} />
        <span className="text-xs font-mono tracking-[0.25em] text-[#76262B] uppercase font-bold block mb-3">
          DIRECT INTAKE
        </span>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-white tracking-[0.03em] uppercase mb-4 leading-none">
          BOOK YOUR SESSION
        </h1>
        <p className="text-base sm:text-lg text-[#999995] font-sans font-light max-w-2xl leading-relaxed">
          Submit your concept to Dmitriy Tkach. Private studio sessions exclusively dedicated to custom black-and-grey tattooing.
        </p>
      </div>

      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Booking Form Column */}
          <div className="lg:col-span-8">
            <BookingForm />
          </div>

          {/* Sidebar / Studio Info & FAQs */}
          <div className="lg:col-span-4 space-y-8">
            {/* Studio Summary Card */}
            <div className="bg-[#111112] border border-white/10 p-6 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#76262B] uppercase font-bold block">
                STUDIO INFORMATION
              </span>

              <div className="flex items-start gap-3 text-xs text-[#999995]">
                <MapPin size={16} className="text-[#E9E4DC] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Service Area</strong>
                  New Jersey &amp; New York Metropolitan Region
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#999995]">
                <Calendar size={16} className="text-[#E9E4DC] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Scheduling</strong>
                  By confirmed advance appointment only
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#999995]">
                <ShieldCheck size={16} className="text-[#E9E4DC] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Deposit Requirement</strong>
                  Confirmed directly by artist prior to booking
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <a
                  href="https://www.facebook.com/profile.php?id=61595210122065"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#090909] border border-white/10 hover:border-white/30 text-xs text-[#E9E4DC] transition-colors"
                >
                  <span>Dmitriy Tkach on Facebook</span>
                  <ExternalLink size={13} className="text-[#999995]" />
                </a>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="bg-[#111112] border border-white/10 p-6">
              <h3 className="font-display text-xl text-white uppercase mb-4 flex items-center gap-2">
                <HelpCircle size={16} className="text-[#76262B]" />
                BOOKING QUESTIONS
              </h3>

              <div className="space-y-4 divide-y divide-white/5">
                {faqs.map((faq) => (
                  <div key={faq.q} className="pt-3 first:pt-0">
                    <h4 className="text-xs font-semibold text-white mb-1">
                      {faq.q}
                    </h4>
                    <p className="text-[11px] text-[#999995] font-sans leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
