/**
 * Broadlea Physiotherapy — Services Section
 * Aesthetic: Peaceful Rural, Botanical, Refined
 * Card-based services with imagery and descriptions.
 */
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const ASSESSMENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663711345795/U5NbPrg7hSLwhb4ERLGAyh/wellness-hands-ct3DfxbjBcfsJ4VTo8zz8h.webp";
const TREATMENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663711345795/U5NbPrg7hSLwhb4ERLGAyh/exercise-equipment-kFCRjXQSn5XMACHpGXaSRW.webp";

const services = [
  {
    id: "01",
    title: "Assessment",
    description:
      "A thorough assessment to understand your symptoms, lifestyle, and goals. Nothing is rushed — I take time to listen and understand what's really going on.",
    image: ASSESSMENT_IMG,
    color: "oklch(0.92 0.005 80)",
  },
  {
    id: "02",
    title: "Treatment",
    description:
      "Hands-on physiotherapy including manual therapy, soft tissue techniques, and joint mobilisation — tailored to your specific needs and comfort.",
    image: TREATMENT_IMG,
    color: "oklch(0.85 0.01 240)",
  },
  {
    id: "03",
    title: "Rehabilitation",
    description:
      "Personalised exercise programmes designed to rebuild strength, improve mobility, and prevent re-injury. Guidance every step of the way.",
    image: null,
    color: "oklch(0.92 0.005 80)",
  },
  {
    id: "04",
    title: "Back & Neck Pain",
    description:
      "Specialist treatment for back pain, neck pain, and related conditions. Evidence-based approaches to get you moving comfortably again.",
    image: null,
    color: "oklch(0.85 0.01 240)",
  },
  {
    id: "05",
    title: "Sports Injuries",
    description:
      "Treatment and rehabilitation for sports-related injuries — from acute sprains to chronic overuse conditions. Return to your sport with confidence.",
    image: null,
    color: "oklch(0.92 0.005 80)",
  },
  {
    id: "06",
    title: "Post-Operative Rehab",
    description:
      "Specialised rehabilitation after surgery to optimise recovery, restore function, and get you back to your normal activities.",
    image: null,
    color: "oklch(0.85 0.01 240)",
  },
];

export default function ServicesSection() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-tag mb-3 fade-up">
            <span className="w-8 h-px bg-[oklch(0.66_0.04_165)] inline-block" />
            How I Can Help
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[oklch(0.22_0.05_240)] leading-tight mt-3 mb-5 fade-up delay-100">
            Comprehensive{" "}
            <span className="italic font-light text-[oklch(0.66_0.04_165)]">Physiotherapy</span>
          </h2>
          <p className="font-body text-lg text-[oklch(0.45_0.02_240)] leading-relaxed fade-up delay-200">
            From acute injuries to chronic conditions, I provide evidence-based treatment tailored to your individual needs and goals.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`fade-up delay-${Math.min((index + 1) * 100, 500)} group relative rounded-2xl overflow-hidden card-hover bg-white border border-[oklch(0.92_0.005_80)] shadow-sm`}
            >
              {/* Image or color block */}
              <div
                className="h-48 overflow-hidden relative"
                style={{ background: service.color }}
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-7xl font-bold text-[oklch(0.22_0.05_240)]/10">
                      {service.id}
                    </span>
                  </div>
                )}
                {/* Number badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <span className="font-display text-xs font-bold text-[oklch(0.22_0.05_240)]">
                    {service.id}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.05_240)] mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-[oklch(0.45_0.02_240)] leading-relaxed mb-4">
                  {service.description}
                </p>

                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.66_0.04_165)] hover:gap-2.5 transition-all duration-200 group/link"
                >
                  Book a session
                  <ArrowRight size={15} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center fade-up">
          <p className="font-body text-base text-[oklch(0.45_0.02_240)] mb-5">
            Not sure what you need?
          </p>
          <button
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3.5 shadow-lg shadow-[oklch(0.22_0.05_240)]/25"
          >
            Book a Free Consultation
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
