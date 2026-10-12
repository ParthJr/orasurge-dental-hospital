export default function SectorMetaStrip() {
  return (
    <div className="w-full border-b border-[#202832] bg-[#101419]/90 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-2 text-[11px] font-mono tracking-wider text-[#8993A1]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[#C7FF45] shadow-[0_0_8px_rgba(199,255,69,0.8)] animate-pulse" />
          <span className="text-[#F5F7FA] font-semibold uppercase">PORTAL_CALIBRATION // SEC_01</span>
          <span className="text-[#4B8DFF] hidden sm:inline">| LOC: KUDASAN_GANDHINAGAR</span>
        </div>
        
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-[#C7FF45] font-medium hidden md:inline">PRECISION · CARE · CLARITY</span>
          <span className="text-[#8993A1]">LAT 23.1815° N // LON 72.6369° E</span>
        </div>
      </div>
    </div>
  );
}
