import React from "react";
import { useState } from "react";
import { ReactComponent as Onestar } from "../img/1star.svg";
import { ReactComponent as Twostar } from "../img/2star.svg";
import { ReactComponent as Threestar } from "../img/3star.svg";
import { ReactComponent as Fourstar } from "../img/4star.svg";
import { ReactComponent as Fivestar } from "../img/5star.svg";
import { IoMdHeart, IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LikedCard(props) {
  const [liked, setLiked] = useState(false);
  const { t } = useTranslation();
  const toggleLike = () => {
    setLiked(!liked);
  };
  const images = {
    shawarma:
      "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
    taco: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
    pasta:
      "https://www.mrsjoneskitchen.com/wp-content/uploads/2022/08/one-pot-creamy-sausage-pasta.jpg",
  };

  return (
    <div className="flex flex-col max-w-lg text-heading-color shadow-md">
      <img
        src={images[props.item]}
        alt={props.item}
        className="w-full h-48 object-cover rounded-tl-xl rounded-tr-xl"
      />
      <div className="bg-white  rounded-br-xl rounded-bl-xl flex flex-col p-4 gap-4">
        <h2 className="font-bold text-lg">{props.title}</h2>
        <p className="font">{props.description}</p>
        <div className="flex flex-row justify-between items-center">
          {props.stars === 1 && <Onestar />}
          {props.stars === 2 && <Twostar />}
          {props.stars === 3 && <Threestar />}
          {props.stars === 4 && <Fourstar />}
          {props.stars === 5 && <Fivestar />}
          <div onClick={toggleLike} className="cursor-pointer">
            {liked ? (
              <IoIosHeartEmpty className="text-3xl text-red-700" />
            ) : (
              <IoMdHeart className="text-3xl text-red-700" />
            )}
          </div>
        </div>
        <div className="flex justify-between justify-center items-center">
          <p className=" text-xs font-bold uppercase">{props.serving}</p>

          <Link
            to={{
              pathname: `/recipe/${props.title}`, // Example URL structure
              state: { recipe: props },
            }}
            className="border uppercase font-semibold border-heading-color rounded-2xl py-1 px-3"
          >
            {t("lists.viewRecipe")}
          </Link>
        </div>
      </div>
    </div>
  );
}
