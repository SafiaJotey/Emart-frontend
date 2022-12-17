import React from 'react';
import banner1 from '../../images/banner1.png';
import banner2 from '../../images/banner2.png';
import banner3 from '../../images/banner3 .png';
import banner4 from '../../images/banner4.png';
const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full  ">
          <div className=" h-[300px] ">
            {' '}
            <h1 className=" px-2 text-center md:text-start text-xl md:text-3xl ">
              <span className="text-reviewColor font-bold text-3xl md:text-6xl">
                EMART,{' '}
              </span>{' '}
              It is more than just sales
            </h1>
            <div className="w-full flex justify-center ">
              <img src={banner1} className="px-4 py-2" alt="banner" />
            </div>
          </div>
        </div>
        <div class="carousel-item  relative float-left w-full ">
          <div className="w-full flex justify-between items-start   ">
            <div className="bg-shape rounded-full w-[300px] h-[300px] my-2">
              {' '}
              <img src={banner2} className="p-4" alt="banner" />
            </div>
            <div className="px-2  text-start">
              <h1 className=" px-2 font-bold text-start md:text-start  text-2xl md:text-3xl py-2">
                <span className="text-secondary"> Men's shoes</span> including{' '}
                <br />
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

        <div class="carousel-item  relative float-left w-full ">
          <div className="w-full flex justify-between items-center    ">
            <div className="bg-shape rounded-full w-[300px] h-[300px] my-2">
              {' '}
              <img src={banner4} className="p-4" alt="banner" />
            </div>
            <div className="px-12  text-start">
              <h1 className=" px-2 font-bold text-start md:text-start  text-2xl md:text-3xl py-2">
                <span className="text-secondary"> Shop the newest </span>styles{' '}
                <br />
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
          </div>
        </div>
        <div class="carousel-item  relative float-left w-full ">
          <div className="w-full flex justify-between items-center    ">
            <div className="px-12  text-start">
              <h1 className=" px-2 font-bold text-start md:text-start  text-2xl md:text-3xl py-2">
                <span className="text-secondary"> Upgrade your runs</span> with{' '}
                <br />
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
    </div>
  );
};

export default Carousel;
