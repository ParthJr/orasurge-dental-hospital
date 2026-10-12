import { X, CheckCircle, Clock, Layers, ArrowRight } from 'lucide-react';
import { TreatmentItem } from '../types';

interface TreatmentModalProps {
  treatment: TreatmentItem | null;
  onClose: () => void;
  onBookTreatment: (title: string) => void;
}

export default function TreatmentModal({
  treatment,
  onClose,
  onBookTreatment,
}: TreatmentModalProps) {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#14181E] border border-[rgba(137,147,161,0.3)] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Reticle borders */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C7FF45]/50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#C7FF45]/50 pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#202832]">
          <div>
            <div className="font-mono text-xs text-[#C7FF45] font-semibold tracking-wider">
              {treatment.modCode}
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-[#F5F7FA] mt-1">
              {treatment.title}
            </h3>
            <span className="font-['Rajdhani'] text-xs font-semibold uppercase text-[#8993A1] tracking-wider">
              Category: {treatment.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#202832] text-[#8993A1] hover:text-[#F5F7FA] hover:bg-[#2A3542] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto py-5 space-y-6 pr-1">
          {/* Overview */}
          <div>
            <h4 className="font-mono text-xs text-[#8993A1] uppercase tracking-wider mb-2">
              CLINICAL OVERVIEW
            </h4>
            <p className="font-['Inter'] text-sm sm:text-base text-[#F5F7FA] leading-relaxed">
              {treatment.fullDetails.overview}
            </p>
          </div>

          {/* Suitable For */}
          <div className="p-4 rounded-xl bg-[#101419] border border-[rgba(137,147,161,0.2)]">
            <h4 className="font-mono text-xs text-[#4B8DFF] uppercase tracking-wider mb-1">
              SUITABLE CLINICAL INDICATIONS
            </h4>
            <p className="font-['Inter'] text-sm text-[#8993A1]">
              {treatment.fullDetails.suitableFor}
            </p>
          </div>

          {/* Procedural Phases */}
          <div>
            <h4 className="font-mono text-xs text-[#8993A1] uppercase tracking-wider mb-3">
              PROCEDURAL PHASES
            </h4>
            <div className="space-y-2">
              {treatment.fullDetails.clinicalPhases.map((phase, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#181C21] border border-[rgba(137,147,161,0.15)] text-sm font-['Inter'] text-[#F5F7FA]"
                >
                  <span className="font-mono text-xs text-[#C7FF45] font-bold mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span>{phase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic Equipment & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#181C21] border border-[rgba(137,147,161,0.15)]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C7FF45] mb-2">
                <Layers className="w-4 h-4" />
                <span>DIAGNOSTIC EQUIPMENT</span>
              </div>
              <ul className="text-xs font-['Inter'] text-[#8993A1] space-y-1.5">
                {treatment.fullDetails.diagnosticEquipment.map((eq, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C7FF45] shrink-0" />
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#181C21] border border-[rgba(137,147,161,0.15)]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#4B8DFF] mb-2">
                <Clock className="w-4 h-4" />
                <span>TYPICAL TIMELINE</span>
              </div>
              <p className="text-xs font-['Inter'] text-[#F5F7FA] mt-1">
                {treatment.fullDetails.typicalDuration}
              </p>
              <p className="text-[11px] font-mono text-[#8993A1] mt-2">
                * Timelines are personalized after initial volumetric consultation.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#202832] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded text-xs font-['Rajdhani'] font-semibold uppercase tracking-wider text-[#8993A1] hover:text-[#F5F7FA] transition-colors"
          >
            Close Specification
          </button>

          <button
            onClick={() => onBookTreatment(treatment.title)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#C7FF45] text-[#101419] font-['Rajdhani'] font-bold text-xs uppercase tracking-wider shadow-[0_0_14px_rgba(199,255,69,0.35)] hover:shadow-[0_0_20px_rgba(199,255,69,0.55)] transition-all cursor-pointer"
          >
            <span>Select for Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
