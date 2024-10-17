import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import me from "../assets/myphoto.jpg";
import AboutSkills from "./AboutSkills";
import AboutMe from "./AboutMe";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import Project from "./Project";
import Contact from "./Contact";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Resume from "../assets/Mirmansur.pdf";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="Home bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 min-h-screen mt-[-60px]">
      <div className="container mx-auto">
        <div className="home mt-28 sm:mt-24 lg:mt-32 flex flex-col lg:flex-row items-center justify-between flex-wrap p-8">
          <div
            className="home-one flex flex-col gap-2 text-white font-sans font-extrabold"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl">
              {t("home.Hello")}
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-4">
              {t("home.My Name is")} <br />
            </h2>
            <h2 className="text-2xl text-blue-600 sm:text-3xl lg:text-4xl mt-4 ">
              {" "}
              {t("home.Mirmansur")}
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-4">
              <Typewriter
                options={{
                  strings: [
                    t("home.I'm Frontend Developer"),
                    t("home.I'm Web Developer"),
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h2>
            <div className="flex gap-4 mt-3 mb-3">
              <a
                href="https://github.com/Mirmansur"
                aria-label="GitHub Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gray-800 text-gray-400 hover:text-white hover:bg-black transition-all p-4 rounded-full shadow-md hover:shadow-lg">
                  <FaGithub className="text-3xl" />
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/mirmansur-rakhmatov-46b37732b/"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gray-800 text-gray-400 hover:text-white hover:bg-sky-500 transition-all p-4 rounded-full shadow-md hover:shadow-lg">
                  <FaLinkedin className="text-3xl" />
                </button>
              </a>

              <a
                href="https://www.youtube.com/@mirmansurrakhmatov"
                aria-label="YouTube Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gray-800 text-gray-400 hover:text-white hover:bg-red-600 transition-all p-4 rounded-full shadow-md hover:shadow-lg">
                  <FaYoutube className="text-3xl" />
                </button>
              </a>

              <a
                href="https://www.instagram.com/mirmansur_developer/"
                aria-label="Instagram Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gray-800 text-gray-400 hover:text-white hover:bg-rose-600 transition-all p-4 rounded-full shadow-md hover:shadow-lg">
                  <FaInstagram className="text-3xl" />
                </button>
              </a>
            </div>
            <a
              href={Resume}
              download="Mening_Resume.pdf"
              className="inline-block"
            >
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold p-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out pt-3">
                {t("home.Resumen")}
              </button>
            </a>
          </div>

          <div
            className="home-two mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={me}
              alt="Me"
              className="rounded-full w-48 h-48  sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[430px] lg:h-[430px] object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <AboutSkills />
        <AboutMe />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
