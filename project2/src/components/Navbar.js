import React from 'react'
import { ReactComponent as Icon } from '../img/logo.svg';

function Navbar(props) {
    return (
      <div className='w-full flex justify-between p-12 pb-0'>
        <Icon />
        <div className='flex gap-16 w-1/3'>
          <a href='/' className={props.location === 'home' ? 'font-bold text-black' : 'text-gray-500 hover:text-blue-900'}>HOME</a>
          <a href='/recipes' className={props.location === 'recipes' ? 'font-bold text-black' : 'text-gray-500 hover:text-blue-900'}>EXPLORE RECIPES</a>
          <a href='/assistant' className={props.location === 'assistant' ? 'font-bold text-black' : 'text-gray-500 hover:text-blue-900'}>COOKING HELP</a>
        </div>
        <a href='/addrecipe' className='bg-heading-color text-white text-sm py-2 px-4 rounded-2xl hover:bg-blue-900'>+ ADD RECIPE</a>
      </div>
    );
  }

export default Navbar
