import Vertixplants from "../assets/vertixplant.png";
import Atcs from "../assets/atcs.png";
import LanyardP from "../assets/posterlanyard.png";
import IdCard from "../assets/id_card.png";

import {
  FaReact,
  FaLaravel,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiFilament,
  SiLaragon,
  SiLeaflet,
} from "react-icons/si";

export const projects = [
  {
    id: "vertixplant",
    title: "Vertixplant UI",
    category: "UI/UX",
    role: "UI/UX Designer",
    type: "Mobile App Design",
    projectType: "Project Kuliah",
    status: "Completed",
    image: Vertixplants,
    description:
      "Desain UI aplikasi penyiraman tanaman otomatis berbasis IoT dengan tampilan modern dan interaktif.",
    fullDescription:
      "VertixPlant adalah aplikasi berbasis Internet of Things yang hadir untuk memudahkan petani dalam mengelola penyiraman tanaman secara lebih praktis dan efisien. Desain antarmuka dibuat dengan pendekatan minimalis, fokus pada kemudahan penggunaan, serta memberikan pengalaman visual yang bersih dan profesional. Setiap elemen dirancang untuk meningkatkan efisiensi interaksi pengguna.",
    tech: [{ name: "Figma", icon: <FaFigma /> }],
  },

  {
    id: "atcs",
    title: "Area Traffic Control System",
    category: "Web Development",
    role: "Fullstack Developer",
    type: "Web Application",
    projectType: "Project Skripsi",
    status: "Completed",
    image: Atcs,
    description:
      "Website monitoring lalu lintas berbasis ATCS dengan dashboard interaktif dan data real-time.",
    fullDescription:
      "Website ATCS (Area Traffic Control System) merupakan sistem monitoring lalu lintas yang menampilkan kondisi di berbagai persimpangan secara real-time. Sistem ini terintegrasi dengan beberapa titik CCTV lalu lintas untuk membantu masyarakat dalam merencanakan perjalanan secara lebih efektif. Sistem ini dibangun menggunakan framework Laravel dan teknologi modern untuk memastikan performa yang optimal dan tampilan yang responsif.",
    tech: [
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "Filament", icon: <SiFilament /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node JS", icon: <FaNodeJs /> },
      { name: "Laragon", icon: <SiLaragon /> },
      { name: "Leaflet Js", icon: <SiLeaflet /> },
    ],
  },

  {
    id: "lanyard",
    title: "Lanyard Design",
    category: "Lainnya",
    role: "Graphic Designer",
    type: "Print Design",
    projectType: "Personal Project",
    status: "Completed",
    image: LanyardP,
    description:
      "Desain lanyard minimalis dengan konsep visual modern dan branding yang kuat.",
    fullDescription:
      "Desain lanyard ini dibuat dengan pendekatan visual minimalis namun tetap menonjolkan identitas brand. Pemilihan warna, tipografi, dan layout dirancang agar terlihat profesional serta mudah dikenali. Cocok digunakan untuk kebutuhan event, perusahaan, maupun identitas organisasi.",
    tech: [{ name: "Figma", icon: <FaFigma /> }],
  },

  {
    id: "idcard",
    title: "ID Card",
    category: "Lainnya",
    role: "Graphic Designer",
    type: "Print Design",
    projectType: "Personal Project",
    status: "Completed",
    image: IdCard,
    description:
      "Desain ID card modern dengan tampilan clean dan profesional untuk memperkuat identitas visual.",
    fullDescription:
      "Desain ID card ini dirancang dengan pendekatan visual yang modern, clean, dan profesional untuk memperkuat identitas brand. Fokus utama terletak pada keterbacaan informasi, komposisi layout yang seimbang, serta penggunaan elemen visual yang minimalis namun tetap elegan. Selain itu, desain ini juga mempertimbangkan aspek fungsional seperti kemudahan identifikasi dan fleksibilitas penggunaan dalam berbagai kebutuhan perusahaan atau organisasi.",
    tech: [{ name: "Figma", icon: <FaFigma /> }],
  },
];
