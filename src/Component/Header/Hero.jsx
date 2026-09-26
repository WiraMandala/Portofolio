import ProfileCard from "./ProfileCard";
import IconPattern from "../../assets/iconpattern.png";
import Avatar from "../../assets/avatar.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToPortfolio = () => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById("Portofolio");
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const el = document.getElementById("Portofolio");
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      id="Hero"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 sm:left-20 w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-[#365FBE]/30 blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 sm:right-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#365FBE]/30 blur-[120px]"></div>
        <div className="absolute top-1/3 right-1/4 w-52 sm:w-60 h-52 sm:h-60 rounded-full bg-[#365FBE]/30 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center">
          <div className="text-left mt-4 flex flex-col items-start">
            <span className="mb-6 text-[10px] tracking-wider text-gray-400 font-mono flex items-center gap-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#22c55e]"></span>
              Halo, i'm Wira.
            </span>
            <span className="text-[16px] font-semibold tracking-wider text-gray-300 mb-2">
              Wira Satria Mandala
            </span>
            <h1 className="font-extrabold text-4xl md:text-6xl mb-4 text-white">
              UI/UX Designer &{" "}
              <span className="bg-gradient-to-r from-[#365FBE] to-[#4F7CFF] text-transparent bg-clip-text font-extrabold">
                Web Developer
              </span>
            </h1>
            <p className="text-base sm:text-base md:text-xl lg:text-lg text-gray-300 mb-4">
              Mengembangkan aplikasi web modern yang mengutamakan fungsionalitas dan pengalaman pengguna yang interaktif.
            </p>
            <p className="text-sm sm:text-sm md:text-lg lg:text-base text-gray-400 mb-6">
              Setiap proyek dirancang dengan pendekatan yang seimbang antara desain visual yang rapi dan pengembangan yang efisien serta responsif.
            </p>

            <div className="flex sm:flex-row gap-4 sm:justify justify-center lg:justify-start">
              <button
                onClick={handleGoToPortfolio}
                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 text-white bg-[#365FBE] text-sm sm:text-sm md:text-base"
              >
                Lihat Proyek
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
              <a
                href="https://drive.google.com/file/d/1G9m02gDkFtnYv4sz9Ic3JO8azXwcXt3l/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 border border-[#365FBE] bg-[#365FBE]/20 text-white hover:bg-[#365FBE]/60 transition text-center text-sm sm:text-sm md:text-base "
              >
                Download CV
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-[#365FBE]">
                  <CiLocationOn size={20} />
                </span>
                <span className="text-xs">Sumedang</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#365FBE]">
                  <IoMdCheckmark size={20} />
                </span>
                <span className="text-xs">Available for selected projects</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end my-10 lg:mt-0">
            <ProfileCard
              name=""
              title=""
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl={Avatar}
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt
              onContactClick={() => console.log("Contact clicked")}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              iconUrl={IconPattern}
              behindGlowEnabled={false}
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-gray-400 ">
            <span className="text-[10px] tracking-[0.3em] text-[#365FBE] font-mono">
              Scroll to Explore
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-[#365FBE] rotate-45 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H9M17 7V15"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
