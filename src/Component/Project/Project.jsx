import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../Data/DataProjects";
import { certificates } from "../../Data/DataSerti";
import { LiaCertificateSolid } from "react-icons/lia";
import { HiCodeBracket } from "react-icons/hi2";

import { FaLayerGroup } from "react-icons/fa";

const Project = () => {
  const [mainTab, setMainTab] = useState("Project");
  const [active, setActive] = useState("Selected Works");

  const mainTabs = [
    { name: "Project", icon: <FaLayerGroup size={18} /> },
    { name: "Certificate", icon: <LiaCertificateSolid size={22} /> },
    { name: "Tech", icon: <HiCodeBracket size={20} /> },
  ];

  const categories = ["Selected Works", "UI/UX", "Web Development", "Lainnya"];

  let filteredProjects = [];
  if (active === "Selected Works") {
    filteredProjects = projects.slice(0, 3);
  } else {
    filteredProjects = projects.filter((item) => item.category === active);
  }
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="Portofolio" className=" py-16">
      <div className="lg:max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-left md:text-left lg:text-center lg:max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold">
            <span className="text-white">Explore My </span>
            <span className="text-[#365FBE] font-bold">Portofolio</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-base md:text-xl lg:text-lg mt-3 py-2">
            Kumpulan project dan pengalaman saya dalam membangun solusi digital
            yang modern, fungsional, dan berkualitas.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex bg-[#0B1220] backdrop-blur-md border border-[#365FBE]/20 p-1">
            {mainTabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setMainTab(tab.name)}
                className={`relative flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 text-sm md:text-base font-medium transition-all duration-300
        ${
          mainTab === tab.name ? "text-white" : "text-gray-400 hover:text-white"
        }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.name}</span>
                {mainTab === tab.name && (
                  <span className="absolute inset-0 bg-[#365FBE] -z-10 shadow-md shadow-[#365FBE]/30"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {mainTab === "Project" && (
          <div className="flex justify-center mt-6 w-full">
            <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 bg-[#0B1220] backdrop-blur-md border border-[#365FBE]/20 p-1">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`flex-1 sm:flex-none text-center px-3 sm:px-4 md:px-5 py-2 text-xs sm:text-sm md:text-base font-medium transition-all duration-300
          ${
            active === item
              ? "bg-[#365FBE] text-white shadow-md shadow-[#365FBE]/30"
              : "text-gray-400 hover:text-white"
          }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {mainTab === "Project" && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0B1220] p-5 border border-[#365FBE]/20
      
        overflow-hidden
        hover:border-[#365FBE] hover:scale-[1.02]
        transition flex flex-col h-full"
              >
                <div className="relative inline-block overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="block max-w-full h-auto object-contain"
                  />

                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                      className="absolute top-0 left-[-60%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      style={{ animation: "shine 3s linear infinite" }}
                    />
                  </div>
                </div>

                <span className="inline-block mt-4 text-xs text-[#365FBE] font-mono">
                  {item.category}
                </span>

                <h5 className="mt-2 text-xl font-semibold text-white">
                  {item.title}
                </h5>

                <p className="mb-4 py-2 text-gray-400 text-sm">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tech.map((tech) => (
                    <span
                      key={tech.name}
                      className="flex items-center gap-2 px-3 py-1 text-xs border border-white/10 text-gray-300"
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <Link
                    to={`/projects/${item.id}`}
                    className="text-sm text-white hover:text-[#365FBE] transition"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {mainTab === "Certificate" && (
          <div className="mt-12 space-y-8">
            {certificates.map((item, idx) => (
              <div
                key={idx}
                className="
          bg-[#0B1220]
          border border-[#365FBE]/20
        
          overflow-hidden
          hover:border-[#365FBE]
          transition duration-300
        "
              >
                <div className="grid md:grid-cols-2 gap-10 p-6 items-center">
                  <div className="flex justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="
                  max-h-[280px]
                  w-full
                  object-contain
                  
                  transition duration-500
                  hover:scale-90
                "
                    />
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center justify-between text-sm text-gray-400 font-semibold">
                      <span className="tracking-[0.2em] text-[#365FBE] uppercase">
                        {item.category || "Certificate"}
                      </span>
                      <span className="text-[#365FBE]">{item.years}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {item.title}
                    </h2>
                    <div
                      className="
              pt-5
              flex items-center justify-between
              border-t border-white/10
            "
                    >
                      <button
                        onClick={() => setSelectedCertificate(item)}
                        className="text-white hover:text-[#365FBE] transition text-sm"
                      >
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {mainTab === "Tech" && (
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mt-4 grid grid-cols-2 gap-px md:grid-cols-4">
              <div className="group grid place-content-center p-6 transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  className="h-12 transition duration-500 group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-3]"
                  title="React • Frontend Library"
                />
              </div>

              <div className="group grid place-content-center p-6 transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                  className="h-12 transition duration-500 group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-3"
                  title="Laravel"
                />
              </div>

              <div className="group grid place-content-center p-6 transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                  className="h-12 transition duration-500 group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-3"
                  title="Tailwind CSS"
                />
              </div>

              <div className="group grid place-content-center p-6 transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  className="h-12 transition duration-500 group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-3"
                  title="MySQL"
                />
              </div>

              <div className="group grid place-content-center p-6 transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  className="h-12 transition duration-500 group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-3"
                  title="Node Js"
                />
              </div>

              <div className="group grid place-content-center p-6 transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  className="h-12 transition duration-500 group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-3"
                  title="Figma"
                />
              </div>

              <div className="group grid place-content-center p-6 transition duration-300">
                <img
                  src="https://cdn.simpleicons.org/filament/FFD43B"
                  className="h-25 transition duration-500 group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-3"
                  title="Filament"
                />
              </div>

              <div className="group grid place-content-center p-6 transition duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original-wordmark.svg"
                  className="h-38 transition duration-500 group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-3"
                  title="Alpine Js"
                />
              </div>

              <div className="group grid place-content-center p-6 transition duration-300">
                <img
                  src="https://cdn.simpleicons.org/laragon"
                  className="h-12 transition duration-500 group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-3"
                  title="laragon"
                />
              </div>

              <div className="group grid place-content-center p-6 transition duration-300">
                <img
                  src="https://cdn.simpleicons.org/leaflet"
                  className="h-12 transition duration-500 group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-3"
                  title="Leaflet Js"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative w-full max-w-6xl bg-[#0B1220] border border-[#365FBE]/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#365FBE]/20">
              <div>
                <p className="text-xs tracking-widest text-[#365FBE] uppercase">
                  {selectedCertificate.category || "Certificate"}
                </p>
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  {selectedCertificate.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="flex items-center justify-center p-6 border-r border-[#365FBE]/20 bg-[#020617]">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-h-[75vh] object-contain"
                />
              </div>
              <div className="p-6 space-y-6">
                {/* INFO */}
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-400">Year</p>
                    <p className="text-white">
                      {selectedCertificate.years || "-"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
