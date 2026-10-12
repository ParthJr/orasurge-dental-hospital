import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

interface LocationCoordinatesProps {
  onRequestConsultationClick: () => void;
}

export default function LocationCoordinates({ onRequestConsultationClick }: LocationCoordinatesProps) {
  return (
    <section className="relative w-full bg-[#0A0F13] py-20 lg:py-28 border-t border-[#202832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs tracking-widest text-[#C7FF45] uppercase flex items-center gap-2">
              <span className="h-1.5 w-6 bg-[#C7FF45]" />
              DIAGNOSTIC CAMPUS // CLINICAL COORDINATES
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F5F7FA] mt-2">
              FIND ORASURGE.
            </h2>
          </div>

          <div className="font-mono text-xs text-[#8993A1]">
            SECTOR: KUDASAN · GANDHINAGAR · GUJARAT 382419
          </div>
        </div>

        {/* Contact Spec Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Physical Location Card */}
          <div className="lg:col-span-5 bg-[#14181E] p-8 sm:p-10 rounded-2xl border border-[rgba(137,147,161,0.25)] flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-6">
              {/* Verified Address Badge */}
              <div className="flex items-center gap-2 text-[#C7FF45] font-['Rajdhani'] font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>VERIFIED PHYSICAL ADDRESS</span>
              </div>

              <div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#F5F7FA]">
                  Orasurge Dental Hospital
                </h3>
                <p className="font-['Inter'] text-sm sm:text-base text-[#8993A1] mt-2 leading-relaxed">
                  The Landmark, A-402, above Sketchers showroom,<br />
                  Kudasan, Gandhinagar, Gujarat 382419.
                </p>
              </div>

              {/* Operating Specs Strip */}
              <div className="pt-4 space-y-3 border-t border-[#202832] font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#8993A1]">Primary Telephone:</span>
                  <a
                    href="tel:09825198854"
                    className="text-[#F5F7FA] font-bold hover:text-[#C7FF45] transition-colors"
                  >
                    098251 98854
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#8993A1]">Clinical Hours:</span>
                  <span className="text-[#F5F7FA]">Mon – Sat: 10:00 AM – 8:30 PM</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#8993A1]">Sunday Protocol:</span>
                  <span className="text-[#4B8DFF]">By Pre-booked Appointment</span>
                </div>
              </div>
            </div>

            {/* Direct Phone & Action Links */}
            <div className="pt-8 flex flex-wrap gap-3">
              <a
                href="tel:09825198854"
                className="inline-flex items-center gap-2 rounded bg-[#C7FF45] px-5 py-3 font-['Rajdhani'] font-bold text-xs uppercase tracking-wider text-[#101419] shadow-[0_0_14px_rgba(199,255,69,0.3)] hover:shadow-[0_0_20px_rgba(199,255,69,0.5)] transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 098251 98854</span>
              </a>

              <a
                href="https://maps.google.com/?q=The+Landmark+Kudasan+Gandhinagar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-[#202832] px-5 py-3 font-['Rajdhani'] font-semibold text-xs uppercase tracking-wider text-[#F5F7FA] border border-[rgba(137,147,161,0.25)] hover:bg-[#2A3542] hover:border-[#C7FF45]/40 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C7FF45]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Google Maps Visual Container Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-[rgba(137,147,161,0.25)] shadow-xl group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5OG3jMubBtD3epCfI9QfbjdvJOFZQ8tIFJxqOsHimSb8OmDzyo_GE5k_CcKwEBqoeSY-7RXgTJZ9bJ4rZnBSJgEdy_D8SnFdevVbXmzQ-HjiRO66-lIsBdWqYrJ1q4_NRJAiEqevfqCt6-IENtdZ6HRwfGl28ye6UH8UfzrHdC-RvJj2r8U0GUNLBDGPrhuWZoXTpbs4vNehr0TVpnGmVv0NZumAfq1HPSx9Enx0FHxt-c1nXRpRI7A"
                alt="Map location of Orasurge Dental Hospital at The Landmark, Kudasan, Gandhinagar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Scrim */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101419]/90 via-[#101419]/20 to-transparent" />

              {/* Overlay Coordinate Pill */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 bg-[#101419]/90 backdrop-blur-md px-4 py-3 rounded-xl border border-[rgba(137,147,161,0.3)] shadow-xl">
                <div className="font-mono text-xs text-[#F5F7FA]">
                  <span className="text-[#C7FF45] font-bold">MAP:</span> THE LANDMARK // A-402, KUDASAN
                  <span className="text-[#8993A1] block text-[11px] mt-0.5">
                    Above Sketchers Showroom · Gandhinagar Bypass
                  </span>
                </div>

                <a
                  href="https://maps.google.com/?q=The+Landmark+Kudasan+Gandhinagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#202832] text-xs font-mono text-[#C7FF45] hover:bg-[#2A3542] transition-colors"
                >
                  <span>OPEN MAP</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
