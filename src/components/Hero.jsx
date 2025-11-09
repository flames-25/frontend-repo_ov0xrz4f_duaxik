import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-sky-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-semibold">
              <CheckCircle2 className="h-4 w-4" /> Vendor Compliance Platform
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Automate vendor KYC & compliance in minutes
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Verify GST, PAN, Aadhaar, Passport, DIN and CIN in one place. Real-time checks, audit-ready logs, and a dashboard built for scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#signup"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-indigo-700"
              >
                Get started free <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
              >
                Explore features
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-slate-600">
              {["GST", "PAN", "Aadhaar", "Passport"].map((label) => (
                <div key={label} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-center">
                  {label} Verified
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 p-[1px] shadow-lg">
              <div className="h-full w-full rounded-[11px] bg-white p-4">
                <div className="grid grid-cols-2 gap-3">
                  {["Verify GST", "Verify PAN", "Verify Aadhaar", "Verify Passport", "Verify DIN", "Verify CIN"].map((item) => (
                    <button key={item} className="rounded-lg border border-slate-200 px-3 py-3 text-left hover:border-indigo-300 hover:shadow-sm">
                      <span className="block text-sm font-semibold text-slate-900">{item}</span>
                      <span className="block text-xs text-slate-500">Instant API checks</span>
                    </button>
                  ))}
                </div>
                <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
                  Live audit log: Vendor ABC PAN verified successfully.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
