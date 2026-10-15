import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowUpRight } from 'lucide-react';

import gamblingSleeveImage from '../assets/images/signature_gambling_mask_sleeve_1792057936885.jpg';
import cathedralImage from '../assets/images/portfolio_cathedral_skull_realism_1792057936583.jpg';
import macroImage from '../assets/images/portfolio_detail_needle_macro_1792057937244.jpg';
import heroTattooImage from '../assets/images/hero_tattoo_process_1792057440855.jpg';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Full Sleeves' | 'Featured Pieces' | 'Detail Shots';
  image: string;
  placement: string;
  style: string;
  notes: string;
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'real-work-1',
    title: 'CUSTOM REALISM PIECE I',
    category: 'Featured Pieces',
    image: '/images/portfolio-work-1.jpg',
    placement: 'Forearm & Bicep Realism',
    style: 'Authentic Black & Grey',
    notes: 'Healed black-and-grey anatomical custom work by Dmitriy Tkach.',
  },
  {
    id: 'real-work-2',
    title: 'CUSTOM SLEEVE COMPOSITION II',
    category: 'Full Sleeves',
    image: '/images/portfolio-work-2.jpg',
    placement: 'Full Arm Coverage',
    style: 'Deep Carbon Saturation',
    notes: 'Multi-session custom composition designed around muscular flow.',
  },
  {
    id: 'real-work-3',
    title: 'SHADOW & GRADIENT WORK III',
    category: 'Featured Pieces',
    image: '/images/portfolio-work-3.jpg',
    placement: 'Anatomical Flow Study',
    style: 'Fine-Line & Wash Dispersion',
    notes: 'Smooth micro-tonal transitions and high-contrast shadow anchoring.',
  },
  {
    id: 'gambling-mask',
    title: 'THE HIGH-STAKES NARRATIVE SLEEVE',
    category: 'Full Sleeves',
    image: gamblingSleeveImage,
    placement: 'Full Arm Sleeve',
    style: 'Surreal Narrative Realism',
    notes: 'Venetian mask, nocturnal city skyline, dice, poker hand, and roulette.',
  },
  {
    id: 'gothic-cathedral',
    title: 'CATHEDRAL ARCHWAY & SKULL',
    category: 'Featured Pieces',
    image: cathedralImage,
    placement: 'Upper Back & Shoulder Canopy',
    style: 'Baroque Gothic Realism',
    notes: 'High-contrast stone tracery with anatomical skull and rose filigree.',
  },
  {
    id: 'macro-texture',
    title: 'LION GAZE & MICRO-CONTRAST',
    category: 'Detail Shots',
    image: macroImage,
    placement: 'Inner Forearm Realism',
    style: 'Fine-Line Hair Detail',
    notes: 'Healed micro-contrasts showing individual whiskers and pupil reflections.',
  },
  {
    id: 'studio-precision',
    title: 'MACHINE RUN & NEEDLE STROKE',
    category: 'Detail Shots',
    image: heroTattooImage,
    placement: 'Active Studio Session',
    style: 'Precision Inking',
    notes: 'Sterile single-use cartridge arrays and customized stroke calibration.',
  },
];

export default function PortfolioGallery({ previewOnly = false }: { previewOnly?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Full Sleeves', 'Featured Pieces', 'Detail Shots'];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category === activeCategory);

  const displayedItems = previewOnly ? filteredItems.slice(0, 4) : filteredItems;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedItems.length);
    }
  }, [lightboxIndex, displayedItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayedItems.length) % displayedItems.length);
    }
  }, [lightboxIndex, displayedItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage, closeLightbox]);

  return (
    <section id="work" className="py-28 md:py-36 bg-[#090909] text-[#E9E4DC] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#76262B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#999995] uppercase font-sans">
                AUTHENTIC BODY ARCHIVE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#E9E4DC] tracking-[0.03em] uppercase leading-none">
              SELECTED WORK
            </h2>
          </div>

          {/* Interactive Category Segmented Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#E9E4DC] text-[#090909] font-bold'
                    : 'bg-[#111112] text-[#999995] hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {displayedItems.map((item, idx) => {
            const colSpan = idx % 3 === 0 ? 'lg:col-span-7' : 'lg:col-span-5';
            return (
              <div
                key={item.id}
                className={`${colSpan} group cursor-pointer bg-[#111112] border border-white/10 overflow-hidden shadow-xl transition-all duration-300 hover:border-white/30`}
                onClick={() => openLightbox(idx)}
              >
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#090909]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.95] group-hover:scale-103 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover expansion button hint */}
                  <div className="absolute top-4 right-4 w-9 h-9 bg-[#090909]/80 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <Maximize2 size={16} />
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#090909] via-[#090909]/80 to-transparent">
                    <span className="text-[10px] font-mono tracking-widest text-[#76262B] font-bold block mb-1">
                      {item.category.toUpperCase()}
                    </span>
                    <h3 className="font-display text-2xl text-[#E9E4DC] tracking-wider uppercase mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-[#999995] font-sans">
                      <span>{item.placement}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.style}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#999995] font-sans">
            Photographed authentic work executed by Dmitriy Tkach in private studio sessions.
          </p>

          <Link
            to="/book"
            className="inline-flex items-center gap-3 px-8 py-3.5 text-xs font-bold tracking-[0.16em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-colors"
          >
            <span>HAVE AN IDEA IN MIND? START HERE</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#090909]/96 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12 animate-in fade-in duration-200"
        >
          {/* Top Bar with Close */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#76262B] uppercase block">
                {displayedItems[lightboxIndex].category}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-white tracking-wider uppercase">
                {displayedItems[lightboxIndex].title}
              </h3>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-3 text-[#999995] hover:text-white border border-white/10 hover:border-white transition-colors cursor-pointer"
              aria-label="Close Lightbox (Esc)"
            >
              <X size={20} />
            </button>
          </div>

          {/* Central Image Viewer */}
          <div className="relative flex-1 flex items-center justify-center my-6 overflow-hidden">
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 md:left-6 z-10 p-3 bg-[#111112]/80 border border-white/15 text-white hover:bg-[#76262B] transition-colors cursor-pointer"
              aria-label="Previous artwork"
            >
              <ChevronLeft size={22} />
            </button>

            <img
              src={displayedItems[lightboxIndex].image}
              alt={displayedItems[lightboxIndex].title}
              className="max-h-[72vh] max-w-full object-contain filter contrast-[1.08] shadow-2xl"
              referrerPolicy="no-referrer"
            />

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 md:right-6 z-10 p-3 bg-[#111112]/80 border border-white/15 text-white hover:bg-[#76262B] transition-colors cursor-pointer"
              aria-label="Next artwork"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Bottom Lightbox Information */}
          <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#999995] gap-3">
            <div className="flex items-center gap-4">
              <span className="text-[#E9E4DC] font-medium">
                {displayedItems[lightboxIndex].placement}
              </span>
              <span aria-hidden="true">·</span>
              <span>{displayedItems[lightboxIndex].notes}</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px]">
                {lightboxIndex + 1} / {displayedItems.length}
              </span>
              <Link
                to="/book"
                onClick={closeLightbox}
                className="text-[#E9E4DC] font-bold uppercase tracking-wider hover:text-[#76262B] transition-colors"
              >
                REQUEST SIMILAR DESIGN →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
