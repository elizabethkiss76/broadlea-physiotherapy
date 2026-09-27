/**
 * Broadlea Physiotherapy — Testimonials Section
 * Design: Modern Healthcare Organic — Biophilic Warmth
 * Warm cream background, card-based testimonials with star ratings.
 */
import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Margaret T.",
    age: "62",
    condition: "Knee Replacement Recovery",
    rating: 5,
    text: "After my knee replacement, I was worried I'd never walk properly again. Elizabeth was incredible — patient, knowledgeable, and genuinely caring. Within three months I was back to my daily walks. I can't recommend her highly enough.",
    initials: "MT",
    color: "oklch(0.92_0.05_185)",
  },
  {
    name: "Daniel R.",
    age: "28",
    condition: "Sports Injury (Hamstring)",
    rating: 5,
    text: "I tore my hamstring playing football and was told I might not play again. Elizabeth created a brilliant rehab programme and I was back on the pitch in 10 weeks. Her expertise in sports physio is second to none.",
    initials: "DR",
    color: "oklch(0.94_0.03_80)",
  },
  {
    name: "Linda K.",
    age: "45",
    condition: "Chronic Back Pain",
    rating: 5,
    text: "I'd suffered with lower back pain for years and tried everything. Elizabeth's approach was completely different — she actually listened to me and addressed the root cause. Six sessions in and I'm virtually pain-free. Life-changing.",
    initials: "LK",
    color: "oklch(0.92_0.04_35)",
  },
  {
    name: "Tom H.",
    age: "35",
    condition: "Shoulder Impingement",
    rating: 5,
    text: "Elizabeth is an exceptional physiotherapist. She diagnosed my shoulder problem quickly, explained everything clearly, and gave me a targeted exercise programme. My shoulder is now stronger than before the injury.",
    initials: "TH",
    color: "oklch(0.93_0.04_185)",
  },
  {
    name: "Susan M.",
    age: "55",
    condition: "Neck Pain & Headaches",
    rating: 5,
    text: "I was getting terrible tension headaches from working at a desk all day. The postural assessment at Broadlea was eye-opening. A few sessions of manual therapy and some simple exercises have made a world of difference.",
    initials: "SM",
    color: "oklch(0.94_0.02_80)",
  },
  {
    name: "Ahmed P.",
    age: "41",
    condition: "Post-Surgical Rehab",
    rating: 5,
    text: "The pre and post-surgical rehab programme at Broadlea was outstanding. Elizabeth prepared me brilliantly before my operation and guided my recovery every step of the way. Professional, thorough, and genuinely supportive.",
    initials: "AP",
    color: "oklch(0.92_0.05_185)",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

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

  const visibleTestimonials = testimonials.slice(
    activeIndex * itemsPerPage,
    activeIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-[oklch(0.98_0.015_80)] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", transform: "translate(30%, -30%)", background: "oklch(0.66 0.04 165)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none"
        style={{ borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%", transform: "translate(-30%, 30%)", background: "oklch(0.22 0.05 240)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <span className="section-tag mb-3 fade-up">
              <span className="w-8 h-px bg-[oklch(0.66_0.04_165)] inline-block" />
              Patient Stories
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[oklch(0.22_0.05_240)] leading-tight mt-3 mb-4 fade-up delay-100">
              What Our Patients{" "}
              <span className="italic font-light text-[oklch(0.66_0.04_165)]">Say</span>
            </h2>
            <div className="flex items-center gap-3 fade-up delay-200">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[oklch(0.75_0.15_80)] text-[oklch(0.75_0.15_80)]" />
                ))}
              </div>
              <span className="font-body text-sm font-semibold text-[oklch(0.35_0.04_240)]">
                5.0 · Google Reviews
              </span>
            </div>
          </div>

          {/* Pagination controls */}
          <div className="flex gap-3 fade-up delay-300">
            <button
              onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border-2 border-[oklch(0.88_0.02_80)] flex items-center justify-center text-[oklch(0.45_0.04_240)] hover:border-[oklch(0.66_0.04_165)] hover:text-[oklch(0.66_0.04_165)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => Math.min(totalPages - 1, prev + 1))}
              disabled={activeIndex === totalPages - 1}
              className="w-10 h-10 rounded-full border-2 border-[oklch(0.88_0.02_80)] flex items-center justify-center text-[oklch(0.45_0.04_240)] hover:border-[oklch(0.66_0.04_165)] hover:text-[oklch(0.66_0.04_165)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`fade-up delay-${(index + 3) * 100} bg-white rounded-3xl p-7 border border-[oklch(0.88_0.02_80)] shadow-sm card-hover relative`}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={40} className="text-[oklch(0.66_0.04_165)]" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[oklch(0.75_0.15_80)] text-[oklch(0.75_0.15_80)]" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-sm text-[oklch(0.35_0.04_240)] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[oklch(0.88_0.02_80)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `oklch(${testimonial.color.replace("oklch(", "").replace(")", "")})` }}
                >
                  <span className="font-display text-sm font-bold text-[oklch(0.22_0.05_240)]/60">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-[oklch(0.22_0.05_240)]">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-xs text-[oklch(0.66_0.04_165)] font-semibold">
                    {testimonial.condition}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Page dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-[oklch(0.66_0.04_165)]"
                  : "w-2 bg-[oklch(0.88_0.02_80)] hover:bg-[oklch(0.66_0.04_165)]/50"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
