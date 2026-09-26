import { lazy, Suspense } from "react";
import CountUp from "../About/CountUp";
const Lanyard = lazy(() => import("../About/Lanyard"));

const stats = [
  {
    data: "5+",
    title: "Project Complete",
  },
  {
    data: "1+",
    title: "Years of Experience",
  },
];

export default () => {
  return (
    <section id="About" className="bg-[#0B1220]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="items-center gap-10 lg:gap-x-20 lg:flex">
          <div className="flex-1 flex justify-center relative h-[58svh] sm:h-[58svh] md:h-[58svh] lg:h-[70svh] overflow-hidden">
            <Suspense fallback={<div className="w-full h-full" />}>
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </Suspense>
          </div>

          <div className="py-10 sm:py-12 md:py-14 w-full space-y-5  md:mt-0 lg:max-w-2xl">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              <span className="text-white">About </span>
              <span className="text-[#365FBE] font-bold">Me</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-base md:text-xl lg:text-lg leading-relaxed max-w-full">
              Seorang UI/UX designer dan web developer yang berfokus pada
              pengalaman pengguna serta berorientasi pada kualitas dalam setiap
              hasil yang dikerjakan. Dengan pendekatan yang terstruktur dan
              perhatian terhadap detail, saya terbiasa mengembangkan solusi
              digital yang tidak hanya berjalan dengan baik, tetapi juga
              memiliki tampilan yang menarik dan mudah digunakan.
            </p>
            <blockquote className="p-4 my-6 md:my-8 border-l-2 border-[#365FBE] bg-[#020617]">
              <p className="text-base sm:text-base italic leading-relaxed text-white">
                “Don’t compare your chapter 1 to someone else’s chapter 10.”
              </p>
            </blockquote>
            <div className="flex gap-6 sm:gap-10 pt-4 flex-wrap">
              {stats.map((item, idx) => (
                <div key={idx}>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-1">
                    <CountUp
                      from={0}
                      to={parseInt(item.data)}
                      separator=","
                      direction="up"
                      duration={2}
                    />
                    +
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
