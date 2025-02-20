import React, { useState } from 'react'
import sony from '../../assets/sony.svg'
import sony2 from '../../assets/sony2.svg'
import sony3 from '../../assets/sony3.svg'


const Wishlist = () => {

  const [products, setProducts] = useState([
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
  ])

  function del(id) {
    setProducts(products.filter(el => el.id != id))
  }

  return (
    <div>
      <div className="flex">
        <h1 className='font-[400] text-[18px] pl-[140px] pt-[55px]'>Wishlist (4)</h1>
        <p className='mt-[58px] ml-[870px]'><span className='border-2 border-[gray] p-[10px_35px]'>Move All To Bag</span></p>
      </div>
      <div className="flex flex-wrap ml-[120px] mt-[30px]">
        {products.map((el) => (
          <div
            key={el.id}
            className="rounded-lg p-4 relative group transition-all duration-300"
          >
            <div className="relative flex justify-center w-[290px] h-[240px] items-center bg-gray-100 p-4 rounded-lg">
              <div className="absolute top-3 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                {el.aksiya}
              </div>
              <img src={el.img} alt={el.name} className="w-36 h-36 object-contain" />
              <button onClick={() => del(el.id)} className="absolute top-2 right-2 cursor-pointer bg-white p-1 rounded-full shadow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
              <button className="absolute cursor-pointer bottom-0 bg-[black] text-white px-26 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Add to cart
              </button>
            </div>
            <h1 className="mt-4 font-[500] text-[17px]">{el.name}</h1>
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-red-500 font-bold text-md">${el.price}</p>
              <p className="text-gray-400 line-through">${el.oldPrice}</p>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-yellow-500">{el.star}</p>
              <span className="text-gray-500 ml-1">({el.total})</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Wishlist