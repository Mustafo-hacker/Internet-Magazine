import React, { useEffect, useState } from 'react';
import { useStore } from '../../../store/store';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { data, getProducts, addToCart } = useStore()

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div>

      <div className="flex items-center justify-between px-[140px] pt-[80px] max-[638px]:grid">
        <h1 className="font-[400] text-[18px] max-[638px]:ml-[-90px]">Wishlist (4)</h1>
        <p className="mt-[50px] mb-[40px] max-[638px]:ml-[-90px]">
          <span className="border-2 border-[gray] p-[10px_35px] cursor-pointer hover:bg-gray-200">
            Move All To Bag
          </span>
        </p>
      </div>
      <div className="flex flex-wrap ml-[120px] max-[638px]:ml-[38px]">
        {data.map((el) => (
          <div key={el.id} className="rounded-lg p-4 relative group transition-all duration-300 max-[638px]:w-[100%] max-[638px]:p-2">
            <div className="relative flex justify-center w-[290px] h-[240px] items-center bg-gray-100 p-4 rounded-lg max-[638px]:w-[300px] max-[638px]:h-[200px]">
              <div className="absolute top-3 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                {`${el.quantity}%`}
              </div>
              <img src={`https://store-api.softclub.tj/images/${el.image}`} alt={el.productName} className="w-36 h-36 object-contain max-[638px]:w-[70%] max-[638px]:h-[70%]" />
              <button
                onClick={() => del(el.id)}
                className="absolute top-2 right-2 cursor-pointer bg-white p-1 rounded-full shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-0.346 9M9.26 9l0.346 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
              <Link to={`/infoPage/:${el.id}`}>
                <button className="absolute top-12 right-2 cursor-pointer bg-white p-1 rounded-full shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </Link>
              <button
                onClick={() => addToCart(el.id)}
                className="absolute cursor-pointer bottom-0 bg-[black] text-white px-26 py-2 rounded-md max-[638px]:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Add to cart
              </button>
            </div>
            <h1 className="mt-4 font-[500] text-[17px] max-[638px]:text-[15px]">{el.productName}</h1>
            <div className="flex space-x-2 mt-2 max-[638px]:flex-col">
              <p className="text-red-500 font-bold text-md">${el.discountPrice}</p>
              <p className="text-gray-400 line-through">${el.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
