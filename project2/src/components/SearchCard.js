import React from "react";
import { ReactComponent as Onestar } from "../img/1star.svg";
import { ReactComponent as Twostar } from "../img/2star.svg";
import { ReactComponent as Threestar } from "../img/3star.svg";
import { ReactComponent as Fourstar } from "../img/4star.svg";
import { ReactComponent as Fivestar } from "../img/5star.svg";
import { Link } from "react-router-dom";

export default function SearchCard(props) {
  return (
    <div className="flex flex-col max-w-md text-heading-color shadow-md">
      <Link
        to={{
          pathname: `/recipe/${props.title}`, // Example URL structure
          state: { recipe: props },
        }}
        className=""
      >
        <img
          src={props.image}
          alt={props.image}
          className="w-full h-48 object-cover rounded-tl-xl rounded-tr-xl"
        />
        <div className="bg-white rounded-br-xl rounded-bl-xl flex flex-col min-h-56 p-4 gap-4">
          <h2 className="font-bold text-lg">{props.title}</h2>
          <p className="font">{props.description}</p>
          {props.stars === 1 && <Onestar />}
          {props.stars === 2 && <Twostar />}
          {props.stars === 3 && <Threestar />}
          {props.stars === 4 && <Fourstar />}
          {props.stars === 5 && <Fivestar />}
          <div className="flex justify-between justify-center items-center">
            <p className=" text-xs font-bold uppercase">{props.serving}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
