import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../Data/DataProjects";
import { useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoToPortfolio = () => {
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
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // jika data tidak ditemukan
  if (!project) {
    return (
      <h1 className="text-white text-center mt-20">Project tidak ditemukan</h1>
    );
  }

  return (
    <section
      id="ProjectDetail"
      className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 my-16 pt-8 "
    >
      <div className="text-sm text-gray-400 flex items-center gap-2 flex-wrap mb-6">
        <button
          onClick={handleGoHome}
          className="hover:text-[#365FBE] transition"
        >
          Home
        </button>

        <span>/</span>

        <button
          onClick={handleGoToPortfolio}
          className="hover:text-[#365FBE] transition"
        >
          Portofolio
        </button>

        <span>/</span>

        <span className="text-[#365FBE]">{project.title}</span>
      </div>

      <div className=" grid lg:grid-cols-2 gap-15 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {project.title}
          </h1>

          <p className="text-gray-400 leading-relaxed">
            {project.fullDescription}
          </p>

          <div className="border-t border-[#365FBE]/20  pt-6 space-y-3">
            <p className="text-xs text-gray-400 tracking-widest uppercase">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1 text-xs border border-[#365FBE]/30 bg-[#0B1220] text-gray-400"
                >
                  <span aria-hidden="true" className="inline-flex">
                    {tech.icon}
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[#365FBE]/20 pt-6 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">
                Role
              </p>
              <h2 className="text-white font-semibold">{project.role}</h2>
            </div>

            <div>
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">
                Type
              </p>
              <h2 className="text-white font-semibold">{project.type}</h2>
            </div>

            <div>
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">
                Project
              </p>
              <h2 className="text-white font-semibold">
                {project.projectType}
              </h2>
            </div>

            <div>
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">
                Status
              </p>
              <h2 className="text-white font-semibold">{project.status}</h2>
            </div>
          </div>
        </div>

        <div className="items-center bg-[#0B1220] border border-[#365FBE]/30 p-4 md:p-5 shadow-xl ">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#365FBE]/30">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>

            <h2 className="text-xs md:text-xs text-gray-400 font-mono">
              {project.title.toLowerCase().replace(/\s/g, "")}
            </h2>
          </div>

          <div className="overflow-hidden border border-[#365FBE]/20 group">
            <img src={project.image} alt={project.title} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
