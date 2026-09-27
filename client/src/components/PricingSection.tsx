/**
 * Broadlea Physiotherapy — Pricing Section
 * Design: Peaceful Rural, Botanical, Refined
 * Treatment plans and massage pricing with clear information.
 */
import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const physiotherapyPlans = [
  {
    name: "Full Physiotherapy",
    price: "£75",
    duration: "1 hour",
    description: "Comprehensive physiotherapy session",
    features: [
      "Full assessment",
      "Comprehensive treatment plan",
      "Exercise program",
      "Detailed guidance",
    ],
    highlighted: true,
  },
  {
    name: "Focused Treatment",
    price: "£60",
    duration: "45 minutes",
    description: "Targeted physiotherapy session",
    features: [
      "Focused treatment",
      "Key exercises",
      "Practical advice",
      "Efficient recovery",
    ],
  },
  {
    name: "Quick Session",
    price: "£50",
    duration: "30 minutes",
    description: "Quick assessment and targeted treatment",
    features: [
      "Quick assessment",
      "Targeted treatment",
      "Practical guidance",
      "Maintenance care",
    ],
  },
];

const massagePlans = [
  {
    name: "Full Body Massage",
    price: "£60",
    duration: "1 hour",
    description: "Professional sports massage",
    features: [
      "Full body relaxation",
      "Injury prevention",
      "Tension relief",
      "Recovery support",
    ],
    highlighted: true,
  },
  {
    name: "Targeted Massage",
    price: "£50",
    duration: "45 minutes",
    description: "Focused massage therapy",
    features: [
      "Targeted area focus",
      "Tension relief",
      "Recovery support",
      "Muscle relaxation",
    ],
  },
  {
    name: "Quick Massage",
    price: "£45",
    duration: "30 minutes",
    description: "Quick specific massage",
    features: [
      "Quick specific focus",
      "Refreshing treatment",
      "Tension relief",
      "Maintenance care",
    ],
  },
];

const PricingCard = ({ plan, index }: { plan: typeof physiotherapyPlans[0]; index: number }) => (
  <div
    className={`fade-up delay-${(index + 1) * 100} rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
      plan.highlighted
        ? "border-[oklch(0.66_0.04_165)] bg-[oklch(0.975_0.008_80)] shadow-xl transform lg:scale-105"
        : "border-[oklch(0.92_0.005_80)] bg-white shadow-sm hover:shadow-lg hover:-translate-y-1"
    }`}
  >
    {plan.highlighted && (
      <div className="bg-[oklch(0.66_0.04_165)] text-white py-2 px-4 text-center">
        <span className="font-body text-xs font-semibold uppercase tracking-widest">
          Most Popular
        </span>
      </div>
    )}

    <div className="p-8">
      <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.05_240)] mb-2">
        {plan.name}
      </h3>
      <p className="font-body text-sm text-[oklch(0.52_0.02_240)] mb-6">
        {plan.description}
      </p>

      <div className="mb-6">
        <span className="font-display text-4xl font-bold text-[oklch(0.66_0.04_165)]">
          {plan.price}
        </span>
        <span className="font-body text-sm text-[oklch(0.52_0.02_240)] ml-2">
          {plan.duration}
        </span>
      </div>

      <ul className="flex flex-col gap-3 mb-8">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 font-body text-sm text-[oklch(0.45_0.02_240)]"
          >
            <Check
              size={16}
              className="text-[oklch(0.66_0.04_165)] flex-shrink-0"
            />
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
        }
        className={`w-full font-body font-semibold py-3 px-4 rounded-lg transition-all duration-200 ${
          plan.highlighted
            ? "bg-[oklch(0.66_0.04_165)] text-white hover:bg-[oklch(0.62_0.04_165)]"
            : "border-2 border-[oklch(0.22_0.05_240)] text-[oklch(0.22_0.05_240)] hover:bg-[oklch(0.22_0.05_240)] hover:text-white"
        }`}
      >
        Book Now
      </button>
    </div>
  </div>
);

export default function PricingSection() {
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
    <section id="pricing" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-tag mb-3 fade-up">
            <span className="w-8 h-px bg-[oklch(0.66_0.04_165)] inline-block" />
            Transparent Pricing
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[oklch(0.22_0.05_240)] leading-tight mt-3 mb-5 fade-up delay-100">
            Treatment Plans &{" "}
            <span className="italic font-light text-[oklch(0.66_0.04_165)]">
              Pricing
            </span>
          </h2>
          <p className="font-body text-lg text-[oklch(0.45_0.02_240)] leading-relaxed fade-up delay-200">
            Clear, straightforward pricing with no hidden costs. Payment is due at the time of treatment.
          </p>
        </div>

        {/* Physiotherapy section */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.05_240)] mb-2 fade-up">
              Physiotherapy
            </h3>
            <p className="font-body text-base text-[oklch(0.52_0.02_240)] fade-up delay-100">
              Evidence-based treatment tailored to your needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {physiotherapyPlans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>

        {/* Massage section */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.05_240)] mb-2 fade-up">
              Professional Sports Massage
            </h3>
            <p className="font-body text-base text-[oklch(0.52_0.02_240)] fade-up delay-100">
              From injury prevention to relaxation and recovery
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {massagePlans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index + 3} />
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 p-8 rounded-2xl bg-[oklch(0.975_0.008_80)] border border-[oklch(0.92_0.005_80)] fade-up">
          <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.05_240)] mb-4">
            Payment & Cancellation
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 font-body text-sm text-[oklch(0.52_0.02_240)] leading-relaxed">
            <div>
              <p className="font-semibold text-[oklch(0.22_0.05_240)] mb-2">Payment</p>
              <p>Payment is due at the time of treatment. We accept cash and bank transfer.</p>
            </div>
            <div>
              <p className="font-semibold text-[oklch(0.22_0.05_240)] mb-2">Cancellations</p>
              <p>Please provide at least 24 hours notice for cancellations. Late cancellations may incur a charge.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
