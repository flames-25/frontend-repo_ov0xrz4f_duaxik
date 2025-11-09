import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <div className="mt-4 text-slate-700">{children}</div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Section id="pricing" title="Pricing">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              name: "Starter",
              price: "$0",
              features: ["100 verifications/mo", "Basic dashboard", "Email support"],
            }, {
              name: "Growth",
              price: "$99",
              features: ["10k verifications/mo", "Advanced rules", "Priority support"],
            }, {
              name: "Enterprise",
              price: "Custom",
              features: ["Unlimited", "SLA & audit logs", "Dedicated success"],
            }].map((tier) => (
              <div key={tier.name} className="rounded-xl border border-slate-200 p-5 hover:shadow-sm">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <div className="mt-2 text-3xl font-bold">{tier.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-5 w-full rounded-md bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700">Choose plan</button>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <form className="grid gap-4 max-w-2xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="rounded-md border border-slate-300 px-3 py-2" />
              <input type="email" required placeholder="Email" className="rounded-md border border-slate-300 px-3 py-2" />
            </div>
            <input placeholder="Company" className="rounded-md border border-slate-300 px-3 py-2" />
            <textarea required rows={5} placeholder="How can we help?" className="rounded-md border border-slate-300 px-3 py-2" />
            <button className="rounded-md bg-slate-900 text-white px-4 py-2 w-fit">Send message</button>
          </form>
        </Section>

        <Section id="login" title="Login">
          <form className="grid gap-3 max-w-md">
            <input type="email" placeholder="Email" className="rounded-md border border-slate-300 px-3 py-2" />
            <input type="password" placeholder="Password" className="rounded-md border border-slate-300 px-3 py-2" />
            <div className="flex items-center justify-between text-sm">
              <a href="#forgot" className="text-indigo-600 hover:underline">Forgot password?</a>
            </div>
            <button className="rounded-md bg-indigo-600 text-white px-4 py-2">Sign in</button>
          </form>
        </Section>

        <Section id="signup" title="Create account">
          <form className="grid gap-3 max-w-md">
            <input placeholder="Full name" className="rounded-md border border-slate-300 px-3 py-2" />
            <input type="email" placeholder="Work email" className="rounded-md border border-slate-300 px-3 py-2" />
            <input type="password" placeholder="Password" className="rounded-md border border-slate-300 px-3 py-2" />
            <button className="rounded-md bg-slate-900 text-white px-4 py-2">Create account</button>
          </form>
        </Section>

        <Section id="faq" title="Help Center / FAQ">
          <div className="max-w-3xl">
            {[{
              q: "How fast are verifications?",
              a: "Most checks complete in under 1 second with clear results.",
            }, {
              q: "Do you store sensitive IDs?",
              a: "We tokenize and redact sensitive fields. Full auditability without exposure.",
            }, {
              q: "Can I export logs?",
              a: "Yes, exports are available in CSV and JSON formats.",
            }].map(({ q, a }) => (
              <details key={q} className="group border-b border-slate-200 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{q}</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
