import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import SkullLogo from './SkullLogo';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-[#E9E4DC] border-t border-white/10 relative overflow-hidden">
      {/* Upper Cinematic Call To Action Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 border-b border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#76262B] uppercase font-bold block mb-4">
              NEXT CHAPTER
            </span>
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-[0.02em] uppercase leading-[0.85] mb-4">
              GOT A STORY<br />TO TELL?
            </h2>
            <p className="font-accent text-2xl text-[#999995] font-normal italic">
              &ldquo;Let&apos;s start with your idea.&rdquo;
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Link
              to="/book"
              className="inline-flex items-center justify-center px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase text-white bg-[#76262B] hover:bg-[#8e2e34] transition-all shadow-2xl active:scale-95"
            >
              <span>START YOUR CUSTOM TATTOO</span>
              <ArrowUpRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Grid: Directory, Artist Meta, Verified Links */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand & Artist Lockup */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4 group">
                <SkullLogo className="w-10 h-10" />
                <span className="font-display text-3xl tracking-[0.08em] text-white">
                  DMITRIY TKACH
                </span>
              </div>
              <p className="text-xs text-[#999995] font-sans font-light leading-relaxed max-w-sm mb-6">
                Specialized custom black-and-grey tattooing. Bespoke anatomical compositions built around narrative, memory, and permanent tonal contrast.
              </p>
            </div>

            <div className="text-xs text-[#999995] font-sans space-y-1">
              <p className="text-[#E9E4DC] font-semibold">DMITRIY TKACH</p>
              <p>Black &amp; Grey Tattoo Artist</p>
              <p>Serving New Jersey &amp; New York Metropolitan Area</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono tracking-widest text-white uppercase mb-5">
              EXPLORATION
            </h4>
            <ul className="space-y-3 text-xs tracking-wider uppercase font-sans text-[#999995]">
              <li>
                <Link to="/work" className="hover:text-white transition-colors">
                  PORTFOLIO ARCHIVE
                </Link>
              </li>
              <li>
                <Link to="/artist" className="hover:text-white transition-colors">
                  THE ARTIST
                </Link>
              </li>
              <li>
                <Link to="/custom" className="hover:text-white transition-colors">
                  CUSTOM PIECES
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-white transition-colors">
                  THE PROCESS
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-white transition-colors">
                  APPOINTMENT ENQUIRY
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Policies & Verified Channel */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-mono tracking-widest text-white uppercase mb-5">
              VERIFIED CHANNELS
            </h4>
            <div className="space-y-4 text-xs font-sans">
              <a
                href="https://www.facebook.com/profile.php?id=61595210122065"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#111112] border border-white/10 hover:border-white/30 text-[#E9E4DC] transition-colors group"
              >
                <div>
                  <span className="font-semibold block mb-0.5">Official Facebook Profile</span>
                  <span className="text-[11px] text-[#999995]">Direct Artist Inquiries &amp; Updates</span>
                </div>
                <ExternalLink size={16} className="text-[#999995] group-hover:text-white transition-colors" />
              </a>

              <div className="p-4 bg-[#090909] border border-white/5 text-[11px] text-[#999995] leading-relaxed">
                <span className="text-[#E9E4DC] block font-medium mb-1">Deposit Notice</span>
                Every tattoo session requires an advance deposit to secure studio time. Deposit details are provided directly by Dmitriy Tkach.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-white/5 py-8 text-[11px] text-[#999995] font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Dmitriy Tkach · All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#E9E4DC] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">·</span>
            <span>New Jersey / New York</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
