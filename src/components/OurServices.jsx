// src/components/OurServices.jsx
import React from "react";
import imgRepairs from "../assets/electrical-repairs.jpg";
import imgInstallation from "../assets/electrical-installation.jpg";
import imgMaintenance from "../assets/electrical-maintenance.jpg";

const services = [
  {
    img: imgRepairs,
    title: "Electrical Repairs",
    desc: `Our team of highly skilled and certified electricians is equipped with the expertise to promptly diagnose and efficiently repair any electrical issues you may encounter. With a keen understanding of the intricacies of electrical systems, our professionals work diligently to identify the root cause of the problem, providing swift and effective solutions to get your systems up and running in minimal time. Rest assured that our team prioritizes precision and efficiency, ensuring that all repairs are conducted with the highest level of care and expertise, allowing you to resume your operations seamlessly and with complete peace of mind.`,
  },
  {
    img: imgInstallation,
    title: "Electrical Installation",
    desc: `Quality Solutions specializes in a full spectrum of electrical installation services tailored to meet the unique demands of your property. We handle a diverse range of tasks, including intricate wiring setups and comprehensive lighting installations. With an unwavering commitment to safety and efficiency, we ensure that every installation is executed meticulously, adhering to the highest industry standards.`,
  },
  {
    img: imgMaintenance,
    title: "Electrical Maintenance",
    desc: `Regular upkeep is essential to guaranteeing the safety and optimal performance of your electrical systems. Our comprehensive maintenance services include thorough wire mapping assessments, ensuring that all devices and outlets are accurately aligned with the panel schedule and correctly labeled. By implementing meticulous wire mapping services, we effectively minimize downtime and expedite the identification and resolution of potential issues. Our proactive maintenance approach aims to enhance the efficacy and longevity of your electrical systems, providing you with a reliable and secure electrical infrastructure that operates at its best.`,
  },
];

const OurServices = () => {
  return (
    <section id="services" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)]">
          Our Services
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Professional electrical solutions tailored to meet your needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-[var(--dark-navy)]">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
