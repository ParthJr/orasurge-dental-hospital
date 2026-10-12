import { CheckCircle2, Compass, ShieldCheck } from 'lucide-react';

export default function PerspectiveIntro() {
  return (
    <section id="approach" className="relative w-full bg-[#0E1217] py-20 lg:py-28 border-y border-[#202832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Giant Technical Counter Identifier */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-['Space_Grotesk'] font-bold text-6xl sm:text-7xl lg:text-8xl text-[#C7FF45] opacity-90 leading-none">
                02
              </span>
              <div className="flex flex-col">
                <span className="font-['Rajdhani'] font-bold text-xs tracking-widest text-[#C7FF45] uppercase">
                  PERSPECTIVE
                </span>
                <span className="font-mono text-[11px] text-[#8993A1]">CORE_PROTOCOL</span>
              </div>
            </div>
            <div className="mt-4 h-0.5 w-24 bg-[#C7FF45] shadow-[0_0_12px_rgba(199,255,69,0.7)]" />

            <div className="mt-8 space-y-3 font-mono text-xs text-[#8993A1] hidden lg:block">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C7FF45]" />
                <span>UNBIASED SECOND OPINIONS</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#4B8DFF]" />
                <span>ANATOMICAL RADIOLOGY REVIEW</span>
              </div>
            </div>
          </div>

          {/* Narrative Typographic Expression */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#C7FF45] uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-[#C7FF45] shadow-[0_0_6px_rgba(199,255,69,0.8)]" />
              THE ORASURGE APPROACH
            </div>

            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F5F7FA] leading-tight">
              BETTER DECISIONS START WITH CLARITY.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <p className="font-['Inter'] text-base sm:text-lg text-[#8993A1] leading-relaxed">
                Understanding your dental concerns and available treatment options is an essential foundation of oral healthcare. We eliminate clinical ambiguity through transparent volumetric visualizations, algorithmic diagnostics, and objective clinical appraisals.
              </p>

              <div className="bg-[#181C21] p-6 sm:p-7 rounded-xl border border-[rgba(137,147,161,0.2)] flex flex-col justify-between shadow-lg relative overflow-hidden group">
                {/* Fine lime corner reticle */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C7FF45]/40" />

                <blockquote className="font-['Inter'] text-sm sm:text-base text-[#F5F7FA] leading-relaxed italic">
                  &ldquo;Our practice is engineered around deliberate consultation. Before any instrument engages, every patient possesses complete spatial visualization of their anatomy and surgical roadmap.&rdquo;
                </blockquote>

                <div className="pt-6 flex items-center gap-2 font-mono text-xs text-[#C7FF45] border-t border-[rgba(137,147,161,0.15)] mt-4">
                  <CheckCircle2 className="w-4 h-4 text-[#C7FF45] shrink-0" />
                  <span className="font-medium tracking-wide">
                    DR. CLINICAL BOARD // ORASURGE GANDHINAGAR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
