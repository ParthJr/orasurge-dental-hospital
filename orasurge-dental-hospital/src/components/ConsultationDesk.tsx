import { useState, FormEvent } from 'react';
import { Send, Clock, Lock, PhoneCall, CheckCircle, RotateCcw, AlertCircle } from 'lucide-react';
import { TREATMENTS_DATA } from '../data/treatments';

interface ConsultationDeskProps {
  selectedServicePreset?: string;
}

export default function ConsultationDesk({ selectedServicePreset }: ConsultationDeskProps) {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [careCategory, setCareCategory] = useState(
    selectedServicePreset || 'Dental Check-ups'
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 01:00 PM)');
  const [notes, setNotes] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // If selectedServicePreset changes from outside (e.g., clicking on a card)
  if (selectedServicePreset && selectedServicePreset !== careCategory && !isSuccess) {
    setCareCategory(selectedServicePreset);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!mobileNumber.trim() || mobileNumber.replace(/\D/g, '').length < 8) {
      setErrorMsg('Please enter a valid mobile number (at least 8-10 digits).');
      return;
    }
    if (!careCategory) {
      setErrorMsg('Please select a clinical care pathway.');
      return;
    }
    if (!privacyConsent) {
      setErrorMsg('Please accept the communication consent to proceed.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clinical transmission
    setTimeout(() => {
      const generatedId = `ORA-${Math.floor(1000 + Math.random() * 9000)}`;
      setReceiptNumber(generatedId);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setFullName('');
    setMobileNumber('');
    setPreferredDate('');
    setNotes('');
    setPrivacyConsent(false);
    setIsSuccess(false);
    setErrorMsg('');
  };

  return (
    <section id="contact" className="relative w-full bg-[#101419] py-20 lg:py-28 border-t border-[#202832]">
      {/* Background CAD grid */}
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Explanatory Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs tracking-widest text-[#C7FF45] uppercase flex items-center gap-2">
              <span className="h-1.5 w-6 bg-[#C7FF45]" />
              CLINICAL DISPATCH // APPOINTMENT DESK
            </div>

            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F5F7FA] leading-tight">
              LET&apos;S PLAN YOUR NEXT STEP.
            </h2>

            <p className="font-['Inter'] text-base sm:text-lg text-[#8993A1] leading-relaxed">
              Send a consultation request and let the hospital clinical team help you understand your options, scheduling availability, and diagnostic prerequisites.
            </p>

            {/* Reassurance Metadata Strip */}
            <div className="pt-4 space-y-3.5 font-mono text-xs text-[#8993A1]">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C7FF45] shrink-0" />
                <span>Average response window: Under 2 business hours</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-[#C7FF45] shrink-0" />
                <span>Patient confidentiality strictly protected</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#4B8DFF] shrink-0" />
                <span>Direct Emergency Desk: 098251 98854</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#14181E] border border-[rgba(137,147,161,0.15)] text-xs font-mono text-[#8993A1]">
              <span className="text-[#C7FF45] font-semibold block mb-1">CLINICAL NOTICE:</span>
              Consultation requests are evaluated by the dental team prior to confirmation. In case of acute pain or facial trauma, use the direct phone line.
            </div>
          </div>

          {/* Right Interactive Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-[#14181E] p-6 sm:p-10 rounded-2xl border border-[rgba(137,147,161,0.25)] shadow-2xl relative overflow-hidden">
              {/* Fine Lime Reticle Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C7FF45]/40 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#C7FF45]/40 pointer-events-none" />

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3 rounded bg-red-950/40 border border-red-500/40 flex items-center gap-2 text-red-200 text-xs font-mono">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block font-['Rajdhani'] font-bold text-xs uppercase tracking-wider text-[#F5F7FA] mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full bg-[#101419] text-[#F5F7FA] px-4 py-3 rounded border border-[rgba(137,147,161,0.25)] font-['Inter'] text-sm placeholder:text-[#8993A1]/40 focus:outline-none focus:border-[#C7FF45] focus:ring-1 focus:ring-[#C7FF45] transition-all"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label
                        htmlFor="mobileNumber"
                        className="block font-['Rajdhani'] font-bold text-xs uppercase tracking-wider text-[#F5F7FA] mb-2"
                      >
                        Mobile Number *
                      </label>
                      <input
                        id="mobileNumber"
                        type="tel"
                        required
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="e.g. 098251 XXXXX"
                        className="w-full bg-[#101419] text-[#F5F7FA] px-4 py-3 rounded border border-[rgba(137,147,161,0.25)] font-['Inter'] text-sm placeholder:text-[#8993A1]/40 focus:outline-none focus:border-[#C7FF45] focus:ring-1 focus:ring-[#C7FF45] transition-all"
                      />
                    </div>
                  </div>

                  {/* Clinical Care Category Dropdown */}
                  <div>
                    <label
                      htmlFor="careCategory"
                      className="block font-['Rajdhani'] font-bold text-xs uppercase tracking-wider text-[#F5F7FA] mb-2"
                    >
                      Clinical Care Category *
                    </label>
                    <select
                      id="careCategory"
                      required
                      value={careCategory}
                      onChange={(e) => setCareCategory(e.target.value)}
                      className="w-full bg-[#101419] text-[#F5F7FA] px-4 py-3 rounded border border-[rgba(137,147,161,0.25)] font-['Inter'] text-sm focus:outline-none focus:border-[#C7FF45] focus:ring-1 focus:ring-[#C7FF45] transition-all cursor-pointer"
                    >
                      {TREATMENTS_DATA.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title} ({t.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Preferred Date */}
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block font-['Rajdhani'] font-bold text-xs uppercase tracking-wider text-[#F5F7FA] mb-2"
                      >
                        Preferred Date
                      </label>
                      <input
                        id="preferredDate"
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full bg-[#101419] text-[#F5F7FA] px-4 py-3 rounded border border-[rgba(137,147,161,0.25)] font-['Inter'] text-sm focus:outline-none focus:border-[#C7FF45] focus:ring-1 focus:ring-[#C7FF45] transition-all"
                      />
                    </div>

                    {/* Preferred Time Window */}
                    <div>
                      <label
                        htmlFor="preferredTime"
                        className="block font-['Rajdhani'] font-bold text-xs uppercase tracking-wider text-[#F5F7FA] mb-2"
                      >
                        Preferred Time Window
                      </label>
                      <select
                        id="preferredTime"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full bg-[#101419] text-[#F5F7FA] px-4 py-3 rounded border border-[rgba(137,147,161,0.25)] font-['Inter'] text-sm focus:outline-none focus:border-[#C7FF45] focus:ring-1 focus:ring-[#C7FF45] transition-all cursor-pointer"
                      >
                        <option value="Morning (10:00 AM - 01:00 PM)">
                          Morning (10:00 AM - 01:00 PM)
                        </option>
                        <option value="Afternoon (02:00 PM - 05:00 PM)">
                          Afternoon (02:00 PM - 05:00 PM)
                        </option>
                        <option value="Evening (05:00 PM - 08:30 PM)">
                          Evening (05:00 PM - 08:30 PM)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Clinical Notes */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block font-['Rajdhani'] font-bold text-xs uppercase tracking-wider text-[#F5F7FA] mb-2"
                    >
                      Brief Medical Summary or Questions (Optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Specify any active symptoms, tooth quadrant, or prior treatments..."
                      className="w-full bg-[#101419] text-[#F5F7FA] px-4 py-3 rounded border border-[rgba(137,147,161,0.25)] font-['Inter'] text-sm placeholder:text-[#8993A1]/40 focus:outline-none focus:border-[#C7FF45] focus:ring-1 focus:ring-[#C7FF45] transition-all resize-none"
                    />
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="privacyConsent"
                      type="checkbox"
                      required
                      checked={privacyConsent}
                      onChange={(e) => setPrivacyConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded bg-[#101419] border border-[rgba(137,147,161,0.4)] accent-[#C7FF45] focus:ring-0 cursor-pointer"
                    />
                    <label
                      htmlFor="privacyConsent"
                      className="font-['Inter'] text-xs text-[#8993A1] leading-relaxed cursor-pointer"
                    >
                      I consent to Orasurge Dental Hospital contacting me via phone or messaging regarding this consultation request.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded bg-[#C7FF45] py-4 font-['Rajdhani'] font-bold text-sm uppercase tracking-wider text-[#101419] shadow-[0_0_16px_rgba(199,255,69,0.35)] hover:shadow-[0_0_24px_rgba(199,255,69,0.55)] hover:bg-[#D4FF66] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span>
                      {isSubmitting ? 'TRANSMITTING TELEMETRY...' : 'Transmit Consultation Request'}
                    </span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* Success State with Dispatch Receipt */
                <div className="flex flex-col items-center text-center space-y-6 py-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C7FF45] text-[#101419] shadow-[0_0_24px_rgba(199,255,69,0.7)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-[#F5F7FA]">
                      Request Dispatched
                    </h3>
                    <p className="font-['Inter'] text-sm text-[#8993A1] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#F5F7FA] font-semibold">{fullName}</span>. Your consultation request for &ldquo;<span className="text-[#C7FF45]">{careCategory}</span>&rdquo; has been registered. The clinical team will verify operatory scheduling and contact you directly.
                    </p>
                  </div>

                  {/* Digital Receipt Card */}
                  <div className="w-full max-w-md rounded-xl bg-[#101419] border border-[rgba(137,147,161,0.25)] p-5 font-mono text-xs text-[#8993A1] text-left space-y-2">
                    <div className="text-[#C7FF45] font-bold text-sm pb-1 border-b border-[#202832]">
                      DISPATCH RECEIPT: #{receiptNumber}
                    </div>
                    <div className="flex justify-between">
                      <span>STATUS:</span>
                      <span className="text-[#F5F7FA]">QUEUED // CLINICAL COORDINATOR</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CONTACT:</span>
                      <span className="text-[#F5F7FA]">{mobileNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PREFERRED TIME:</span>
                      <span className="text-[#F5F7FA]">{preferredTime}</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-[#202832] text-[#4B8DFF]">
                      <span>EMERGENCY DESK:</span>
                      <span>098251 98854</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 font-['Rajdhani'] font-bold text-xs uppercase tracking-wider text-[#C7FF45] hover:underline cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Request</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
