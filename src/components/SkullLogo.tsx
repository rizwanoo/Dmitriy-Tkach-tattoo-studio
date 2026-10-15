export default function SkullLogo({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Outer subtle shield / diamond hairline border */}
      <div className="absolute inset-0 rounded-sm bg-[#111112] border border-white/20 group-hover:border-[#76262B] transition-all duration-300 shadow-md group-hover:shadow-[#76262B]/20" />

      {/* Badass Tattoo Master Skull SVG Emblem */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[78%] h-[78%] transition-transform duration-300 group-hover:scale-105"
      >
        {/* Subtle crossed tattoo needles in background */}
        <path
          d="M18 18 L82 82 M82 18 L18 82"
          stroke="#76262B"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="opacity-40 group-hover:opacity-80 transition-opacity"
        />

        {/* Needle Tips */}
        <circle cx="18" cy="18" r="1.5" fill="#76262B" />
        <circle cx="82" cy="18" r="1.5" fill="#76262B" />
        <circle cx="18" cy="82" r="1.5" fill="#76262B" />
        <circle cx="82" cy="82" r="1.5" fill="#76262B" />

        {/* Cranium Outline */}
        <path
          d="M 28 44 C 28 26, 38 18, 50 18 C 62 18, 72 26, 72 44 C 72 50, 68 56, 68 62 C 68 65, 66 68, 64 68 L 36 68 C 34 68, 32 65, 32 62 C 32 56, 28 50, 28 44 Z"
          fill="#090909"
          stroke="#E9E4DC"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Forehead Suture Line / Fine Crack */}
        <path
          d="M 50 18 L 49 26 L 52 30 L 50 34"
          stroke="#E9E4DC"
          strokeWidth="1"
          strokeLinecap="round"
          className="opacity-70"
        />

        {/* Menacing Angular Eye Sockets */}
        {/* Left Eye */}
        <path
          d="M 36 43 C 35 40, 42 38, 44 41 C 46 45, 41 51, 38 50 C 35 49, 36 45, 36 43 Z"
          fill="#111112"
          stroke="#E9E4DC"
          strokeWidth="1.5"
          className="group-hover:fill-[#76262B]/80 transition-colors duration-300"
        />
        {/* Right Eye */}
        <path
          d="M 64 43 C 65 40, 58 38, 56 41 C 54 45, 59 51, 62 50 C 65 49, 64 45, 64 43 Z"
          fill="#111112"
          stroke="#E9E4DC"
          strokeWidth="1.5"
          className="group-hover:fill-[#76262B]/80 transition-colors duration-300"
        />

        {/* Inverted Triangular Nasal Cavity */}
        <path
          d="M 50 49 L 47 57 L 50 56 L 53 57 Z"
          fill="#111112"
          stroke="#E9E4DC"
          strokeWidth="1.2"
          strokeLinejoin="round"
          className="group-hover:fill-[#76262B] transition-colors duration-300"
        />

        {/* Zygomatic Arch / Cheekbone Insets */}
        <path
          d="M 28 48 C 31 52, 33 58, 36 61"
          stroke="#E9E4DC"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 72 48 C 69 52, 67 58, 64 61"
          stroke="#E9E4DC"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Maxilla / Teeth Section */}
        {/* Jaw Base */}
        <path
          d="M 37 68 L 38 78 C 38 80, 42 81, 50 81 C 58 81, 62 80, 62 78 L 63 68"
          fill="#090909"
          stroke="#E9E4DC"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Upper & Lower Teeth Separators */}
        <path
          d="M 40 73 L 60 73"
          stroke="#E9E4DC"
          strokeWidth="1.2"
        />
        {/* Vertical Teeth Cuts */}
        <path d="M 44 68 L 44 78" stroke="#E9E4DC" strokeWidth="1.2" />
        <path d="M 48 68 L 48 78" stroke="#E9E4DC" strokeWidth="1.2" />
        <path d="M 52 68 L 52 78" stroke="#E9E4DC" strokeWidth="1.2" />
        <path d="M 56 68 L 56 78" stroke="#E9E4DC" strokeWidth="1.2" />
      </svg>
    </div>
  );
}
