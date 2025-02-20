import React, { useState } from "react";
import gamepadMain from "../../assets/sony.svg";
import gamepad1 from "../../assets/sony2.svg";
import gamepad2 from "../../assets/sony3.svg";
import gamepad3 from "../../assets/sony.svg";

const Info = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex gap-10 p-10 max-w-6xl mx-auto">
      <div className="flex gap-3">
        <div className="flex flex-col gap-2">
          {[gamepad1, gamepad2, gamepad3].map((img, index) => (
            <img key={index} src={img} alt="" className="w-35 h-25 bg-[#80808034] mt-10 rounded-md cursor-pointer" />
          ))}
        </div>
        <img src={gamepadMain} alt="Gamepad" className="w-96 h-99 ml-3 bg-[#8080802b] mt-10 object-contain" />
      </div>
      
      <div className="w-[450px]">
        <h1 className="text-3xl font-bold">Havic HV G-92 Gamepad</h1>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500 text-lg">★★★★☆</span>
          <span className="text-gray-500">(300 Reviews)</span>
          <span className="text-green-600 font-semibold">In Stock</span>
        </div>
        <p className="text-3xl font-bold mt-4">$192.00</p>
        <p className="text-gray-500 mt-2 text-sm">
          PlayStation 5 controller skin tough out why faint not cool effect. 
          The artist & more.
        </p>
        
        <div className="mt-4">
          <h3 className="font-semibold">Colours:</h3>
          <div className="flex gap-2 mt-2">
            <span className="w-6 h-6 bg-black rounded-full cursor-pointer border"></span>
            <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer border"></span>
            <span className="w-6 h-6 bg-gray-300 rounded-full cursor-pointer border"></span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-4">
          <h3 className="font-semibold">Quantity:</h3>
          <div className="flex border rounded-lg overflow-hidden">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))} 
              className="px-3 py-1 bg-gray-200">-</button>
            <span className="px-4 py-1">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)} 
              className="px-3 py-1 bg-gray-200">+</button>
          </div>
        </div>
        
        <div className="mt-6 flex gap-4">
          <button className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-medium">Buy Now</button>
        </div>
        
        <div className="mt-6 space-y-3 border-t pt-4">
          <div>
            <p className="font-semibold">🚚 Free Delivery</p>
            <p className="text-gray-500 text-sm">Enter your postal code for Delivery Availability</p>
          </div>
          <div>
            <p className="font-semibold">🔄 Return Delivery</p>
            <p className="text-gray-500 text-sm">Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
