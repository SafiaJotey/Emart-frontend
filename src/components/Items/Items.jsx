const Items = (props) => {
  return (
    <div className="flex justify-between items-center  ">
      <h5 className="mr-3 text-sm ">
        {props.item.category}{' '}
        <span>
          (${props.item.price}/pc, qty: {props.item.quantity} )
        </span>
        : $ {props.item.price * props.item.quantity}
      </h5>
    </div>
  );
};

export default Items;
