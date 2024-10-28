import { Link } from "react-router-dom";
import navMenu from "../constant/headerMenu";
import { FaCartShopping } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

function Header() {
  const { products } = useSelector((state) => state.cart);

  const [showCart, setShowCart] = useState(false);
  return (
    <div className="bg-gray-900 py-5 ">
      <div className="container flex  justify-between items-center ">
        <div className="text-3xl font-bold text-white">
          <Link to={"/"}>Logo</Link>
        </div>
        <div className="flex justify-center items-center gap-5 relative">
          <nav className="flex justify-center items-center gap-2 sm:gap-5  ">
            {navMenu.map((menu) => (
              <Link className="text-white" to={menu.url} key={menu.id}>
                {menu.title}
              </Link>
            ))}
          </nav>
          <p className="text-white">|</p>
          <button className="relative" onClick={() => setShowCart(!showCart)}>
            <FaCartShopping className="text-2xl text-white " />
            <div
              className={`${
                products.length === 0 ? "hidden" : "block"
              } text-white bg-red-500 size-5 rounded-full flex items-center justify-center p-2 absolute bottom-4 left-3`}
            >
              {products.length}
            </div>
          </button>

          <div
            className={`bg-white w-1/2 lg:w-1/3 h-lvh fixed top-0 right-0 p-5 flex flex-col items-end z-10  ${
              showCart ? "block" : "hidden"
            }`}
          >
            <button className="border rounded-full p-2 shadow-md hover:bg-slate-200 pb" onClick={() => setShowCart(!showCart)}>
              <RxCross2 className="text-xl" />
            </button>

            <div className="w-full p-2 flex flex-col justify-center gap-3 ">
              {products.length == 0 ? (
                <div className="text-center">Cart Item is Empty</div>
              ) : (
                products.map((product) => (
                  <CartItems key={product.id} {...product} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
