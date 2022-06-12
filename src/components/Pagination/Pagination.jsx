import useItem from '../../hooks/useItem';

const Pagination = () => {
  const { pageCount, page, setPage } = useItem();

  return (
    <div>
      {[...Array(pageCount).keys()].map((number) => (
        <button
          className={
            number === page
              ? 'py-1 px-3 m-1 border-2 border-black rounded-lg bg-white text-black'
              : 'py-1 px-3 m-1 border-2 rounded-lg bg-secondary text-white'
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
