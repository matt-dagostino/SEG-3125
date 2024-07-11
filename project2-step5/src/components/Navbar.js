import React from "react";
import { ReactComponent as Icon } from "../img/logo.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between p-12 pb-0 items-center justify-center">
      <Icon className="hidden 2xl:block cursor-pointer" onClick={() => navigate("/")}/>
      <div className="flex gap-8">
        <a
          href="/"
          className={
            props.location === "home"
              ? "font-bold text-black"
              : "text-gray-500 hover:text-blue-900"
          }
        >
          {t("navbar.home")}
        </a>
        <a
          href="/recipes"
          className={
            props.location === "recipes"
              ? "font-bold text-black"
              : "text-gray-500 hover:text-blue-900"
          }
        >
          {t("navbar.explore")}
        </a>
        <a
          href="/assistant"
          className={
            props.location === "assistant"
              ? "font-bold text-black"
              : "text-gray-500 hover:text-blue-900"
          }
        >
          {t("navbar.cooking")}
        </a>
        <a
          href="/list"
          className={
            props.location === "list"
              ? "font-bold text-black"
              : "text-gray-500 hover:text-blue-900"
          }
        >
          {t("navbar.list")}
        </a>
        <a
          href="/zoom"
          className={
            props.location === "zoom"
              ? "font-bold text-black"
              : "text-gray-500 hover:text-blue-900"
          }
        >
          {t("navbar.zoom")}
        </a>
        <a
          href="/faq"
          className={
            props.location === "faq"
              ? "font-bold text-black"
              : "text-gray-500 hover:text-blue-900"
          }
        >
          {t("navbar.faq")}
        </a>
      </div>
      <a
        href="/addrecipe"
        className="bg-heading-color text-white text-sm py-2 px-4 rounded-2xl hover:bg-blue-900"
      >
        {t("navbar.recipe")}
      </a>
    </div>
  );
}

export default Navbar;
