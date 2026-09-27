/**
 * Broadlea Physiotherapy — Team Section
 * Aesthetic: Peaceful Rural, Botanical, Refined
 * Elizabeth Kiss solo practice — personalised, continuity of care.
 */
import { useEffect, useRef } from "react";

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[oklch(0.975_0.008_80)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mb-16">
          <span className="section-tag mb-3 fade-up">
            <span className="w-8 h-px bg-[oklch(0.66_0.04_165)] inline-block" />
            Your Therapist
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[oklch(0.22_0.05_240)] leading-tight mt-3 mb-5 fade-up delay-100">
            Meet{" "}
            <span className="italic font-light text-[oklch(0.66_0.04_165)]">
              Elizabeth
            </span>
          </h2>
          <p className="font-body text-lg text-[oklch(0.45_0.02_240)] leading-relaxed fade-up delay-200">
            Broadlea is a solo practice — you'll always see Elizabeth, ensuring continuity of care and a consistent therapeutic relationship.
          </p>
        </div>

        <div className="flex justify-center fade-up delay-300">
          <div className="max-w-sm text-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[oklch(0.92_0.005_80)] to-[oklch(0.85_0.01_240)] flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden">
              <img
                src="#"
                alt="Elizabeth Kiss"
                className="w-full h-full object-cover hidden"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                }}
              />
              <span className="font-display text-5xl font-bold text-[oklch(0.22_0.05_240)]/20">
                EK
              </span>
            </div>
            <p className="font-body text-xs text-[oklch(0.52_0.02_240)] mb-4 italic">
              Photo coming soon
            </p>
            <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.05_240)] mb-1">
              Elizabeth Kiss
            </h3>
            <p className="font-body text-sm font-semibold text-[oklch(0.66_0.04_165)] uppercase tracking-wider mb-4">
              Chartered Physiotherapist
            </p>
            <p className="font-body text-base text-[oklch(0.52_0.02_240)] leading-relaxed mb-6">
              BSc (Hons) Physiotherapy — University of Szeged, Hungary (2000). MSc Advanced Physiotherapy Practice — University of Sheffield (2019). MCSP, HCPC Registered. 26 years of clinical experience in NHS MSK outpatient settings and evidence-based physiotherapy.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center justify-center gap-2 text-[oklch(0.52_0.02_240)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.66_0.04_165)]" />
                Musculoskeletal Physiotherapy
              </div>
              <div className="flex items-center justify-center gap-2 text-[oklch(0.52_0.02_240)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.66_0.04_165)]" />
                Sports Injury Management
              </div>
              <div className="flex items-center justify-center gap-2 text-[oklch(0.52_0.02_240)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.66_0.04_165)]" />
                Rehabilitation & Recovery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
