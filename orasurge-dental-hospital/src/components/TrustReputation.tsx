import { Star, ExternalLink, ShieldCheck } from 'lucide-react';

export default function TrustReputation() {
  return (
    <section className="relative w-full bg-[#F5F7FA] text-[#101419] py-16 lg:py-20 border-b border-[#E1E4EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Reputation Rating Metric Display */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            {/* The 5.0 Rating Block */}
            <div className="bg-[#101419] text-[#F5F7FA] p-7 rounded-2xl shadow-xl flex flex-col items-center justify-center min-w-[170px] border border-[#202832]">
              <span className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-bold leading-none text-[#C7FF45]">
                5.0
              </span>
              <span className="font-mono text-xs text-[#8993A1] mt-2 tracking-wider">
                OUT OF 5.0
              </span>
              <div className="mt-2 flex text-[#C7FF45] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C7FF45]" />
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="font-['Rajdhani'] font-bold text-xs uppercase tracking-widest text-[#202832] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0052CC]" />
                <span>AUTHENTIC CLINICAL REPUTATION</span>
              </div>

              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl uppercase font-bold text-[#101419]">
                4 VERIFIED GOOGLE REVIEWS
              </h3>

              <p className="font-['Inter'] text-sm sm:text-base text-[#4A5568] max-w-lg leading-relaxed">
                Every review represents an authentic clinical encounter at our Kudasan facility. We believe in uncompromised medical transparency with zero fabricated metrics or artificial ratings.
              </p>
            </div>
          </div>

          {/* External Verification Button */}
          <div>
            <a
              href="https://maps.google.com/?q=The+Landmark+Kudasan+Gandhinagar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#101419] px-6 py-3.5 font-['Rajdhani'] font-bold text-sm uppercase tracking-wider text-[#F5F7FA] shadow-lg hover:bg-[#202832] hover:text-[#C7FF45] transition-all"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-[#C7FF45]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
