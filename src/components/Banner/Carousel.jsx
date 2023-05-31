import React, { useEffect, useState } from 'react';
import banner2 from './../../images/banner2.png';
import banner3 from './../../images/banner3 .png';
import banner4 from './../../images/banner4.png';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousel = () => {
  const slides = [
    {
      url: (
        <div className="w-full flex justify-between items-center   ">
          <div className="bg-shape rounded-full w-[300px] h-[300px] my-2">
            {' '}
            <img src={banner2} className="p-4" alt="banner" />
          </div>
          <div className="px-12  text-start">
            <h1 className=" px-2 font-bold text-start md:text-start  text-2xl md:text-3xl py-2">
              <span className="text-reviewColor text-4xl"> Men's shoes</span>{' '}
              including <br />
              casual sneakers
            </h1>
            <h3 className=" px-2 font-semibold text-start md:text-start text-xl md:text-2xl py-2">
              Starting From
            </h3>
            <h2 className="text-reviewColor px-2 font-semibold text-start md:text-start text-2xl md:text-3xl py-2">
              Only $ 150
            </h2>
            <button className="px-8 py-3 text-white rounded-lg text-start bg-primary text-sm font-bold mx-2 my-4">
              Shop Now
            </button>
          </div>
        </div>
      ),
    },
    {
      url: (
        <div className="w-full flex justify-between items-center    ">
          <div className="px-12  text-start">
            <h1 className=" font-bold text-start md:text-start  text-2xl md:text-3xl py-2">
              <span className="text-reviewColor text-4xl">
                {' '}
                Shop the newest{' '}
              </span>
              styles <br />
              before they're gone
            </h1>
            <h3 className=" px-2 font-semibold text-start md:text-start text-xl md:text-2xl py-2">
              Starting From
            </h3>
            <h2 className="text-reviewColor px-2 font-semibold text-start md:text-start text-2xl md:text-3xl py-2">
              Only $ 17$
            </h2>
            <button className="px-8 py-3 text-white rounded-lg bg-primary text-sm font-bold  mx-2 my-4">
              Shop Now
            </button>
          </div>
          <div className="bg-shape rounded-full w-[300px] h-[300px] my-2">
            {' '}
            <img src={banner4} className="p-4" alt="banner" />
          </div>
        </div>
      ),
    },
    {
      url: (
        <div className="w-full flex justify-between items-center    ">
          <div className="px-12  text-start">
            <h1 className=" px-2 font-bold text-start md:text-start  text-2xl md:text-3xl py-2">
              <span className="text-reviewColor text-4xl"> Upgrade runs</span>{' '}
              with <br />
              the EMART Ultraboost.
            </h1>
            <h3 className=" px-2 font-semibold text-start md:text-start text-xl md:text-2xl py-2">
              Starting From
            </h3>
            <h2 className="text-reviewColor px-2 font-semibold text-start md:text-start text-2xl md:text-3xl py-2">
              Only $ 56
            </h2>
            <button className="px-8 py-3 text-white rounded-lg bg-primary text-sm font-bold  mx-2 my-4 text-start">
              Shop Now
            </button>
          </div>
          <div className="bg-shape rounded-full w-[300px] h-[300px] z-0  my-2">
            {' '}
            <img src={banner3} className=" w-8/12 ml-12 mb-2" alt="banner" />
          </div>
        </div>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]); // Only re-run the effect when currentIndex changes

  return (
    <div className=" relative group">
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
        {slides[currentIndex].url}
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
