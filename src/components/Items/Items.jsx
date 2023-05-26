import { useItem } from '../../context/ProductProvider';
const Items = (props) => {
  const { handleRemove } = useItem();
  return (
    <div className="flex justify-between items-center shadow-sm py-2 ">
      <h5 className="mr-3 text-sm ">
        {props.item.category} <br />
        <span>
          (${props.item.price}/pc, qty: {props.item.quantity} )
        </span>
      </h5>
      <h5> $ {props.item.price * props.item.quantity}</h5>
      <button onClick={() => handleRemove(props.item._id, props.item)}>
        <span className="text-gray-300 hover:text-red-700 text-xs mx-1 ">
          Remove{' '}
        </span>
      </button>
    </div>
  );
};

export default Items;
