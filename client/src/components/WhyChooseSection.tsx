/**
 * Broadlea Physiotherapy — The Broadlea Physiotherapy Difference Section
 * Design: Peaceful Rural, Botanical, Refined
 * Full-width sage green section with key differentiators.
 */
import { useEffect, useRef } from "react";
import { Clock, Star, Shield, UserCheck, CalendarCheck, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "HCPC Registered",
    description: "Chartered Physiotherapist registered with the Health & Care Professions Council.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Appointments",
    description: "Appointments tailored to your schedule. NHS experience combined with dedicated private care.",
  },
  {
    icon: Clock,
    title: "Thorough Assessment",
    description: "Every appointment begins with a comprehensive assessment to understand your needs fully.",
  },
  {
    icon: Star,
    title: "Evidence-Based",
    description: "Treatment grounded in current physiotherapy research and best practice.",
  },
  {
    icon: Shield,
    title: "Professional Experience",
    description: "26 years of clinical experience in NHS MSK outpatient settings.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centred Care",
    description: "Your goals and comfort are at the heart of every treatment session.",
  },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
    <section
      ref={sectionRef}
      className="py-24 bg-[oklch(0.66_0.04_165)] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 pointer-events-none"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", transform: "translate(20%, -20%)", background: "white" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-5 pointer-events-none"
        style={{ borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%", transform: "translate(-20%, 20%)", background: "white" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-white/70 mb-3 fade-up">
            <span className="w-8 h-px bg-white/50 inline-block" />
            Why Choose Broadlea
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mt-3 mb-5 fade-up delay-100">
            The Broadlea{" "}
            <span className="italic font-light">Physiotherapy Difference</span>
          </h2>
          <p className="font-body text-lg text-white/75 leading-relaxed fade-up delay-200">
            Evidence-based treatment combined with genuine care, in a peaceful, welcoming environment.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`fade-up delay-${Math.min((index + 3) * 100, 500)} group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <reason.icon size={22} className="text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="font-body text-sm text-white/75 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
