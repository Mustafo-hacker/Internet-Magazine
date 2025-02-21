import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import monitor from '../../assets/sony.svg'
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: monitor },
    { id: 2, name: "H1 Gamepad", price: 550, quantity: 2, image: monitor },
    { id: 3, name: "H1 Gamepad", price: 550, quantity: 2, image: monitor },
  ]);

  const handleQuantityChange = (id, value) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: value } : item))
    );
  };

  function del(id) {
    setCartItems(cartItems.filter(el => el.id != id))
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-4">
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
            {cartItems.map((item) => (
              <tr key={item.id} className="shadow-md">
                <td className="p-2 flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12" />
                  {item.name}
                </td>
                <td className="p-2">${item.price}</td>
                <td className="p-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="w-16 border rounded p-1"
                    min="1"
                  />
                </td>
                <td className="p-2">${item.price * item.quantity}</td>
                <td className="p-2">
                  <button onClick={() => del(item.id)} className="text-red-500">
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
          <button className="border px-4 py-2 rounded cursor-pointer w-full ml-100 sm:w-auto">Update Cart</button>
          <button className="border px-4 py-2 rounded text-red-500 cursor-pointer w-full sm:w-auto">Remove all</button>
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
        <p className="flex justify-between mt-2">Subtotal: <span>${subtotal}</span></p>
        <p className="flex justify-between">Shipping: <span>Free</span></p>
        <p className="flex justify-between font-bold text-lg mt-2">Total: <span>${subtotal}</span></p>
        <button className="mt-4 w-full bg-red-500 text-white py-2 rounded cursor-pointer">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;
