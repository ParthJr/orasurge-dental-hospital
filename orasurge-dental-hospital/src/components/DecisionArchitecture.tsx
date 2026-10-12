import { useState } from 'react';
import { Check, Compass, Eye, FileText, ChevronRight } from 'lucide-react';

interface Stage {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

const STAGES: Stage[] = [
  {
    number: '01',
    title: 'Stage 01 — Consultation',
    description: 'Discuss your immediate concerns, aesthetic priorities, and personal medical history within a zero-pressure dialogue.',
    deliverables: ['Oral history review', 'Patient priority assessment', 'Preliminary visual screening'],
  },
  {
    number: '02',
    title: 'Stage 02 — Assessment',
    description: 'Review complete volumetric CBCT radiology, intraoral scans, and biomechanical parameters together with your surgeon.',
    deliverables: ['3D CBCT bone density mapping', 'High-res intraoral digitizing', 'Biomechanical occlusal analysis'],
  },
  {
    number: '03',
    title: 'Stage 03 — Planning',
    description: 'Receive detailed clinical roadmaps, procedural timelines, and clear fee breakdowns tailored to your precise situation.',
    deliverables: ['Transparent clinical roadmap', 'Surgical guide stent CAD model', 'Iterative procedural schedule'],
  },
];

export default function DecisionArchitecture() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  return (
    <section id="featured" className="relative w-full bg-[#101419] py-20 lg:py-28">
      {/* Hairline grid background */}
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: Clinical CAD Diagnostic Display */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden bg-[#0A0F13] border border-[rgba(137,147,161,0.25)] p-6 shadow-2xl">
              {/* Top HUD Meta */}
              <div className="flex items-center justify-between font-mono text-xs text-[#8993A1] pb-4 border-b border-[#202832]">
                <span className="text-[#C7FF45] font-semibold">PATHWAY: OPTICAL_GUIDED</span>
                <span>PHASE: 0{activeStageIndex + 1} OF 03</span>
              </div>

              {/* Technical Graphical Simulation with Dynamic Wave Curves */}
              <div className="py-8 relative flex flex-col items-center justify-center">
                <svg className="w-full h-44 text-[#C7FF45]" fill="none" viewBox="0 0 320 120">
                  {/* Grid reference lines */}
                  <line x1="0" y1="60" x2="320" y2="60" stroke="#202832" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="160" y1="0" x2="160" y2="120" stroke="#202832" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Upper harmonic trajectory */}
                  <path
                    d={`M 10,60 Q ${80 + activeStageIndex * 20},${20 - activeStageIndex * 5} 160,60 T 310,60`}
                    fill="none"
                    stroke="#C7FF45"
                    strokeWidth="2.5"
                    className="transition-all duration-500"
                  />

                  {/* Lower reflected arc */}
                  <path
                    d={`M 10,60 Q ${80 + activeStageIndex * 20},${100 + activeStageIndex * 5} 160,60 T 310,60`}
                    fill="none"
                    stroke="#4B8DFF"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    className="transition-all duration-500"
                  />

                  {/* Calibrated node points */}
                  <circle cx="50" cy="40" r="4" fill="#C7FF45" className="animate-pulse" />
                  <circle cx="160" cy="60" r="4" fill="#4B8DFF" />
                  <circle cx="270" cy="78" r="4" fill="#F5F7FA" />

                  {/* Precision crosshair annotations */}
                  <line x1="42" y1="40" x2="58" y2="40" stroke="#C7FF45" strokeWidth="1" />
                  <line x1="50" y1="32" x2="50" y2="48" stroke="#C7FF45" strokeWidth="1" />
                </svg>

                <div className="w-full bg-[#181C21] rounded p-3 font-mono text-xs text-[#8993A1] flex justify-between items-center border border-[rgba(137,147,161,0.15)] mt-2">
                  <span>VOLUMETRIC RECONSTRUCTION</span>
                  <span className="text-[#C7FF45] font-semibold">TOLERANCE ±0.05MM</span>
                </div>
              </div>

              {/* Dynamic Deliverables for Active Stage */}
              <div className="pt-4 border-t border-[#202832]">
                <div className="font-mono text-[11px] text-[#4B8DFF] mb-2 uppercase tracking-wider">
                  PHASE 0{activeStageIndex + 1} VERIFIED DELIVERABLES:
                </div>
                <div className="space-y-1.5">
                  {STAGES[activeStageIndex].deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-mono text-xs text-[#F5F7FA]">
                      <Check className="w-3.5 h-3.5 text-[#C7FF45]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Column: 3 Linear Clinical Stages */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#C7FF45] uppercase">
              <span className="h-1.5 w-6 bg-[#C7FF45]" />
              DENTAL CARE // UNDERSTAND YOUR OPTIONS
            </div>

            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F5F7FA] leading-tight">
              TRANSPARENT DECISION ARCHITECTURE.
            </h2>

            <p className="font-['Inter'] text-base sm:text-lg text-[#8993A1] max-w-xl leading-relaxed">
              Explore relevant treatment options with a maxillofacial professional and understand every consideration before committing to procedural next steps.
            </p>

            {/* The 3 Sequential Interactive Stages */}
            <div className="relative space-y-4 pt-2">
              {/* Vertical progress connector line */}
              <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-[#202832]" />
              <div
                className="absolute left-4 top-6 w-0.5 bg-[#C7FF45] transition-all duration-300"
                style={{ height: `${(activeStageIndex / 2) * 80}%` }}
              />

              {STAGES.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <button
                    key={stage.number}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`w-full text-left relative flex items-start gap-5 p-5 rounded-xl transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#181C21] border border-[#C7FF45]/50 shadow-lg shadow-black/60'
                        : 'bg-[#14181E] border border-[rgba(137,147,161,0.15)] hover:bg-[#181C21]'
                    }`}
                  >
                    {/* Number Badge */}
                    <div
                      className={`z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#C7FF45] text-[#101419] shadow-[0_0_12px_rgba(199,255,69,0.7)]'
                          : 'bg-[#202832] text-[#8993A1]'
                      }`}
                    >
                      {stage.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4
                          className={`font-['Space_Grotesk'] text-lg uppercase font-semibold transition-colors ${
                            isActive ? 'text-[#F5F7FA]' : 'text-[#8993A1]'
                          }`}
                        >
                          {stage.title}
                        </h4>
                        {isActive && <ChevronRight className="w-4 h-4 text-[#C7FF45]" />}
                      </div>

                      <p className="font-['Inter'] text-sm text-[#8993A1] mt-1.5 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
