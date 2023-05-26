import React from 'react';
import banner2 from './../../images/banner2.png';
import banner3 from './../../images/banner3 .png';
import banner4 from './../../images/banner4.png';
const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="relative"
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
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
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
        >
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
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
        >
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
        </div>
      </div>
      <button
        className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleControls"
        data-te-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleControls"
        data-te-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Carousel;
