// src/components/WhyChooseUs.jsx
import React from "react";
import { Zap, Shield, Clock, Star } from "lucide-react"; // replaced Lightning with Zap

const reasons = [
  {
    icon: <Zap size={32} />,
    title: "Fast & Reliable",
    desc: "We provide quick response times and efficient electrical solutions for all projects.",
  },
  {
    icon: <Shield size={32} />,
    title: "Safety First",
    desc: "All work is done following strict safety standards and regulations.",
  },
  {
    icon: <Clock size={32} />,
    title: "24/7 Support",
    desc: "Our team is available around the clock for emergencies or scheduled services.",
  },
  {
    icon: <Star size={32} />,
    title: "Trusted Professionals",
    desc: "Experienced electricians delivering high-quality workmanship every time.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--dark-navy)]">
          Why Choose Quality Electric & Construction?
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-700 max-w-2xl mx-auto">
          We combine experience, reliability, and professional service to make
          sure your electrical projects are handled safely and efficiently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="text-[var(--yellow)] mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-[var(--dark-navy)]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
