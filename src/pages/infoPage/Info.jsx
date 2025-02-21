import React, { useState } from "react";
import sony from '../../assets/sony.svg'
import sony2 from '../../assets/sony2.svg'
import sony3 from '../../assets/sony3.svg'
import { Link } from "react-router-dom";

let products = [
  {
    id: 1,
    img: sony,
    name: "HAVIT HV-G92 Gamepad",
    price: "120",
    oldPrice: "160",
    star: "★★★★★",
    total: "75",
    aksiya: "-40%"
  },
  {
    id: 2,
    img: sony2,
    name: "AK-900 Wired Keyboard",
    price: "960",
    oldPrice: "1160",
    star: "★★★★★",
    total: "87",
    aksiya: "-34%"
  },
  {
    id: 3,
    img: sony,
    name: "HAVIT HV-G92 Gamepad",
    price: "120",
    oldPrice: "160",
    star: "★★★★★",
    total: "97",
    aksiya: "-23%"
  },
  {
    id: 4,
    img: sony3,
    name: "HAVIT HV-G92 Gamepad",
    price: "120",
    oldPrice: "160",
    star: "★★★★★",
    total: "34",
    aksiya: "-12%"
  }
]

const Info = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 p-10 max-w-6xl mx-auto">
        <div className="flex gap-3 flex-col lg:flex-row">
          <div className="flex flex-col gap-2">
            {[sony, sony2, sony3].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-20 h-20 bg-[#80808034] mt-2 rounded-md cursor-pointer transition-all duration-300 hover:scale-105"
              />
            ))}
          </div>
          <img
            src={sony}
            alt="Gamepad"
            className="w-[300px] h-[300px] ml-3 bg-[#8080802b] mt-2 object-contain"
          />
        </div>

        <div className="w-full lg:w-[450px]">
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
              <span className="w-6 h-6 bg-black rounded-full cursor-pointer border transition-colors duration-200 hover:bg-gray-600"></span>
              <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer border transition-colors duration-200 hover:bg-red-700"></span>
              <span className="w-6 h-6 bg-gray-300 rounded-full cursor-pointer border transition-colors duration-200 hover:bg-gray-500"></span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <h3 className="font-semibold">Quantity:</h3>
            <div className="flex border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition duration-200"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition duration-200"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-red-600 transition duration-200">
              Buy Now
            </button>
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
      <div className='flex'>
        <p className='bg-[#DB4444] ml-[140px] w-[25px] h-[45px] rounded-[4px] mt-[40px] max-[638px]:ml-[20px]'></p>
        <h1 className='text-[#DB4444] font-[600] pt-[50px] pl-[15px] max-[638px]:pt-[50px] max-[638px]:pl-[10px]'>Related Item</h1>
      </div>
      <div className="flex flex-wrap ml-[120px] max-[638px]:ml-[10px]">
        {products.map((el) => (
          <div
            key={el.id}
            className="rounded-lg p-4 relative group transition-all duration-300 max-[638px]:w-[100%] max-[638px]:p-2"
          >
            <div className="relative flex justify-center w-[290px] h-[240px] items-center bg-gray-100 p-4 rounded-lg max-[638px]:w-[100%] max-[638px]:h-[200px]">
              <div className="absolute top-3 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                {el.aksiya}
              </div>
              <img src={el.img} alt={el.name} className="w-36 h-36 object-contain max-[638px]:w-[70%] max-[638px]:h-[70%]" />
              <button className="absolute top-2 right-2 cursor-pointer bg-white p-1 rounded-full shadow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
              <Link to="/infoPage">
                <button className="absolute top-12 right-2 cursor-pointer bg-white p-1 rounded-full shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </Link>
              <button className="absolute cursor-pointer bottom-0 bg-[black] text-white px-26 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Add to cart
              </button>
            </div>
            <h1 className="mt-4 font-[500] text-[17px] text-center max-[638px]:text-[15px]">{el.name}</h1>
            <div className="flex items-center space-x-2 mt-2 justify-center max-[638px]:flex-col">
              <p className="text-red-500 font-bold text-md">${el.price}</p>
              <p className="text-gray-400 line-through">${el.oldPrice}</p>
            </div>
            <div className="flex items-center mt-2 justify-center">
              <p className="text-yellow-500">{el.star}</p>
              <span className="text-gray-500 ml-1">({el.total})</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Info;
