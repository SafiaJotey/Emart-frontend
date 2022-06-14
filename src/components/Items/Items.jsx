const Items = (props) => {
  return (
    <div className="flex justify-between items-center ">
      <h5 className="mr-3 ">
        {props.item.category}{' '}
        <span>
          (${props.item.price}/pc, qty: {props.item.quantity} )
        </span>
        : $ {props.item.price * props.item.quantity}
      </h5>
      {/* <button
        className="flex justify-between items-center p-1 bg-white"
        onClick={() => props.handleRemove(props)}
      >
        <ImCross />
      </button> */}
    </div>
  );
};

export default Items;

// <div>
// <p className="font-xs text-secondary">select quantity</p>
// <button
//   className="p-2 bg-slate-50 rounded-sm"
//   onClick={() => handleQuantity(true, product)}
// >
//   <AiOutlinePlus />
// </button>
// <input
//   type="text"
//   className="w-1/12 p-2 text-center mx-2"
//   id={product.id}
//   min={1}
//   value={count}
// />
// <button
//   className="p-2 bg-slate-50 rounded-sm"
//   onClick={() => handleQuantity(false, product)}
// >
//   <AiOutlineMinus />
// </button>
// </div>
