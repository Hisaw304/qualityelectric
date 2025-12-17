// src/components/Testimonials.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Evan Smith",
    role: "Homeowner",
    quote:
      "Quality Electric & Construction did an amazing job with my home wiring. Professional, fast, and reliable!",
    rating: 4,
  },
  {
    name: "David Williams",
    role: "Business Owner",
    quote:
      "They upgraded our office electrical system flawlessly. Highly recommend for any commercial projects.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Property Manager",
    quote:
      "The team is very skilled and knowledgeable. Our maintenance issues were solved quickly and safely.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "School Administrator",
    quote:
      "Quality Electric & Construction provided excellent service for our school renovations. Punctual and professional!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)]">
          What Our Clients Say
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Hear from our satisfied clients and see why we are the trusted choice
          for electrical services.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-[var(--yellow)]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{t.quote}"</p>
              <h4 className="text-lg font-semibold text-[var(--dark-navy)]">
                {t.name}
              </h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
