import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPage() {
  return (
    <div className="pt-28 md:pt-36 bg-[#090909] text-[#E9E4DC] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-24">
        <Breadcrumbs items={[{ label: 'PRIVACY POLICY' }]} />

        <span className="text-xs font-mono tracking-[0.25em] text-[#76262B] uppercase font-bold block mb-3">
          LEGAL &amp; PRIVACY
        </span>
        <h1 className="font-display text-5xl sm:text-6xl text-white tracking-[0.03em] uppercase mb-8 leading-none">
          PRIVACY POLICY
        </h1>

        <div className="space-y-8 text-xs sm:text-sm text-[#999995] font-sans font-light leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-3">
              01. INFORMATION WE COLLECT
            </h2>
            <p>
              When you submit a tattoo enquiry to artist Dmitriy Tkach, we collect information you voluntarily provide. This includes your full name, email address, optional phone number, desired tattoo placement, scale, design concept, and reference images.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-3">
              02. PURPOSE OF DATA USE
            </h2>
            <p>
              Your personal information is used exclusively to evaluate your tattoo project, establish creative feasibility, discuss scheduling, and communicate deposit and appointment instructions directly with artist Dmitriy Tkach. We do not sell, rent, or trade your contact data with third-party marketers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-3">
              03. REFERENCE IMAGES &amp; ARTWORK PRIVACY
            </h2>
            <p>
              Any reference photographs, body placement photos, or preliminary sketches you upload are held confidentially and accessed only for the artistic preparation of your custom piece.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-3">
              04. COOKIES &amp; THIRD-PARTY PLATFORMS
            </h2>
            <p>
              This website does not run intrusive advertising trackers. We provide direct external links to our verified Facebook profile for convenience. Interactions on external platforms are subject to their respective privacy terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-3">
              05. CONTACTING THE STUDIO
            </h2>
            <p>
              If you have any questions regarding your submitted details or wish to have your project intake information updated or deleted, please contact Dmitriy Tkach directly via our booking portal or official Facebook profile.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
