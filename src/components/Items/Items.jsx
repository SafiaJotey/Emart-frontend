const Items = (props) => {
  return (
    <div className="flex justify-between items-center shadow-sm py-2 ">
      <h5 className="mr-3 text-sm ">
        {props.item.category} <br />
        <span>
          (${props.item.price}/pc, qty: {props.item.quantity} )
        </span>
      </h5>
      <h5> $ {props.item.price * props.item.quantity}</h5>
    </div>
  );
};

export default Items;
