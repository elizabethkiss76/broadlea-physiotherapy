/**
 * Broadlea Physiotherapy — Navbar
 * Aesthetic: Peaceful Rural, Botanical, Refined
 * Sticky top nav with logo, navigation links, and CTA button.
 * Deep Navy, Sage Green, Warm Cream palette.
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO = "https://raw.githubusercontent.com/elizabethkiss76/broadlea-physiotherapy/main/client/public/LogoNowording.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[oklch(0.92_0.005_80)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 py-3">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group"
            >
              <img
                src={LOGO}
                alt="Broadlea Physiotherapy"
                className="w-10 h-10 group-hover:opacity-80 transition-opacity duration-200"
              />
              <div className="text-left">
                <div className="font-display text-base font-semibold text-[oklch(0.22_0.05_240)] leading-tight">
                  Broadlea
                </div>
                <div className="font-body text-xs font-medium text-[oklch(0.66_0.04_165)] tracking-widest uppercase leading-tight">
                  Physiotherapy
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-body text-sm font-600 text-[oklch(0.35_0.03_240)] hover:text-[oklch(0.22_0.05_240)] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[oklch(0.66_0.04_165)] group-hover:w-full transition-all duration-300 rounded-full" />
                </button>
              ))}
            </nav>

            {/* CTA + Phone */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+441234567890"
                className="flex items-center gap-2 text-sm font-semibold text-[oklch(0.35_0.03_240)] hover:text-[oklch(0.22_0.05_240)] transition-colors duration-200"
              >
                <Phone size={15} />
                <span>07539 038356</span>
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary text-sm px-5 py-2.5"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-[oklch(0.22_0.05_240)] hover:bg-[oklch(0.92_0.005_80)] transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-body text-base font-600 text-[oklch(0.22_0.05_240)] hover:text-[oklch(0.66_0.04_165)] hover:bg-[oklch(0.92_0.005_80)] px-4 py-3 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:+441234567890"
                className="flex items-center gap-2 text-sm font-semibold text-[oklch(0.35_0.03_240)] px-4 py-3"
              >
                <Phone size={15} />
                <span>07539 038356</span>
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary text-sm w-full text-center"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
