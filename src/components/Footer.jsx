export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-slate-900">Product</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#features" className="hover:text-slate-900">Features</a></li>
              <li><a href="#pricing" className="hover:text-slate-900">Pricing</a></li>
              <li><a href="#faq" className="hover:text-slate-900">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Verify</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#verify-gst" className="hover:text-slate-900">GST</a></li>
              <li><a href="#verify-pan" className="hover:text-slate-900">PAN</a></li>
              <li><a href="#verify-aadhaar" className="hover:text-slate-900">Aadhaar</a></li>
              <li><a href="#verify-passport" className="hover:text-slate-900">Passport</a></li>
              <li><a href="#verify-din" className="hover:text-slate-900">DIN</a></li>
              <li><a href="#verify-cin" className="hover:text-slate-900">CIN</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#privacy" className="hover:text-slate-900">Privacy</a></li>
              <li><a href="#terms" className="hover:text-slate-900">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Subscribe</h4>
            <p className="mt-3 text-slate-600">Get updates and compliance tips.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="Email address" className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="rounded-md bg-slate-900 text-white px-3 py-2 text-sm">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} ComplyVend. All rights reserved.</div>
      </div>
    </footer>
  );
}
