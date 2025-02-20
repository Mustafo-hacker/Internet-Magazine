import React from 'react'
import korm from '../../../assets/korm.svg'
import kurtka from '../../../assets/kurtka.svg'
import { Link } from 'react-router-dom'

let products = [
    {
        id: 1,
        img: korm,
        name: "Breed Dry Dog Food",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
    {
        id: 2,
        img: kurtka,
        name: "The north coat",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
    {
        id: 3,
        img: korm,
        name: "The north coat",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
    {
        id: 4,
        img: korm,
        name: "The north coat",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
    {
        id: 5,
        img: kurtka,
        name: "The north coat",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
    {
        id: 6,
        img: korm,
        name: "The north coat",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
    {
        id: 7,
        img: kurtka,
        name: "The north coat",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
    {
        id: 8,
        img: korm,
        name: "The north coat",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
    {
        id: 9,
        img: korm,
        name: "The north coat",
        price: "260",
        oldPrice: "360",
        star: "★★★★★",
        total: "65",
    },
]

const RightSide = () => {
    return (
        <div>
            <div className="flex flex-wrap ml-[50px] mt-[140px] max-[638px]:ml-[35px] max-[638px]:mt-[30px]">
                {products.map((el) => (
                    <div
                        key={el.id}
                        className="rounded-lg p-4 relative group transition-all duration-300"
                    >
                        <div className="relative flex justify-center w-[290px] h-[240px] items-center bg-gray-100 p-4 rounded-lg">
                            <img src={el.img} className="w-36 h-36 object-contain" />
                            <button className="absolute top-2 right-2 cursor-pointer bg-white p-1 rounded-full shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                            <Link to="/infoPage">
                                <button className="absolute top-12 right-2 cursor-pointer bg-white p-1 rounded-full shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </button>
                            </Link>
                            <button className="absolute cursor-pointer bottom-0 bg-[black] text-white px-6 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
            <Link to="/home">
                <p className='ml-[390px] mt-[50px] cursor-pointer max-[638px]:ml-[100px]'>
                    <span className='text-[white] bg-[#DB4444] p-[15px_45px] rounded-[4px]'>
                        More Products
                    </span>
                </p>
            </Link>
        </div>
    )
}

export default RightSide;
