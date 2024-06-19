import React from 'react'
import shawarma from "../img/shawarma.jpg";
import taco from "../img/taco.jpg";
import pasta from "../img/pasta.jpg";
import { ReactComponent as Onestar } from '../img/1star.svg';
import { ReactComponent as Twostar } from '../img/2star.svg';
import { ReactComponent as Threestar } from '../img/3star.svg';
import { ReactComponent as Fourstar } from '../img/4star.svg';
import { ReactComponent as Fivestar } from '../img/5star.svg';

export default function TrendingCard(props) {
    const images = {
        shawarma: shawarma,
        taco: taco,
        pasta: pasta,
      };

  return (
    <div className='flex flex-col max-w-lg text-heading-color shadow-md'>
      <img src={images[props.item]} alt={props.item} className='w-full h-48 object-cover rounded-tl-xl rounded-tr-xl'/>
      <div className='bg-white  rounded-br-xl rounded-bl-xl flex flex-col p-4 gap-4'>
        <h2 className='font-bold text-lg'>{props.title}</h2>
        <p className='font'>{props.description}</p>
        {props.stars === 1 && <Onestar />}
      {props.stars === 2 && <Twostar />}
      {props.stars === 3 && <Threestar />}
      {props.stars === 4 && <Fourstar />}
      {props.stars === 5 && <Fivestar />}
        <div className='flex justify-between justify-center items-center'>
            <p className=' text-xs font-bold uppercase'>{props.serving}</p>
            <a href='/recipes' className='border uppercase font-semibold border-heading-color rounded-2xl py-1 px-3'> View Recipe</a>
        </div>
      </div>
    </div>
  )
}
