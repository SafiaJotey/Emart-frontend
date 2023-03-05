import { useItem } from '../../context/ProductProvider';

const Pagination = () => {
  const { pageCount, page, setPage } = useItem();

  return (
    <div className="my-5 flex justify-center">
      {[...Array(pageCount).keys()].map((number) => (
        <button
          className={
            number === page
              ? ' m-1 border-2 border-black  bg-white text-black flex justify-center items-center text-xs rounded-full w-5 h-5 '
              : 'm-1 border-2  bg-primary text-white flex justify-center items-center text-xs rounded-full w-5 h-5'
          }
          key={number}
          onClick={() => setPage(number)}
        >
          {number + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
