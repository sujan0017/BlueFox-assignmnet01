import shoImage from "../images/shoes.jpg";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../redux/cart/cartSlice";

// eslint-disable-next-line react/prop-types
function ProductItem({ id, name, price, category, brand }) {
  const dispatch = useDispatch()

  const addToCart = ()=> {
    dispatch(addProductToCart({ id, name, price, category, brand}))
  }
  return (
    <div className="bg-red-100 w-full pb-4 rounded-md">
      <div>
        <div>
          <img className="rounded-t-md" src={shoImage} alt="" />
        </div>
        <div className="flex flex-col p-2 gap-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{name}</p>
              <div>
                <p className="text-xs ">{`${brand} | ${category}`}</p>
              </div>
            </div>

            <button onClick={addToCart}>
              <CiHeart className="text-4xl" />
            </button>
          </div>

          {/* <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptatibus expedita porro molestias eum facere?
          </p> */}
          <div className="flex justify-evenly items-center">
            <span className="font-semibold text-center text-red-700">{`Rs. ${price}`}</span>
            <Link
              to={`${id}`}
              className="px-4 py-1 bg-black rounded-md text-white font-light text-lg"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
