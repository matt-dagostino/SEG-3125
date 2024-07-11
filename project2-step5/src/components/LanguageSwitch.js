import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isKorean, setIsKorean] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng");
    if (storedLang === "ko") {
      setIsKorean(true);
    } else {
      setIsKorean(false);
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    window.location.reload(); // Reload the page to update all elements
  };

  const handleSwitchChange = (e) => {
    const newLang = e.target.checked ? "ko" : "en";
    setIsKorean(e.target.checked);
    changeLanguage(newLang);
  };

  return (
    <div className="switch text-xs relative">
      <label
        htmlFor="Toggle4"
        className="inline-flex items-center p-1 cursor-pointer bg-heading-color text-gray-100 rounded-md absolute overflow-hidden"
      >
        <input
          id="Toggle4"
          type="checkbox"
          className="hidden peer"
          checked={isKorean}
          onChange={handleSwitchChange}
        />
        <div className="slider bg-violet-600 peer-checked:bg-violet-600 peer-checked:translate-x-full transform transition-transform duration-300 rounded-xl absolute w-1/2 h-5/6"></div>
        <span className="px-4 py-2 z-10 w-1/2 text-center">ENGLISH</span>
        <span className="px-4 py-2 z-10 w-1/2 text-center">한국어</span>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
