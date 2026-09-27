/**
 * Broadlea Physiotherapy — Contact & Booking Section
 * Aesthetic: Peaceful Rural, Botanical, Refined
 * Split layout: contact info left, booking form right.
 */
import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "07539 038356",
    href: "tel:+441234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "elizabeth@broadleaphysiotherapy.com",
    href: "mailto:elizabeth@broadleaphysiotherapy.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "North Green, East Drayton, DN22 0LF",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "By appointment — flexible times available",
    href: null,
  },
];

const services = [
  "Assessment",
  "Treatment",
  "Rehabilitation",
  "Back & Neck Pain",
  "Sports Injuries",
  "Post-Operative Rehab",
  "Other",
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Appointment request sent! I'll be in touch within 24 hours.");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-[oklch(0.22_0.05_240)] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact info */}
          <div>
            <span className="section-tag mb-3 fade-up text-[oklch(0.75_0.10_165)]">
              <span className="w-8 h-px bg-[oklch(0.75_0.10_165)] inline-block" />
              Get In Touch
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mt-3 mb-5 fade-up delay-100">
              Ready to{" "}
              <span className="italic font-light text-[oklch(0.75_0.10_165)]">
                Start Your Recovery?
              </span>
            </h2>
            <p className="font-body text-base text-white/70 leading-relaxed mb-10 fade-up delay-200">
              Book an appointment and take the first step towards better movement, less pain, and greater confidence in your body.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5 mb-10">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`fade-up delay-${(index + 3) * 100} flex items-start gap-4`}
                >
                  <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[oklch(0.75_0.10_165)]" />
                  </div>
                  <div>
                    <div className="font-body text-xs font-semibold text-white/50 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-sm font-medium text-white hover:text-[oklch(0.75_0.10_165)] transition-colors duration-200"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-body text-sm font-medium text-white">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* Right: Booking form */}
          <div className="fade-up delay-200">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[oklch(0.92_0.005_80)] flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-[oklch(0.66_0.04_165)]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.05_240)] mb-3">
                    Request Received!
                  </h3>
                  <p className="font-body text-base text-[oklch(0.45_0.02_240)] leading-relaxed max-w-xs">
                    Thank you, {form.name}. I'll contact you within 24 hours to confirm your appointment.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                    className="mt-6 btn-outline text-sm px-6 py-2.5"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.05_240)] mb-2">
                    Book an Appointment
                  </h3>
                  <p className="font-body text-sm text-[oklch(0.52_0.02_240)] mb-6">
                    Fill in the form and I'll be in touch within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-xs font-semibold text-[oklch(0.35_0.03_240)] uppercase tracking-wider mb-1.5 block">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          required
                          className="w-full font-body text-sm px-4 py-3 rounded-lg border border-[oklch(0.92_0.005_80)] bg-[oklch(0.975_0.008_80)] text-[oklch(0.22_0.05_240)] placeholder:text-[oklch(0.72_0.02_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.66_0.04_165)]/30 focus:border-[oklch(0.66_0.04_165)] transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs font-semibold text-[oklch(0.35_0.03_240)] uppercase tracking-wider mb-1.5 block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="07700 900 000"
                          className="w-full font-body text-sm px-4 py-3 rounded-lg border border-[oklch(0.92_0.005_80)] bg-[oklch(0.975_0.008_80)] text-[oklch(0.22_0.05_240)] placeholder:text-[oklch(0.72_0.02_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.66_0.04_165)]/30 focus:border-[oklch(0.66_0.04_165)] transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-xs font-semibold text-[oklch(0.35_0.03_240)] uppercase tracking-wider mb-1.5 block">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        required
                        className="w-full font-body text-sm px-4 py-3 rounded-lg border border-[oklch(0.92_0.005_80)] bg-[oklch(0.975_0.008_80)] text-[oklch(0.22_0.05_240)] placeholder:text-[oklch(0.72_0.02_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.66_0.04_165)]/30 focus:border-[oklch(0.66_0.04_165)] transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="font-body text-xs font-semibold text-[oklch(0.35_0.03_240)] uppercase tracking-wider mb-1.5 block">
                        Service <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full font-body text-sm px-4 py-3 rounded-lg border border-[oklch(0.92_0.005_80)] bg-[oklch(0.975_0.008_80)] text-[oklch(0.22_0.05_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.66_0.04_165)]/30 focus:border-[oklch(0.66_0.04_165)] transition-all duration-200"
                      >
                        <option value="" disabled>Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="font-body text-xs font-semibold text-[oklch(0.35_0.03_240)] uppercase tracking-wider mb-1.5 block">
                        Tell Me About Your Condition
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your symptoms or what you'd like help with..."
                        rows={4}
                        className="w-full font-body text-sm px-4 py-3 rounded-lg border border-[oklch(0.92_0.005_80)] bg-[oklch(0.975_0.008_80)] text-[oklch(0.22_0.05_240)] placeholder:text-[oklch(0.72_0.02_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.66_0.04_165)]/30 focus:border-[oklch(0.66_0.04_165)] transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary flex items-center justify-center gap-2 text-base py-3.5 mt-2 shadow-lg shadow-[oklch(0.22_0.05_240)]/25 w-full"
                    >
                      <Send size={16} />
                      Send Appointment Request
                    </button>

                    <p className="font-body text-xs text-[oklch(0.62_0.04_240)] text-center">
                      By submitting this form you agree to our privacy policy. Your details will never be shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
