import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStore } from "../../../store/store";
import { useEffect, useState } from "react";

const Cart = () => {

  let { data, getCart, deleteCart, clearCart, total, decrementfunc, incrimentfunc } = useStore()

  useEffect(() => {
    getCart()
  }, [])


  
  return (
    <div className="max-w-4xl mt-[100px] mx-auto p-6 sm:p-4">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="p-2 text-gray-500">Product</th>
              <th className="p-2 text-gray-500">Price</th>
              <th className="p-2 text-gray-500">Quantity</th>
              <th className="p-2 text-gray-500">Subtotal</th>
              <th className="p-2 text-gray-500"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => (
              <tr key={el.id} className="shadow-md">
                <td className="p-2 flex items-center gap-3">
                  <img src={`https://store-api.softclub.tj/images/${el?.product?.image}`}
                    alt="" className="w-12 h-12" />
                  <div>
                    <p className="font-medium">{el.product.productName}</p>
                  </div>
                </td>
                <td className="p-2">${el.product.discountPrice}</td>
                <td className="p-2 flex items-center gap-2">
                  <button onClick={() => decrementfunc(el.id)} className="border px-2 py-1 rounded">-</button>
                  <span className="px-3">{el.quantity}</span>
                  <button onClick={() => incrimentfunc(el.id)} className="border px-2 py-1 rounded">+</button>
                </td>
                <td className="p-2">${el.product.discountPrice * el.quantity }</td>
                <td className="p-2">
                  <button onClick={() => deleteCart(el.id)} className="text-red-500">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
          <Link to="/allProduct">
            <button className="border px-7 py-2 rounded border-gray-500 cursor-pointer w-full sm:w-auto">Return To Shop</button>
          </Link>
          <button onClick={() => clearCart()} className="border px-4 py-2 rounded text-red-500 cursor-pointer w-full sm:w-auto">Remove all</button>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border p-2 rounded w-full sm:w-1/3"
          />
          <button className="border-2 border-red-500 text-red-500 px-8 py-2 rounded cursor-pointer w-full sm:w-auto">Apply</button>
        </div>
      </div>
      <div className="mt-6 p-4 border rounded-lg w-full sm:w-1/3 ml-auto">
        <h3 className="font-semibold text-lg">Cart Total</h3>
        <p className="flex justify-between mt-2">Subtotal: <span>${total}</span></p>
        <p className="flex justify-between">Shipping: <span>Free</span></p>
        <p className="flex justify-between font-bold text-lg mt-2">Total: <span>${total }</span></p>
        <Link to="/oplata">
          <button className="mt-4 w-full bg-red-500 text-white py-2 rounded cursor-pointer">Proceed to checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
