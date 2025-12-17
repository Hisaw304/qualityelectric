// src/components/AboutInfo.jsx
import React from "react";
import img1 from "../assets/about.jpg"; // replace with your image
import img2 from "../assets/about2.jpg";

const AboutInfo = () => {
  return (
    <section className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Block 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={img1}
            alt="About Quality Electric & Construction"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-[var(--dark-navy)] mb-4">
              What to know About Quality Electric & Construction
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For more than 15 years, Quality Electric & Construction has
              provided electrical contracting services and installations. Our
              team of electricians wants to help you with your residential and
              commercial electrical projects. At Quality Electric &
              Construction, we are proud to offer quality services. With our
              experience in the industry, we are dedicated to getting the job
              done right the first time. No matter the size of your project, we
              provide top-notch services tailored to your individual needs and
              preferences.
            </p>
            <a
              href="#services"
              className="text-[var(--yellow)] font-semibold hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
          <img
            src={img2}
            alt="Quality Services"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-[var(--dark-navy)] mb-4">
              We provide Quality Services
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Quality Electric & Construction is not just a regular electrical
              contracting company. We make sure that all of our customers are
              satisfied with our work, ensuring that the job is done correctly
              and safely the first time.
            </p>
            <a
              href="#services"
              className="text-[var(--yellow)] font-semibold hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
