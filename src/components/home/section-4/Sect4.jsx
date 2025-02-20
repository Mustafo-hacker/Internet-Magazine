import React from 'react'
import kurtka from '../../../assets/kurtka.svg'
import baner2 from '../../../assets/baner2.svg'
import { Link } from 'react-router-dom'

let products = [
    {
        id: 1,
        img: kurtka,
        name: "The north coat",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
    {
        id: 1,
        img: kurtka,
        name: "The north coat",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
    {
        id: 1,
        img: kurtka,
        name: "The north coat",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
    {
        id: 1,
        img: kurtka,
        name: "The north coat",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
]

const Sect4 = () => {
    return (
        <div>
            <div className='flex'>
                <p className='bg-[#DB4444] ml-[140px] w-[25px] h-[45px] rounded-[4px] mt-[40px] max-[638px]:ml-[20px]'></p>
                <h1 className='text-[#DB4444] font-[600] pt-[50px] pl-[15px] max-[638px]:pt-[50px] max-[638px]:pl-[10px]'>This Month</h1>
            </div>
            <div className="flex">
                <h1 className='pl-[140px] font-[500] text-[37px] pt-[25px] max-[638px]:pl-[20px] max-[638px]:text-[28px] max-[638px]:w-[250px]'>Best Selling Products</h1>
                <p className='ml-[755px] mt-[45px] cursor-pointer max-[638px]:ml-[0px] max-[638px]:mt-[65px]'>
                    <span className='text-[white] bg-[#DB4444] p-[15px_45px] rounded-[4px] max-[638px]:ml-[-20px] max-[638px]:p-[10px_30px]'>
                        View All
                    </span>
                </p>
            </div>
            <div className="flex flex-wrap ml-[120px] max-[638px]:grid max-[638px]:ml-[75px] max-[638px]:mt-[20px]">
                {products.map((el) => (
                    <div
                        key={el.id}
                        className="rounded-lg p-4 relative group transition-all duration-300 max-[638px]:w-[170px] max-[638px]:h-[280px] max-[638px]:mx-[5px]"
                    >
                        <div className="relative flex justify-center w-[290px] h-[240px] items-center bg-gray-100 p-4 rounded-lg max-[638px]:w-[220px] max-[638px]:h-[200px]">
                            <img src={el.img} className="w-36 h-36 object-contain max-[638px]:w-24 max-[638px]:h-24" />
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
                            <button className="absolute cursor-pointer bottom-0 bg-[black] text-white px-26 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-[638px]:px-[15px]">
                                Add to cart
                            </button>
                        </div>
                        <h1 className="mt-4 font-[500] text-[17px] max-[638px]:text-sm">{el.name}</h1>
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
            <img className='flex m-auto mt-26 max-[638px]:mt-[70px]' src={baner2} alt="" />
        </div>
    )
}

export default Sect4
