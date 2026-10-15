import Hero from '../components/Hero';
import OpeningStatement from '../components/OpeningStatement';
import BlackAndGreyArt from '../components/BlackAndGreyArt';
import SignatureArtwork from '../components/SignatureArtwork';
import ArtistSection from '../components/ArtistSection';
import PortfolioGallery from '../components/PortfolioGallery';
import CustomWorkExperience from '../components/CustomWorkExperience';
import BookingForm from '../components/BookingForm';

export default function HomePage() {
  return (
    <main>
      {/* 01. Cinematic Hero with transparent navbar overlay & local looping video */}
      <Hero />

      {/* 02. Section 1 — The Opening Statement */}
      <OpeningStatement />

      {/* 03. Section 2 — The Art of Black & Grey */}
      <BlackAndGreyArt />

      {/* 04. Section 3 — Signature Artwork (Narrative Sleeve) */}
      <SignatureArtwork />

      {/* 05. Section 4 — Meet Dmitriy Tkach */}
      <ArtistSection />

      {/* 06. Section 5 — The Portfolio Gallery */}
      <PortfolioGallery previewOnly={false} />

      {/* 07. Section 6 — The Custom Tattoo Experience */}
      <CustomWorkExperience />

      {/* 08. Section 7 — Dedicated Booking Anchor Section */}
      <section id="book" className="py-28 md:py-36 bg-[#090909] text-[#E9E4DC] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-[0.25em] text-[#76262B] uppercase font-bold block mb-3">
              DIRECT RESERVATION
            </span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-[0.03em] uppercase mb-4">
              BOOK YOUR SESSION
            </h2>
            <p className="text-sm sm:text-base text-[#999995] font-sans font-light max-w-xl mx-auto">
              Tell Dmitriy about your concept, placement, and timeline. Private studio appointments serving New Jersey and New York.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>
    </main>
  );
}
