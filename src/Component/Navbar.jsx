import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import logo from "../assets/MandalaProject.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleScrollTo = (id) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const top = element.offsetTop - offset;
          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const top = element.offsetTop - offset;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = ["Hero", "About", "Portofolio", "Contact"];

    const handleActive = () => {
      let current = "Hero";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 120;
          if (window.scrollY >= el.offsetTop - offset) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleActive);
    return () => window.removeEventListener("scroll", handleActive);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
    }
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isHome
          ? "bg-[#020617] border-b border-[#365FBE]/50"
          : scrolled
            ? "bg-[#020617]/90 backdrop-blur-md border-b border-[#365FBE]/50"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 relative">
        <a href="#" className="flex items-center">
          <img src={logo} className="h-8 sm:h-8 md:h-9" alt="logo" />
        </a>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-6 lg:gap-10 text-sm lg:text-base">
            {[
              { name: "Home", id: "Hero" },
              { name: "About", id: "About" },
              { name: "Portofolio", id: "Portofolio" },
              { name: "Contact", id: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative pb-1 transition group ${
                    activeSection === item.id
                      ? "text-[#365FBE]"
                      : "text-white hover:text-[#365FBE]"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-[#365FBE] transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/WiraMandala"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden md:flex items-center justify-center text-white hover:text-[#365FBE] transition"
          >
            <FiGithub size={20} aria-hidden="true" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-9 h-9 flex items-center justify-center "
          >
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } ${
          scrolled || !isHome
            ? "bg-[#020617]/90 backdrop-blur-md"
            : "bg-[#020617] backdrop-blur-md"
        }`}
      >
        <ul className="flex flex-col items-start gap-6 py-6 px-3 text-white text-sm">
          {[
            { name: "Home", id: "Hero" },
            { name: "About", id: "About" },
            { name: "Portofolio", id: "Portofolio" },
            { name: "Contact", id: "Contact" },
          ].map((item) => (
            <li key={item.id}>
              <button onClick={() => handleScrollTo(item.id)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
