import React from "react";

import { FaCartPlus } from "react-icons/fa";

const SingleProduct = ({ product, cart, setCart }) => {
  return (
    <div className="mt-5 border-2 border-indigo-500 rounded-md">
      <img
        className="bg-cover bg-center content-center h-48"
        src={product.image}
        alt=""
      />
      <div className="flex justify-between items-center p-2">
        <div>
          <h1 className="text-lg">{product.name}</h1>
          <h1 className="text-sm">${product.price}</h1>
        </div>
        <div>
          {!cart.includes(product) ? (
            <button
              onClick={() => {
                setCart([...cart, product]);
              }}
              className="bg-green-700 px-3 py-2 rounded"
            >
              Add Cart
            </button>
          ) : (
            <button
              onClick={() => {
                setCart(cart.filter((c) => c.id !== product.id));
              }}
              className="bg-red-700 px-3 py-2 rounded"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
