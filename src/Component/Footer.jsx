import logo from "../assets/MandalaProject.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
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
  };

  return (
    <footer className="w-full border-t border-[#365FBE]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400">
        <div className="flex items-center gap-2">
          <img src={logo} className="h-8 sm:h-9" alt="MandalaProject" />
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
          <li>
            <button
              onClick={() => handleScrollTo("Hero")}
              className=" transition"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("About")}
              className=" transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("Portofolio")}
              className=" transition"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("Contact")}
              className=" transition"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center text-gray-400 text-sm py-6 border-t border-[#365FBE]/20">
        © 2026 MandalaProject. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
