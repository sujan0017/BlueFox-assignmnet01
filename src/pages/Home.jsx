import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../redux/product/productActions";
import { useEffect } from "react";
import ProductItem from "../component/ProductItem";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Banner Section */}
      <div className="relative text-white py-20 flex flex-col items-center justify-center text-center h-[80lvh]  bg-[url('https://cdn.pixabay.com/photo/2016/11/29/07/16/adult-1868049_1280.jpg')]  bg-center bg-cover ">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Our E-Commerce Store
        </h1>
        <p className="text-lg mb-8 max-w-2xl">
          Discover a variety of high-quality products at the best prices. Shop
          now and enjoy fast, reliable service!
        </p>
        <Link
          to={"/products"}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-200"
        >
          Shop Now
        </Link>
      </div>

      {/* Categories Section */}
      <div className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Popular Categories
        </h2>
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
          {products.slice(0, 6).map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-600 text-white py-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
        <p className="text-lg mb-8 max-w-lg text-center">
          Sign up for exclusive offers, updates on new arrivals, and the latest
          promotions.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-200">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Home;
