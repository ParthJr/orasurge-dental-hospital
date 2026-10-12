import { useState } from 'react';
import { ArrowUpRight, Phone, Shield, Sparkles, Activity, Wrench, Microscope, Info } from 'lucide-react';
import { TREATMENTS_DATA } from '../data/treatments';
import { TreatmentItem } from '../types';

interface ServicesMatrixProps {
  onSelectService: (serviceName: string) => void;
  onOpenDetails: (item: TreatmentItem) => void;
}

export default function ServicesMatrix({ onSelectService, onOpenDetails }: ServicesMatrixProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'diagnostic' | 'surgical' | 'general'>('all');

  const filteredItems = TREATMENTS_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'diagnostic') return item.id === 'checkups' || item.id === 'cosmetic';
    if (activeCategory === 'surgical') return item.id === 'implants' || item.id === 'restorative';
    if (activeCategory === 'general') return item.id === 'general' || item.id === 'emergency';
    return true;
  });

  const getIcon = (id: string) => {
    switch (id) {
      case 'checkups':
        return <Microscope className="w-6 h-6 text-[#4B8DFF]" />;
      case 'general':
        return <Shield className="w-6 h-6 text-[#C7FF45]" />;
      case 'cosmetic':
        return <Sparkles className="w-6 h-6 text-[#4B8DFF]" />;
      case 'implants':
        return <Activity className="w-6 h-6 text-[#C7FF45]" />;
      case 'restorative':
        return <Wrench className="w-6 h-6 text-[#4B8DFF]" />;
      case 'emergency':
        return <Phone className="w-6 h-6 text-[#FF6B6B]" />;
      default:
        return <Activity className="w-6 h-6 text-[#C7FF45]" />;
    }
  };

  return (
    <section id="treatments" className="relative w-full bg-[#F5F7FA] text-[#101419] py-20 lg:py-28">
      {/* Precision grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#101419_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E1E4EA]">
          <div>
            <div className="font-mono text-xs text-[#202832] font-semibold uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#101419]" />
              CARE OPTIONS // SPECIFICATION CATALOG
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#101419]">
              EXPLORE WHAT&apos;S POSSIBLE.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="max-w-md font-['Inter'] text-sm sm:text-base text-[#4A5568]">
              Engineered surgical and restorative pathways executed with high-fidelity digital workflow protocols.
            </p>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#E2E8F0] rounded-lg">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1 rounded text-xs font-['Rajdhani'] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#101419] text-[#C7FF45] shadow-sm'
                    : 'text-[#4A5568] hover:text-[#101419]'
                }`}
              >
                All (6)
              </button>
              <button
                onClick={() => setActiveCategory('diagnostic')}
                className={`px-3 py-1 rounded text-xs font-['Rajdhani'] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === 'diagnostic'
                    ? 'bg-[#101419] text-[#C7FF45] shadow-sm'
                    : 'text-[#4A5568] hover:text-[#101419]'
                }`}
              >
                Diagnostics
              </button>
              <button
                onClick={() => setActiveCategory('surgical')}
                className={`px-3 py-1 rounded text-xs font-['Rajdhani'] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === 'surgical'
                    ? 'bg-[#101419] text-[#C7FF45] shadow-sm'
                    : 'text-[#4A5568] hover:text-[#101419]'
                }`}
              >
                Surgical
              </button>
              <button
                onClick={() => setActiveCategory('general')}
                className={`px-3 py-1 rounded text-xs font-['Rajdhani'] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === 'general'
                    ? 'bg-[#101419] text-[#C7FF45] shadow-sm'
                    : 'text-[#4A5568] hover:text-[#101419]'
                }`}
              >
                General &amp; Triage
              </button>
            </div>
          </div>
        </div>

        {/* 6 Modular Bento Discovery Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isImplantAnchor = item.id === 'implants';
            const isEmergency = item.id === 'emergency';

            return (
              <div
                key={item.id}
                className={`group relative flex flex-col justify-between rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                  isImplantAnchor
                    ? 'bg-[#101419] text-[#F5F7FA] shadow-xl border border-[#202832] ring-1 ring-[#C7FF45]/30'
                    : isEmergency
                    ? 'bg-[#FFFFFF] text-[#101419] shadow-md border border-[#FED7D7]'
                    : 'bg-[#FFFFFF] text-[#101419] shadow-md border border-[#E2E8F0]'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-3 border-b border-black/5 dark:border-white/10">
                    <span
                      className={`font-mono text-xs font-semibold ${
                        isImplantAnchor
                          ? 'text-[#C7FF45]'
                          : isEmergency
                          ? 'text-[#E53E3E]'
                          : 'text-[#4B8DFF]'
                      }`}
                    >
                      {item.modCode}
                    </span>
                    <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5">
                      {getIcon(item.id)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-['Space_Grotesk'] text-xl font-bold uppercase mb-2 ${
                      isImplantAnchor ? 'text-[#F5F7FA]' : 'text-[#101419]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-['Inter'] text-sm leading-relaxed mb-6 ${
                      isImplantAnchor ? 'text-[#8993A1]' : 'text-[#4A5568]'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Technical Tags */}
                  <div className="mb-6 flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded px-2 py-0.5 font-medium ${
                          isImplantAnchor
                            ? 'bg-[#202832] text-[#C7FF45]'
                            : isEmergency
                            ? 'bg-[#FFF5F5] text-[#C53030]'
                            : 'bg-[#F1F5F9] text-[#475569]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between pt-3 border-t border-black/5 dark:border-white/10">
                    {/* View Clinical Details Trigger */}
                    <button
                      onClick={() => onOpenDetails(item)}
                      className={`inline-flex items-center gap-1.5 font-['Rajdhani'] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                        isImplantAnchor
                          ? 'text-[#8993A1] hover:text-[#C7FF45]'
                          : 'text-[#718096] hover:text-[#101419]'
                      }`}
                      title="View Clinical Protocol Details"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Protocol Specs</span>
                    </button>

                    {/* Primary Card CTA */}
                    {isEmergency ? (
                      <a
                        href="tel:09825198854"
                        className="inline-flex items-center gap-1 font-['Rajdhani'] font-bold text-xs uppercase tracking-wider text-[#E53E3E] hover:underline"
                      >
                        <span>Emergency Call</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <button
                        onClick={() => onSelectService(item.title)}
                        className={`inline-flex items-center gap-1 font-['Rajdhani'] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                          isImplantAnchor
                            ? 'text-[#C7FF45] hover:underline'
                            : 'text-[#0052CC] hover:underline'
                        }`}
                      >
                        <span>{item.actionLabel}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
