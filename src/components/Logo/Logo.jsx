import logo from '../../images/logo.png';

const Logo = () => {
  return (
    <div className="logo flex justify-center items-center p-2">
      <img className="w-32 md:w-52 " src={logo} alt="" />
    </div>
  );
};

export default Logo;
