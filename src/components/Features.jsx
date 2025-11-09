import { ShieldCheck, Zap, Database, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted verifications",
    desc: "Accurate government data validations for GST, PAN, Aadhaar, Passport, DIN and CIN.",
  },
  {
    icon: Zap,
    title: "Real-time decisions",
    desc: "Sub-second responses with clear pass/fail signals and reason codes.",
  },
  {
    icon: Database,
    title: "Audit-ready logs",
    desc: "Immutable trails with timestamps and source references for every check.",
  },
  {
    icon: LayoutDashboard,
    title: "Unified dashboard",
    desc: "Manage vendors, view history, export reports and automate policy rules.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Everything you need to stay compliant</h2>
          <p className="mt-2 text-slate-600">Built for procurement, finance and risk teams.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-5 hover:shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
