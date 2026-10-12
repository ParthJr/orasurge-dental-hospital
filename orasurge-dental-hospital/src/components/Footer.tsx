interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-[#0A0F13] border-t border-[#202832] py-16 text-[#8993A1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand Wordmark & Mission */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-7 rounded bg-[#202832] border border-[rgba(137,147,161,0.3)] flex items-center justify-center">
                <div className="w-3.5 h-[1.5px] bg-[#C7FF45]" />
                <div className="absolute h-3.5 w-[1.5px] bg-[#C7FF45]" />
              </div>
              <span className="font-['Space_Grotesk'] text-lg uppercase font-bold text-[#F5F7FA]">
                Orasurge
              </span>
            </div>

            <p className="font-['Inter'] text-xs text-[#8993A1] leading-relaxed">
              Sub-millimeter surgical robotics and diagnostic volumetric spatial computing for advanced maxillofacial rehabilitation.
            </p>

            <div className="font-mono text-xs text-[#C7FF45] flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-[#C7FF45] shadow-[0_0_8px_rgba(199,255,69,0.8)] animate-pulse" />
              <span>CLINICAL TELEMETRY ACTIVE</span>
            </div>
          </div>

          {/* Column 2: Navigation Index */}
          <div>
            <div className="font-['Rajdhani'] font-bold text-xs uppercase tracking-wider text-[#F5F7FA] mb-4">
              Navigation Index
            </div>
            <ul className="space-y-2.5 font-['Inter'] text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#C7FF45] transition-colors cursor-pointer text-left"
                >
                  Home Viewport
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('approach')}
                  className="hover:text-[#C7FF45] transition-colors cursor-pointer text-left"
                >
                  Our Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('treatments')}
                  className="hover:text-[#C7FF45] transition-colors cursor-pointer text-left"
                >
                  Implantology &amp; Care Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('featured')}
                  className="hover:text-[#C7FF45] transition-colors cursor-pointer text-left"
                >
                  Decision Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C7FF45] transition-colors cursor-pointer text-left"
                >
                  Clinical Consultation Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Facilities */}
          <div>
            <div className="font-['Rajdhani'] font-bold text-xs uppercase tracking-wider text-[#F5F7FA] mb-4">
              Specialized Facilities
            </div>
            <ul className="space-y-2.5 font-['Inter'] text-xs text-[#8993A1]">
              <li>CBCT Volumetric Diagnostic Suite</li>
              <li>Computer-Guided Surgery Stent Lab</li>
              <li>Immediate Full-Arch Reconstruction</li>
              <li>Micro-Vascular Maxillofacial Care</li>
              <li>Class-B Hospital Sterilization Core</li>
            </ul>
          </div>

          {/* Column 4: Clinical Headquarters */}
          <div>
            <div className="font-['Rajdhani'] font-bold text-xs uppercase tracking-wider text-[#F5F7FA] mb-4">
              Clinical Headquarters
            </div>
            <div className="font-['Inter'] text-xs space-y-1.5 mb-4">
              <p className="text-[#F5F7FA] font-medium">The Landmark, A-402</p>
              <p>Above Sketchers Showroom, Kudasan</p>
              <p>Gandhinagar, Gujarat 382419, India</p>
            </div>
            <div className="font-mono text-xs text-[#4B8DFF] space-y-1">
              <p>
                DIRECT DESK:{' '}
                <a href="tel:09825198854" className="hover:underline text-[#F5F7FA]">
                  098251 98854
                </a>
              </p>
              <p>RAD_NET: DICOM SEC_04</p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 border-t border-[#202832] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © 2025 ORASURGE DENTAL HOSPITAL. ALL CLINICAL PROTOCOLS RESERVED.
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <span className="text-[#C7FF45]">ISO 13485 CERTIFIED</span>
            <span>SUB-MM CALIBRATED</span>
            <span className="text-[#8993A1]">LAT 23.1815° N // LON 72.6369° E</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
