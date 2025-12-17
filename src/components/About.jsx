// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] text-center mb-12">
          About Us
        </h2>

        {/* Our Story */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[var(--dark-navy)] mb-4">
            Our Story
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Quality Electric & Construction, your trusted partner for
            all of your electrical service needs. We are dedicated to providing
            superior electrical solutions that not only meet but surpass our
            customers' expectations. With a focus on delivering excellent
            service and ensuring customer satisfaction, we have built a strong
            reputation in the electrical services industry as a reliable and
            trusted provider. Quality Electric & Construction has a strong
            history in the electrical industry, driven by its dedication to
            providing secure, effective, and dependable electrical solutions.
          </p>
        </div>

        {/* Our Mission */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[var(--dark-navy)] mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission at Quality Electric & Construction is to provide
            electrical services that emphasize safety, efficiency, and
            sustainability. We are committed to providing our customers with the
            latest and most dependable electrical solutions, customized to meet
            your specific requirements. With a focus on customer satisfaction,
            we strive to foster an enduring partnership and establish ourselves
            as the preferred choice for all of your electrical needs.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[var(--dark-navy)] mb-4">
            What We Offer
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We offer a wide range of electrical services, including but not
            limited to electrical installations, repairs, maintenance, and
            upgrades for residential, commercial, educational, and government
            clients. Our team of certified electricians has the utmost
            precision, efficiency, and observance of industry standards and
            regulations.
          </p>
        </div>

        {/* Our Team */}
        <div>
          <h3 className="text-2xl font-semibold text-[var(--dark-navy)] mb-4">
            Our Team
          </h3>
          <p className="text-gray-700 leading-relaxed">
            At Quality Electric & Construction, our team consists of highly
            skilled and experienced electricians who are passionate about
            delivering quality service and ensuring the safety and satisfaction
            of our clients. With a dedicated commitment to continuous learning
            and staying informed about the latest industry developments, our
            team maintains a leading position in the electrical services
            industry. We strive to deliver solutions that effectively address
            the needs of our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
