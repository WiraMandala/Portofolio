import { useRef, useState } from "react";
import { FiMail, FiGithub, FiArrowUpRight, FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertTitle,
} from "./Alert";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const emailjs = (await import("@emailjs/browser")).default;
    emailjs
      .sendForm(
        "service_f3z5frk",
        "template_ar2fiai",
        form.current,
        "sFqJ06vu3SjMb62l2",
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(null), 3000);
        },
        (error) => {
          console.log(error);
          setStatus("error");
          setTimeout(() => setStatus(null), 3000);
        },
      );
  };

  return (
    <section
      id="Contact"
      className="px-4 py-16 sm:px-6 md:px-8 md:px-10 lg:px-16 lg:px-24 2xl:px-32 bg-[#0B1220]"
    >
      {status && (
        <div
          className="fixed z-50
  top-4 right-4 left-4
  sm:left-auto sm:right-5 sm:w-[320px]"
        >
          <Alert status={status === "success" ? "success" : "error"}>
            <AlertIndicator />
            <AlertContent>
              <AlertTitle>
                {status === "success" ? "Success" : "Error"}
              </AlertTitle>
              <AlertDescription>
                {status === "success"
                  ? "Pesan berhasil dikirim"
                  : "Gagal mengirim"}
              </AlertDescription>
            </AlertContent>
          </Alert>
        </div>
      )}
      <div className="text-left md:text-left lg:text-center lg:max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold">
          <span className="text-white">Let’s </span>
          <span className="text-[#365FBE] font-bold">Connect</span>
        </h2>
        <p className="text-gray-300 text-base md:text-xl md:mb-10 lg:text-lg mt-3 lg:mb-15">
          Punya ide, project, atau peluang kerja? Mari diskusikan dan kita
          wujudkan menjadi produk digital yang menarik, fungsional, dan
          berkualitas.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <a
            href="mailto:wiramandala21@gmail.com"
            className="group relative border border-[#365FBE]/30 bg-[#020617] p-6 hover:border-[#365FBE] transition overflow-hidden"
          >
            <span className="absolute top-4 right-4 text-xs text-gray-400 font-mono">
              01
            </span>
            <div className="w-12 h-12 flex items-center justify-center border border-[#365FBE]/30 text-[#365FBE] text-xl mb-6">
              <FiMail aria-hidden="true" />
            </div>
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2 font-mono">
              Direct Contact
            </p>
            <h3 className="text-2xl font-semibold text-white mb-1">Email</h3>
            <p className="text-gray-400 text-sm">wiramandala21@gmail.com</p>
            <span className="absolute bottom-4 right-4 text-[#365FBE] group-hover:translate-x-1 transition">
              <FiArrowUpRight aria-hidden="true" />
            </span>
          </a>

          <a
            href="https://instagram.com/wramndlaaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative border border-[#365FBE]/30 bg-[#020617] p-6 hover:border-[#365FBE] transition overflow-hidden"
          >
            <span className="absolute top-4 right-4 text-xs text-gray-400 font-mono">
              02
            </span>
            <div className="w-12 h-12 flex items-center justify-center border border-[#365FBE]/30 text-[#365FBE] text-xl mb-6">
              <FiInstagram aria-hidden="true" />
            </div>
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2 font-mono">
              Personal Profile
            </p>
            <h3 className="text-2xl font-semibold text-white mb-1">
              Instagram
            </h3>
            <p className="text-gray-400 text-sm">@wramndlaaaa</p>
            <span className="absolute bottom-4 right-4 text-[#365FBE] group-hover:translate-x-1 transition">
              <FiArrowUpRight aria-hidden="true" />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/wira-mandala-502864368/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative border border-[#365FBE]/30 bg-[#020617] p-6 hover:border-[#365FBE] transition overflow-hidden"
          >
            <span className="absolute top-4 right-4 text-xs text-gray-400 font-mono">
              03
            </span>
            <div className="w-12 h-12 flex items-center justify-center border border-[#365FBE]/30 text-[#365FBE] text-xl mb-6">
              <FaLinkedinIn aria-hidden="true" />
            </div>
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2 font-mono">
              Professional Profile
            </p>
            <h3 className="text-2xl font-semibold text-white mb-1">LinkedIn</h3>
            <p className="text-gray-400 text-sm">@Wira Mandala</p>
            <span className="absolute bottom-4 right-4 text-[#365FBE] group-hover:translate-x-1 transition">
              <FiArrowUpRight aria-hidden="true" />
            </span>
          </a>

          <a
            href="https://github.com/WiraMandala"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative border border-[#365FBE]/30 bg-[#020617] p-6 hover:border-[#365FBE] transition overflow-hidden"
          >
            <span className="absolute top-4 right-4 text-xs text-gray-400 font-mono">
              04
            </span>
            <div className="w-12 h-12 flex items-center justify-center border border-[#365FBE]/30 text-[#365FBE] text-xl mb-6">
              <FiGithub aria-hidden="true" />
            </div>
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2 font-mono">
              Project Repository
            </p>
            <h3 className="text-2xl font-semibold text-white mb-1">GitHub</h3>
            <p className="text-gray-400 text-sm">@WiraMandala</p>
            <span className="absolute bottom-4 right-4 text-[#365FBE] group-hover:translate-x-1 transition">
              <FiArrowUpRight aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="border border-[#365FBE]/30 bg-[#020617] hover:border-[#365FBE] p-8">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
            Send Message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Name</label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Wira Satria Mandala"
                required
                className="w-full px-4 py-2 border border-[#365FBE]/30 text-white focus:border-[#365FBE] bg-[#0B1220] outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Wiramandala21@gmail.com"
                required
                className="w-full px-4 py-2 border border-[#365FBE]/30 text-white focus:border-[#365FBE] bg-[#0B1220] outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                autoComplete="off"
                placeholder="Halo Wira, saya ingin berdiskusi lebih lanjut mengenai…"
                required
                className="w-full px-4 py-2 border border-[#365FBE]/30 text-white focus:border-[#365FBE] bg-[#0B1220] outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#365FBE] text-white hover:bg-[#2f55a8] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
