import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../redux/cart/cartSlice";

function CartItems({ id, name, category, brand, price, quantity }) {
  const dispatch = useDispatch();
  const removeCartItems = () => {
    dispatch(
      removeProductFromCart(id)
    );
  };
  return (
    <div className="w-full bg-slate-200 border-2 border-slate-400 rounded-md  p-2 flex items-center justify-between">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-xs">{`${brand} | ${category}`}</p>
      </div>
      {`${price} * ${quantity}`}
      <button onClick={removeCartItems}>
        <AiOutlineDelete className="text-red-500 text-2xl" />
      </button>
    </div>
  );
}

export default CartItems;
