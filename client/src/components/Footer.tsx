/**
 * Broadlea Physiotherapy — Footer
 * Aesthetic: Peaceful Rural, Botanical, Refined
 * Warm cream background with deep navy text.
 */
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const LOGO = "https://raw.githubusercontent.com/elizabethkiss76/broadlea-physiotherapy/main/client/public/Screenshot%202026-09-27%20at%2011.53.39.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.975_0.008_80)] border-t border-[oklch(0.92_0.005_80)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={LOGO}
                alt="Broadlea Physiotherapy"
                className="w-10 h-10"
              />
              <div>
                <div className="font-display text-base font-semibold text-[oklch(0.22_0.05_240)]">
                  Broadlea
                </div>
                <div className="font-body text-xs font-medium text-[oklch(0.66_0.04_165)] tracking-widest uppercase">
                  Physiotherapy
                </div>
              </div>
            </div>
            <p className="font-body text-sm text-[oklch(0.52_0.02_240)] leading-relaxed">
              Caring, evidence-based physiotherapy in a peaceful rural setting.
            </p>
            <div className="font-display text-xs font-semibold text-[oklch(0.66_0.04_165)] tracking-widest uppercase mt-3">
              RESTORE • MOVE • THRIVE
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-[oklch(0.22_0.05_240)] mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[oklch(0.52_0.02_240)] hover:text-[oklch(0.22_0.05_240)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold text-[oklch(0.22_0.05_240)] mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Assessment",
                "Treatment",
                "Rehabilitation",
                "Sports Injuries",
              ].map((service) => (
                <li key={service}>
                  <span className="font-body text-sm text-[oklch(0.52_0.02_240)]">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-[oklch(0.22_0.05_240)] mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+441234567890"
                  className="flex items-center gap-2 font-body text-sm text-[oklch(0.52_0.02_240)] hover:text-[oklch(0.22_0.05_240)] transition-colors duration-200"
                >
                  <Phone size={14} />
                  07539 038356
                </a>
              </li>
              <li>
                <a
                  href="mailto:elizabeth@broadleaphysiotherapy.com"
                  className="flex items-center gap-2 font-body text-sm text-[oklch(0.52_0.02_240)] hover:text-[oklch(0.22_0.05_240)] transition-colors duration-200"
                >
                  <Mail size={14} />
                  elizabeth@broadleaphysiotherapy.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 font-body text-sm text-[oklch(0.52_0.02_240)]">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                  <span>North Green, East Drayton, DN22 0LF</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[oklch(0.92_0.005_80)] mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[oklch(0.62_0.04_240)] text-center sm:text-left">
            © {currentYear} Broadlea Physiotherapy. All rights reserved.
          </p>
          <p className="font-body text-xs text-[oklch(0.62_0.04_240)] flex items-center gap-1 justify-center">
            Made with <Heart size={12} className="text-[oklch(0.66_0.04_165)]" /> for your wellbeing
          </p>
        </div>
      </div>
    </footer>
  );
}
