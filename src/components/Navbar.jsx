import { Menu, Shield, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
              <Shield className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold text-slate-900">ComplyVend</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#login"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
            >
              <LogIn className="h-4 w-4" /> Login
            </a>
            <a
              href="#signup"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800 shadow-sm"
            >
              <UserPlus className="h-4 w-4" /> Sign up
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300"
            onClick={() => setOpen((o) => !o)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a
                  href="#login"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-slate-700"
                >
                  <LogIn className="h-4 w-4" /> Login
                </a>
                <a
                  href="#signup"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2"
                >
                  <UserPlus className="h-4 w-4" /> Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
