import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosInstance from "../../../axiosRequests/axiosRequest";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart, updateQuantity, setCart, addToCart } from "../../redux-toolkit/cartSlice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axiosInstance.get("/get-cart");
        dispatch(setCart(response.data.items));
      } catch (error) {
        console.error("Ошибка при загрузке корзины:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [dispatch]);

  const handleQuantityChange = async (id, value) => {
    if (value < 1) return;
    dispatch(updateQuantity({ id, quantity: value }));
    try {
      await axiosInstance.post("/update-cart", { id, quantity: value });
    } catch (error) {
      console.error("Ошибка при обновлении количества:", error);
    }
  };

  const handleRemoveFromCart = async (id) => {
    dispatch(removeFromCart(id));
    try {
      await axiosInstance.post("/remove-from-cart", { id });
    } catch (error) {
      console.error("Ошибка при удалении из корзины:", error);
    }
  };

  const handleClearCart = async () => {
    dispatch(clearCart());
    try {
      await axiosInstance.post("/clear-cart");
    } catch (error) {
      console.error("Ошибка при очистке корзины:", error);
    }
  };

  const handleAddToCart = (product) => {
    const productData = {
      id: product.id,
      productName: product.productName,
      price: product.discountPrice,
      image: product.image, 
      quantity: 1,
    };
    dispatch(addToCart(productData)); 
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.discountPrice * item.quantity, 0);

  if (loading) {
    return <div className="text-center mt-10">Загрузка...</div>;
  }

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
            {cartItems.map((item) => (
              <tr key={item.id} className="shadow-md">
                <td className="p-2 flex items-center gap-3">
                  <img src={item.image || "default_image_url"} alt={item.productName} className="w-12 h-12" />
                  <div>
                    <p className="font-medium">{item.productName}</p>
                  </div>
                </td>
                <td className="p-2">${item.discountPrice}</td>
                <td className="p-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="w-16 border rounded p-1"
                    min="1"
                  />
                </td>
                <td className="p-2">${item.discountPrice * item.quantity}</td>
                <td className="p-2">
                  <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500">
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
          <button onClick={handleClearCart} className="border px-4 py-2 rounded text-red-500 cursor-pointer w-full sm:w-auto">Remove all</button>
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
        <Link to="/oplata">
          <button className="mt-4 w-full bg-red-500 text-white py-2 rounded cursor-pointer">Proceed to checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
