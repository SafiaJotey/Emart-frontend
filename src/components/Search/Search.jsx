import { FaShoppingCart } from 'react-icons/fa';
import useItem from '../../hooks/useItem';

const Search = () => {
  const { handleSearch, cartQuantity } = useItem();
  return (
    <div className="bg-secondary flex justify-between items-center py-2 px-2 md:px-5 ">
      <input
        className="w-full md:w-3/5 p-2 rounded-sm "
        type="text"
        placeholder="Search by name"
        onChange={handleSearch}
      />

      <div className="flex justify-center mx-1 ">
        <FaShoppingCart className=" text-white text-2xl " />
        <span className=" text-white text-sm  mx-1 ">{cartQuantity}</span>
      </div>
    </div>
  );
};

export default Search;
