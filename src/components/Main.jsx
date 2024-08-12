import React from "react";
import HeroImage from '../assets/PORTFOLIO.jpg';

const Main = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img
        src={HeroImage}
        alt="Profile"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Sweety Singh
        </span>
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        The journey of growth is a marathon, not a sprint. Patience and perseverance are key.
      </p>
      <div className='mt-8 space-x-4'>
        <a
          href="mailto:singhh.sweetyy@gmail.com"
          className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Hire Me
        </a>
        <a
          href="https://drive.google.com/file/d/1RBtqX-s9onyirTvslXgsrJxp4ThqFmAx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className='inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Main;
