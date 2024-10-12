import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import admin from "../assets/adminpanel.png";
import spotify from "../assets/spotify.png";
import flegs from "../assets/flegs.png";
import furniro from "../assets/furniro.png";
import dummin from "../assets/dummin.png";
import alishop from "../assets/alishop.png";
import kino from "../assets/kino.png";
import birga from "../assets/birga.png";
import fruts from "../assets/fruts.png";
import icon1 from "../assets/html.svg";
import icon2 from "../assets/css.svg";
import icon3 from "../assets/js.svg";
import icon4 from "../assets/react.svg";
import icon5 from "../assets/redux.svg";
import icon6 from "../assets/bootsrap.svg";
import icon7 from "../assets/tailwind.svg";
import icon8 from "../assets/sass.svg";
import icon11 from "../assets/github.svg";
import akar from "../assets/akar.svg";
import vue from "../assets/vue3.png";
import next from "../assets/next2.png";
import { useTranslation } from "react-i18next";

const projects = [
  {
    img: spotify,
    name: "Spotify Clone",
    link: "https://n58-7-mounth-exam.vercel.app/",
    codeLink: "https://github.com/Mirmansur/N58-7-Mounth-Exam.git",
    techStack: [icon1, icon7, icon3, icon4, icon5],
  },
  {
    img: fruts,
    name: "Min Shop",
    link: "https://fruits-red-zeta.vercel.app/",
    codeLink: "https://github.com/Mirmansur/Fruits",
    techStack: [icon7, icon3, icon4, icon5],
  },
  {
    img: alishop,
    name: "Alihop Clone",
    link: "https://vue-2-lesson-project-alishop.vercel.app/#/",
    codeLink: "https://github.com/Mirmansur/vue-2-lesson-project-alishop",
    techStack: [icon7, icon3, vue, icon5],
  },
  {
    img: kino,
    name: "Seach Movie",
    link: "https://vou-first-lesson.vercel.app/",
    codeLink: "https://github.com/Mirmansur/Vou-first-lesson",
    techStack: [icon7, icon3, vue],
  },
  {
    img: birga,
    name: "Birga ",
    link: "https://birga-project.vercel.app/",
    codeLink: "https://github.com/Mirmansur/birga-project",
    techStack: [icon7, icon3, next, icon5],
  },
  {
    img: dummin,
    name: "Dummin.json",
    link: "https://dummy-json-drab.vercel.app/",
    codeLink: "https://github.com/Mirmansur/dummy.json",
    techStack: [icon5, icon7, icon3, icon4],
  },
  {
    img: admin,
    name: "Admin Panel",
    link: "https://n58-6-mouth-exam-two.vercel.app/",
    codeLink: "https://github.com/Mirmansur/N58-6-mouth-Exam.git",
    techStack: [icon1, icon2, icon3, icon4],
  },
  {
    img: furniro,
    name: "Wold-Country",
    link: "https://furniro-all.vercel.app/",
    codeLink: "https://github.com/Mirmansur/FurniroAll.git",
    techStack: [icon1, icon2, icon3, icon6],
  },
  {
    img: flegs,
    name: "Flegs",
    link: "https://wold-countrys.vercel.app/",
    codeLink: "https://github.com/Mirmansur/wold-countrys.git",
    techStack: [icon1, icon8, icon3],
  },
];

const Project = () => {
  let { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="product" className="Project py-16">
      <div className="container mx-auto px-4">
        <div className="project mt-20">
          <div
            className="pro-one flex flex-col items-center justify-center mb-12"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="font-sans font-extrabold text-sky-500 text-4xl mb-4">
              {t("myproject.Projects")}
            </h1>
            <p className="font-sans font-bold text-gray-300 text-xl">
              {t("myproject.Things I’ve built so far")}
            </p>
          </div>

          {/* Grid container for projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="twos-one bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden"
                data-aos={`zoom-in-${index % 2 === 0 ? "right" : "left"}`}
              >
                {/* Project Image */}
                <div className="twos-img">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-[220px] object-cover rounded-t-2xl"
                  />
                </div>

                {/* Project Details */}
                <div className="twos-about flex flex-col p-4 text-gray-200">
                  <h2 className="about-one font-sans font-black text-2xl mb-2 text-sky-400">
                    {project.name}
                  </h2>
                  <p className="about-two font-sans font-light text-lg leading-relaxed">
                    {t(
                      "projet-about.This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                    )}
                  </p>
                  <div className="about-three flex items-center mt-3">
                    <p className="font-sans font-normal text-lg text-gray-400">
                      {t("projet-about.Tech stack")}
                    </p>
                    <div className="tech-two flex items-center gap-2 ml-3">
                      {project.techStack.map((icon, idx) => (
                        <img
                          key={idx}
                          src={icon}
                          alt="Tech Icon"
                          className="w-[25px] h-[25px]"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="about-four flex items-center justify-between mt-4 text-sky-500">
                    <div className="akar-one flex items-center gap-2">
                      <img src={akar} alt="Live Preview" />
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("projet-about.Live Preview")}
                      </a>
                    </div>
                    <div className="akar-two flex items-center gap-2">
                      <img
                        src={icon11}
                        alt="View Code"
                        className="w-[20px] h-[20px]"
                      />
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("projet-about.View Code")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
