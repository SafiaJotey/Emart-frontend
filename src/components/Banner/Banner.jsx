import banner from '../../images/banner2.png';

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-bannerBg">
      <div className="">
        <h1 className=" text-4xl py-5">
          <span className="text-reviewColor font-bold text-6xl">Addidas, </span>{' '}
          It is more than just sales
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
