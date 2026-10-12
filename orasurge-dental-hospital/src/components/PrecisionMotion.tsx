import { MapPin, Printer, ShieldCheck, Compass } from 'lucide-react';

export default function PrecisionMotion() {
  return (
    <section className="relative w-full bg-[#0A0F13] py-20 lg:py-28 overflow-hidden border-t border-[#202832]">
      {/* Precision Geometric Vector Contours */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 500">
          <path d="M 0,250 C 300,100 500,400 1000,200" fill="none" stroke="#C7FF45" strokeWidth="1.5" />
          <path d="M 0,280 C 320,130 520,430 1000,230" fill="none" stroke="#4B8DFF" strokeWidth="1" />
          <path
            d="M 0,220 C 280,80 480,380 1000,180"
            fill="none"
            stroke="#F5F7FA"
            strokeDasharray="4 4"
            strokeWidth="0.75"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="font-mono text-xs tracking-widest text-[#C7FF45] uppercase flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-[#C7FF45] shadow-[0_0_6px_rgba(199,255,69,0.8)]" />
            PRECISION IN MOTION // GANDHINAGAR OPERATORY
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F5F7FA]">
            DESIGNED AROUND YOUR CARE.
          </h2>

          <p className="font-['Inter'] text-base sm:text-lg text-[#8993A1] leading-relaxed">
            Clear communication and thoughtful planning empower patients to understand every diagnostic indicator and actively participate in informed decisions regarding their surgical oral interventions.
          </p>
        </div>

        {/* Architectural Spec HUD Modules */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Module 1: Facility Coordinates */}
          <div className="bg-[#14181E] p-7 rounded-xl border border-[rgba(137,147,161,0.2)] shadow-lg backdrop-blur-sm relative group hover:border-[#C7FF45]/50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-[#C7FF45]">GEO_COORD // FACILITY</span>
              <MapPin className="w-4 h-4 text-[#C7FF45]" />
            </div>

            <div className="font-['Space_Grotesk'] text-xl font-bold text-[#F5F7FA] mb-2">
              23.1815° N, 72.6369° E
            </div>

            <p className="font-['Inter'] text-sm text-[#8993A1] leading-relaxed">
              Located in Kudasan, Gandhinagar&apos;s prime commercial health corridor with seamless accessibility and dedicated patient parking.
            </p>
          </div>

          {/* Module 2: Guided Surgical Stents */}
          <div className="bg-[#14181E] p-7 rounded-xl border border-[rgba(137,147,161,0.2)] shadow-lg backdrop-blur-sm relative group hover:border-[#4B8DFF]/50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-[#4B8DFF]">DIGITAL PROTOCOL</span>
              <Printer className="w-4 h-4 text-[#4B8DFF]" />
            </div>

            <div className="font-['Space_Grotesk'] text-xl font-bold text-[#F5F7FA] mb-2">
              Guided Surgical Stents
            </div>

            <p className="font-['Inter'] text-sm text-[#8993A1] leading-relaxed">
              3D-printed stereolithographic stents eliminate manual freehand variances, ensuring surgical angles calibrated to 0.1 degree accuracy.
            </p>
          </div>

          {/* Module 3: Class-B Autoclave Matrix */}
          <div className="bg-[#14181E] p-7 rounded-xl border border-[rgba(137,147,161,0.2)] shadow-lg backdrop-blur-sm relative group hover:border-[#C7FF45]/50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-[#C7FF45]">PATIENT HYGIENE CORE</span>
              <ShieldCheck className="w-4 h-4 text-[#C7FF45]" />
            </div>

            <div className="font-['Space_Grotesk'] text-xl font-bold text-[#F5F7FA] mb-2">
              Class-B Autoclave Matrix
            </div>

            <p className="font-['Inter'] text-sm text-[#8993A1] leading-relaxed">
              Continuous medical-grade sterilization verification complying with hospital-grade European EN13060 standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
