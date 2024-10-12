import "../i18n";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Header = () => {
  let { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <header className="Header fixed bg-gradient-to-r from-gray-900 via-sky-900 to-gray-900 top-0 right-0 left-0 z-10 shadow-lg">
      <div className="container mx-auto">
        <div className="header flex items-center justify-between p-4 lg:px-0">
          <div className="logo">
            <h1 className="font-bold text-3xl text-gray-300 ">Mirmansur</h1>
          </div>

          <input className="peer hidden" type="checkbox" id="hamburger" />
          <label
            className="peer-checked:bg-gray-800 block relative cursor-pointer lg:hidden border-2 border-sky-500 p-3 rounded-md transition-all"
            htmlFor="hamburger"
          >
            <div className="m-auto w-6 h-0.5 rounded bg-gray-300 transition-all duration-300 peer-checked:bg-white"></div>
            <div className="m-auto mt-2 w-6 h-0.5 rounded bg-gray-300 transition-all duration-300 peer-checked:bg-white"></div>
          </label>

          <div className="-translate-y-full peer-checked:translate-y-0 lg:translate-y-0 inset-0 fixed lg:static pt-20 lg:pt-0 lg:bg-transparent -z-10 lg:z-10 lg:h-auto transition-all duration-300 ">
            <div className="bg-gray-900 shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col lg:items-center lg:flex-row px-6 space-y-4 lg:space-y-0 lg:space-x-12 ">
              <a href="#about">
                <h3 className="font-sans text-gray-400 transition-[0.4s] hover:text-sky-500 hover:font-medium">
                  {t("navbar.About Me")}
                </h3>
              </a>
              <a href="#product">
                <h3 className="font-sans text-gray-400 transition-[0.4s] hover:text-sky-500 hover:font-medium">
                  {t("navbar.Project")}
                </h3>
              </a>
              <a href="#contact">
                <h3 className="font-sans text-gray-400 transition-[0.4s] hover:text-sky-500 hover:font-medium">
                  {t("navbar.Contact")}
                </h3>
              </a>

              <select
                className="outline-none bg-gray-800 text-gray-400 w-24 p-2 rounded-md shadow-lg border border-gray-600"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                aria-label="Select Language"
              >
                <option className="bg-gray-700" value="en">
                  Eng
                </option>
                <option className="bg-gray-700" value="ru">
                  Рус
                </option>
                <option className="bg-gray-700" value="uz">
                  Uz
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
