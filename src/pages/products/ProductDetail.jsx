import { useEffect, useState } from "react";
import shoeImg from "../../images/shoes.jpg";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/product/productActions";
import Spinner from "../../component/Spinner";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const params = useParams();

  console.log(params.id);

  const dispatch = useDispatch();

  const { product, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [dispatch, params.id]);

  if (loading)
    return (
      <div className="w-full h-lvh  flex justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <div className="container mx-auto p-5">
      <div className="grid lg:grid-cols-2  items-center gap-5 ">
        <div className="">
          <img src={shoeImg} alt="" />
        </div>
        <div className=" lg:px-5">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <div>
                <p className="text-xs">Brand: {product.brand}</p>
                <p className="text-xs">Category: {product.category}</p>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <p className="text-lg text-gray-700 mt-2">${product.price}</p>
          <p className="mt-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut laborios  consectetur adipisicing elit. Consectetur ut laboriosam impedit nam iure quo rem  consectetur adipisicing elit. Consectetur ut laboriosam impedit nam iure quo rem consectetur adipisicing elit. Consectetur ut laboriosam impedit nam iure quo remam impedit nam iure quo rem expedita explicabo? Ducimus, tempore.
          </p>
          <div className="mt-4">
            <label className="mr-2">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border rounded p-1 w-16"
            />
          </div>
          <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
