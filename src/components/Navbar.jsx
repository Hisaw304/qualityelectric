import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-[var(--dark-navy)] text-white text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2">
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>accounting@qualityec.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+1 (234) 567-8900</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[var(--yellow)]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold text-[var(--dark-navy)]">
            <a href="/">Quality Electric & Construction</a>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-[var(--dark-navy)]">
            <li>
              <a href="/" className="hover:opacity-80">
                Home
              </a>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:opacity-80"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:opacity-80"
              >
                Services
              </button>
            </li>
            <li>
              <a href="/privacy" className="hover:opacity-80">
                Privacy Policy
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[var(--dark-navy)]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-[var(--yellow)] transform transition-transform duration-300 ease-in-out z-50 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-6">
            <button onClick={() => setOpen(false)}>
              <X size={28} className="text-[var(--dark-navy)]" />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center gap-8 h-[80%] text-[var(--dark-navy)] text-xl font-medium">
            <li>
              <a href="/" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:opacity-80"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:opacity-80"
              >
                Services
              </button>
            </li>
            <li>
              <a href="/privacy" onClick={() => setOpen(false)}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
