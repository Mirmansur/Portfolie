import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import icon1 from "../assets/html.svg";
import icon2 from "../assets/css.svg";
import icon3 from "../assets/js.svg";
import icon4 from "../assets/react.svg";
import icon5 from "../assets/redux.svg";
import icon6 from "../assets/bootsrap.svg";
import icon7 from "../assets/tailwind.svg";
import icon8 from "../assets/sass.svg";
import icon9 from "../assets/git.svg";
import icon11 from "../assets/github.svg";
import icon12 from "../assets/vue3.png";
import icon13 from "../assets/next2.png";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AboutSkills = () => {
  let { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  const icons = [
    { src: icon12, alt: "Vue.js" },
    { src: icon13, alt: "Next.js" },
    { src: icon4, alt: "React" },
    { src: icon3, alt: "JavaScript" },
    { src: icon7, alt: "Tailwind" },
    { src: icon5, alt: "Redux" },
    { src: icon8, alt: "Sass" },
    { src: icon9, alt: "Git" },
    { src: icon11, alt: "GitHub" },
    { src: icon1, alt: "HTML" },
    { src: icon2, alt: "CSS" },
    { src: icon6, alt: "Bootstrap" },

    {
      src: "https://www.svgrepo.com/show/353401/ant-design.svg",
      alt: "Ant Design",
    },
    {
      src: "https://www.svgrepo.com/show/374144/typescript.svg",
      alt: "TypeScript",
    },
  ];

  return (
    <div className="About py-10">
      {" "}
      <div className="container mx-auto px-4">
        <div className="about text-center">
          <div
            className="about-one mb-8"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-4xl font-semibold text-blue-500 mb-4">
              {t("skills.My Tech Stack")}
            </h1>
            <p className="text-xl text-white font-semibold">
              {t("skills.Technologies I’ve been working with recently")}
            </p>
          </div>

          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={2500}
            swipeable
            emulateTouch
            className="rounded-lg "
            transitionTime={600}
            centerMode
            centerSlidePercentage={20}
          >
            {icons.map((icon, index) => (
              <div key={index} className="p-6">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto object-contain"
                  data-aos="flip-left"
                />
                <p className="text-lg font-semibold mt-4 text-white">
                  {icon.alt}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;
