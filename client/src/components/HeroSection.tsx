/**
 * Broadlea Physiotherapy — Hero Section
 * Aesthetic: Peaceful Rural, Botanical, Refined
 * Split layout: bold text left, hero image right.
 * Warm cream background, deep navy headings, sage green accents.
 */
import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663711345795/U5NbPrg7hSLwhb4ERLGAyh/hero-clinic-interior-HnbWpqzi6XewxoQgKohaDB.webp";

const highlights = [
  "Chartered Physiotherapist (HCPC Registered)",
  "Personalised, thorough treatment",
  "Peaceful rural setting",
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[oklch(0.975_0.008_80)] pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center py-12 lg:py-0">
            <div className="fade-up">
              <span className="section-tag mb-4 block">
                <span className="w-8 h-px bg-[oklch(0.66_0.04_165)] inline-block" />
                Caring, Evidence-Based Physiotherapy
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[oklch(0.22_0.05_240)] leading-[1.05] mb-6 fade-up delay-100">
              Restore.{" "}
              <span className="italic font-light text-[oklch(0.66_0.04_165)]">Move.</span>{" "}
              <span className="italic font-light">Thrive.</span>
            </h1>

            <p className="font-body text-lg text-[oklch(0.45_0.02_240)] leading-relaxed mb-8 max-w-lg fade-up delay-200">
              Physiotherapy in a peaceful rural setting. Personalised assessment and treatment designed around you — your symptoms, your lifestyle, and your goals.
            </p>

            <ul className="flex flex-col gap-3 mb-10 fade-up delay-300">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[oklch(0.35_0.03_240)]">
                  <CheckCircle2 size={18} className="text-[oklch(0.66_0.04_165)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 fade-up delay-400">
              <button
                onClick={scrollToContact}
                className="btn-primary flex items-center gap-2 text-base px-7 py-3.5 shadow-lg shadow-[oklch(0.22_0.05_240)]/25"
              >
                Book Your Appointment
                <ArrowRight size={18} />
              </button>
              <button
                onClick={scrollToServices}
                className="btn-outline text-base px-7 py-3.5"
              >
                Our Services
              </button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-[oklch(0.92_0.005_80)] fade-up delay-500">
              {[
                { value: "26+", label: "Years Experience" },
                { value: "Chartered", label: "Physiotherapist" },
                { value: "NHS", label: "Qualified" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-3xl font-bold text-[oklch(0.22_0.05_240)]">
                    {stat.value}
                  </span>
                  <span className="font-body text-xs text-[oklch(0.52_0.02_240)] mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative flex items-center justify-center lg:justify-end fade-up delay-200">
            <div className="relative z-10 w-full max-w-lg">
              <img
                src={HERO_IMAGE}
                alt="Elizabeth Kiss providing physiotherapy treatment in a peaceful rural clinic"
                className="w-full h-[500px] lg:h-[600px] object-cover shadow-2xl rounded-2xl"
                loading="eager"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[oklch(0.92_0.005_80)] flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-[oklch(0.22_0.05_240)]">
                    Chartered
                  </div>
                  <div className="font-body text-xs text-[oklch(0.52_0.02_240)]">
                    HCPC Registered
                  </div>
                </div>
              </div>

              {/* Availability badge */}
              <div className="absolute -top-4 -right-4 bg-[oklch(0.66_0.04_165)] text-white rounded-2xl shadow-xl px-4 py-3">
                <div className="font-body text-xs font-semibold">Now Accepting</div>
                <div className="font-display text-sm font-bold">New Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
