import { useState } from 'react';
import { ArrowRight, Calendar, Star, Layers, Cpu, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onRequestConsultationClick: () => void;
}

export default function Hero({ onExploreClick, onRequestConsultationClick }: HeroProps) {
  const [hudMode, setHudMode] = useState<'volumetric' | 'stent' | 'biomechanical'>('volumetric');

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#101419] pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Precision CAD grid background with subtle hairline guides */}
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-40" />

      {/* Subtle laser lime and electric blue radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C7FF45]/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#4B8DFF]/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
          {/* Left Column: Typography & Action Stack */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Trust Metric Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#181C21] border border-[rgba(137,147,161,0.25)] px-3.5 py-1.5 w-fit shadow-sm">
              <div className="flex text-[#C7FF45]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C7FF45]" />
                ))}
              </div>
              <span className="font-['Space_Grotesk'] font-bold text-xs text-[#F5F7FA]">5.0</span>
              <span className="text-[#8993A1] text-xs font-mono">· 4 Google Verified Reviews</span>
            </div>

            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#C7FF45] uppercase">
              <span className="h-1.5 w-6 bg-[#C7FF45]" />
              ORASURGE DENTAL HOSPITAL · KUDASAN
            </div>

            {/* Core Headline */}
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F5F7FA] leading-[1.08]">
              REDEFINE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] via-[#F5F7FA] to-[#C7FF45]">
                DENTAL EXPERIENCE.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="max-w-xl font-['Inter'] text-base sm:text-lg text-[#8993A1] leading-relaxed">
              Explore dental care, understand your clinical options, and take the next step toward informed decisions about your oral health with sub-millimeter surgical accuracy.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-2.5 rounded bg-[#C7FF45] px-6 py-3.5 font-['Rajdhani'] font-bold text-sm tracking-wider uppercase text-[#101419] shadow-[0_0_16px_rgba(199,255,69,0.35)] hover:shadow-[0_0_24px_rgba(199,255,69,0.55)] hover:bg-[#D4FF66] transition-all cursor-pointer"
              >
                <span>Explore Dental Care</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onRequestConsultationClick}
                className="inline-flex items-center gap-2.5 rounded bg-[#202832] px-6 py-3.5 font-['Rajdhani'] font-semibold text-sm tracking-wider uppercase text-[#F5F7FA] border border-[rgba(137,147,161,0.25)] hover:bg-[#2A3542] hover:border-[#C7FF45]/40 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C7FF45]" />
                <span>Request Consultation</span>
              </button>
            </div>

            {/* Telemetry Readout Strip */}
            <div className="pt-4 grid grid-cols-3 gap-3 font-mono text-xs text-[#8993A1]">
              <div className="bg-[#181C21] p-3 rounded border border-[rgba(137,147,161,0.15)]">
                <span className="text-[#C7FF45] block font-bold font-['Space_Grotesk'] text-xl sm:text-2xl leading-none mb-1">
                  0.2<span className="text-xs font-mono font-normal">mm</span>
                </span>
                <span className="text-[11px] block">CBCT Guided Margin</span>
              </div>

              <div className="bg-[#181C21] p-3 rounded border border-[rgba(137,147,161,0.15)]">
                <span className="text-[#4B8DFF] block font-bold font-['Space_Grotesk'] text-xl sm:text-2xl leading-none mb-1">
                  100%
                </span>
                <span className="text-[11px] block">Digital CAD/CAM</span>
              </div>

              <div className="bg-[#181C21] p-3 rounded border border-[rgba(137,147,161,0.15)]">
                <span className="text-[#F5F7FA] block font-bold font-['Space_Grotesk'] text-xl sm:text-2xl leading-none mb-1">
                  SEC_01
                </span>
                <span className="text-[11px] block">Sterile Operatory Core</span>
              </div>
            </div>
          </div>

          {/* Right Column: Volumetric HUD Spatial Glass Visualizer */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden bg-[#181C21] border border-[rgba(137,147,161,0.25)] shadow-2xl shadow-black/80">
              {/* Surgical HUD Header Overlay */}
              <div className="flex items-center justify-between bg-[#202832]/90 px-4 py-2.5 backdrop-blur-md border-b border-[rgba(137,147,161,0.2)] font-mono text-[11px]">
                <div className="flex items-center gap-2 text-[#C7FF45]">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#C7FF45] animate-ping" />
                  <span className="font-semibold tracking-wider">HUD_SCAN // VOLUMETRIC VIEW</span>
                </div>
                <span className="text-[#8993A1]">AXIS_XYZ: OPTIMAL</span>
              </div>

              {/* Visual Display with Crosshair and Interactive Overlay */}
              <div className="relative aspect-[4/3] w-full bg-[#101419] overflow-hidden group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCoIpBUdlroFsTQmiOtQjTOia9T5PO_3Zk5a2BvqEnhaRfS67iGB4eqWS4lVuP9d5HB_zcfIJ8kqYRjV06IgVySEOHn-TREmaCzE0F9QtdLGj1zaqM5hx8grlNipQZ0Dyz1XYpfYrz79mYLR-KMQTcAh02Spt2S8Dgv0rpEunD0XpULSdDWKTU3UZxWbnnNryj4US8nKkDFpuahpixR-P0_xbNAOgc-wL4UKLfivUe6i-MgWkhAKn5sw"
                  alt="Futuristic spatial dental architecture HUD visualization with volumetric anatomical structure"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient Scrim */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101419] via-transparent to-transparent opacity-70" />

                {/* Calibrated Reticle Crosshairs */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="relative w-28 h-28 rounded-full border border-[#C7FF45]/30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C7FF45] shadow-[0_0_10px_rgba(199,255,69,0.9)]" />
                    {/* Reticle tick marks */}
                    <div className="absolute top-0 w-2 h-[1px] bg-[#C7FF45]" />
                    <div className="absolute bottom-0 w-2 h-[1px] bg-[#C7FF45]" />
                    <div className="absolute left-0 h-2 w-[1px] bg-[#C7FF45]" />
                    <div className="absolute right-0 h-2 w-[1px] bg-[#C7FF45]" />
                  </div>
                </div>

                {/* Interactive Diagnostic Mode Switcher Overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#101419]/80 backdrop-blur-md p-1 rounded border border-[rgba(137,147,161,0.25)]">
                  <button
                    onClick={() => setHudMode('volumetric')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-wider transition-colors ${
                      hudMode === 'volumetric' ? 'bg-[#C7FF45] text-[#101419] font-bold' : 'text-[#8993A1] hover:text-[#F5F7FA]'
                    }`}
                  >
                    3D_CBCT
                  </button>
                  <button
                    onClick={() => setHudMode('stent')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-wider transition-colors ${
                      hudMode === 'stent' ? 'bg-[#4B8DFF] text-[#101419] font-bold' : 'text-[#8993A1] hover:text-[#F5F7FA]'
                    }`}
                  >
                    STENT
                  </button>
                  <button
                    onClick={() => setHudMode('biomechanical')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-wider transition-colors ${
                      hudMode === 'biomechanical' ? 'bg-[#F5F7FA] text-[#101419] font-bold' : 'text-[#8993A1] hover:text-[#F5F7FA]'
                    }`}
                  >
                    AXIS
                  </button>
                </div>

                {/* Real-time Telemetry Overlay Tag */}
                <div className="absolute bottom-3 left-3 bg-[#101419]/85 backdrop-blur-md px-2.5 py-1 rounded border border-[rgba(137,147,161,0.2)] font-mono text-[10px] text-[#C7FF45] flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-[#C7FF45]" />
                  <span>MODE: {hudMode.toUpperCase()} // RES: 0.05mm</span>
                </div>
              </div>

              {/* HUD Diagnostics Footer Bar */}
              <div className="flex items-center justify-between bg-[#202832] px-4 py-3 font-mono text-xs border-t border-[rgba(137,147,161,0.2)]">
                <div className="flex items-center gap-2 text-[#F5F7FA]">
                  <Cpu className="w-3.5 h-3.5 text-[#C7FF45]" />
                  <span>ODONTOGRAM_3D: SYNCED</span>
                </div>
                <span className="text-[#C7FF45] font-semibold tracking-widest">
                  01 / DISCOVER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
