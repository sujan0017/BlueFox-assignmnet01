import ProductItem from "../../component/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../redux/product/productActions";
import { useEffect } from "react";
import Spinner from "../../component/Spinner";

function ProductList() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  
  if (loading)
    return (
      <div className="w-full h-lvh  flex justify-center items-center">
        <Spinner />
      </div>
    );


  return (
    <>
      <div
        className="bg-[url('https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_1280.jpg')] 
             bg-cover bg-center h-96 flex items-center justify-center text-white"
      >
        <h1 className="lg:text-4xl text-2xl font-bold bg-black bg-opacity-50 p-4 rounded-lg text-center mx-20">
        Welcome to Your Perfect Finds – explore our range and find what speaks to you!
        </h1>
      </div>
      <div className="bg-yellow-50 py-10 text-2xl  flex items-center justify-center">
      <div className="container flex justify-center items-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
    </>
  
  );
}

export default ProductList;
