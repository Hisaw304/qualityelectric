// src/components/Footer.jsx
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-16 bg-[var(--yellow)] text-[var(--dark-navy)]">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company */}
        <div>
          <h3
            className="text-xl font-bold text-[var(--dark-navy)] cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Quality Electric & Construction
          </h3>

          <p className="text-sm leading-relaxed max-w-sm">
            Reliable electrical and construction services delivered with
            professionalism, safety, and quality workmanship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:underline"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:underline"
              >
                Services
              </button>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:accounting@qualityec.com"
                className="hover:underline"
              >
                accounting@qualityelectricbuild.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <p> 250 Old Bartow Eagle Lake RD Bartow FL 33830</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+8636598142" className="hover:underline">
                +1 (863) 659-8142
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="cursor-pointer hover:opacity-70" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="cursor-pointer hover:opacity-70" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="cursor-pointer hover:opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/20 text-center py-4 text-sm">
        © {new Date().getFullYear()} Quality Electric & Construction. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
