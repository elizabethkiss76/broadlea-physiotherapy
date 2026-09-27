/**
 * Broadlea Physiotherapy — About Section
 * Aesthetic: Peaceful Rural, Botanical, Refined
 * Elizabeth's story, philosophy, and rural setting.
 */
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const COUNTRYSIDE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663711345795/U5NbPrg7hSLwhb4ERLGAyh/nature-healing-PWP5rxT6HNu2UBNfyXcXLd.webp";

const values = [
  "Personalised, thorough care",
  "Evidence-based treatment",
  "Listening and understanding",
  "Peaceful, welcoming environment",
  "Your goals are my goals",
  "Continuous professional development",
];

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative fade-up">
            <img
              src={COUNTRYSIDE_IMG}
              alt="Beautiful rural English countryside near Broadlea Physiotherapy clinic"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <p className="font-display text-lg font-bold text-[oklch(0.22_0.05_240)] mb-2">
                A Peaceful Setting
              </p>
              <p className="font-body text-sm text-[oklch(0.52_0.02_240)] leading-relaxed">
                Located in East Drayton, our peaceful countryside treatment room provides a calm, welcoming environment for your recovery.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="section-tag mb-3 fade-up">
              <span className="w-8 h-px bg-[oklch(0.66_0.04_165)] inline-block" />
              About Elizabeth Kiss
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[oklch(0.22_0.05_240)] leading-tight mt-3 mb-5 fade-up delay-100">
              Chartered{" "}
              <span className="italic font-light text-[oklch(0.66_0.04_165)]">
                Physiotherapist
              </span>
            </h2>

            <p className="font-body text-lg text-[oklch(0.45_0.02_240)] leading-relaxed mb-6 fade-up delay-200">
              I'm Elizabeth Kiss, a Chartered Physiotherapist with 26 years of clinical experience. I work in the NHS in MSK outpatient settings and am now building my private practice alongside it. I believe that healing happens best when you feel comfortable, listened to, and truly understood.
            </p>

            <p className="font-body text-base text-[oklch(0.52_0.02_240)] leading-relaxed mb-8 fade-up delay-300">
              My approach combines evidence-based treatment with genuine compassion. I take time to understand not just your symptoms, but your lifestyle, your goals, and what matters most to you. Whether you're recovering from an injury, managing a chronic condition, or simply wanting to move with greater confidence, I'm here to support you every step of the way.
            </p>

            <div className="mb-10 fade-up delay-400">
              <h3 className="font-display text-lg font-bold text-[oklch(0.22_0.05_240)] mb-4">
                My Qualifications
              </h3>
              <ul className="flex flex-col gap-2 font-body text-base text-[oklch(0.52_0.02_240)]">
                <li>BSc (Hons) Physiotherapy — University of Szeged, Hungary (2000)</li>
                <li>MSc Advanced Physiotherapy Practice — University of Sheffield (2019)</li>
                <li>MCSP (Member of Chartered Society of Physiotherapy)</li>
                <li>HCPC Registered (Health & Care Professions Council)</li>
              </ul>
            </div>

            <div className="fade-up delay-500">
              <h3 className="font-display text-lg font-bold text-[oklch(0.22_0.05_240)] mb-4">
                My Philosophy
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {values.map((value) => (
                  <li key={value} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[oklch(0.66_0.04_165)] flex-shrink-0" />
                    <span className="font-body text-sm text-[oklch(0.52_0.02_240)]">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
