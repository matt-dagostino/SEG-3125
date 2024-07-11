import React from "react";
import { ReactComponent as Icon } from "../img/logo2.svg";
import { ReactComponent as SocialMedia } from "../img/social media.svg";

function Footer() {
  return (
    <div className="bg-footer-color text-white w-full flex p-12 pl-32">
      <div className="flex flex-col gap-4 w-2/5">
        <Icon />
        <p className="text-xs">Craft delicious memories.</p>
      </div>
      <div className="w-1/5 flex flex-col gap-2">
        <p className="font-bold">About us</p>
        <a href="/" className="text-xs">
          About Dish Discovery
        </a>
        <a href="/" className="text-xs">
          Privacy Policy
        </a>
        <a href="/" className="text-xs">
          Terms of service
        </a>
      </div>
      <div className="w-1/5 flex flex-col gap-2">
        <p className="font-bold">Services</p>
        <a href="/recipes" className="text-xs">
          Recipes
        </a>
        <a href="/assistant" className="text-xs">
          Cooking help
        </a>
        <a href="/addrecipe" className="text-xs">
          Add Recipe
        </a>
      </div>
      <div className="w-1/5 flex flex-col gap-2">
        <p className="font-bold">Contact Us</p>
        <a href="/" className="flex gap-2">
          <SocialMedia className="w-2/5" />
        </a>
        <p className="text-xs">2024 Dish Discovery - All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
