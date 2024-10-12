import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  let { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="about" className="AboutMe">
      <div className="container mx-auto px-4">
        <div className="aboutme flex flex-col items-center">
          <div
            className="aboutme-one text-center p-8 sm:p-12 lg:p-16 rounded-lg  bg-opacity-75 "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-sky-500 mb-6">
              {t("aboutMe.About Me")}
            </h1>
            <p
              className="text-md sm:text-lg lg:text-xl font-sans font-medium text-gray-700 leading-relaxed"
              data-aos="zoom-in-down"
              data-aos-duration="2000"
            >
              {t("aboutMe.Description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
