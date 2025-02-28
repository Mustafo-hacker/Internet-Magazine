import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../../../store/store'

const Sect5 = () => {
    const { data, getProducts, addToCart, cart } = useStore()
    const [showModal, setShowModal] = useState(false)
    const [modalMessage, setModalMessage] = useState("")
    const [modalType, setModalType] = useState("success")

    useEffect(() => {
        getProducts()
    }, [])

    const handleAddToCart = (productId) => {
        const isProductInCart = cart?.some((item) => item.id === productId)

        if (isProductInCart) {
            setModalMessage("This product is already in cart!")
            setModalType("warning")
        } else {
            addToCart(productId)
            setModalMessage("Product successfully added to cart!")
            setModalType("success")
        }

        setShowModal(true)

        setTimeout(() => {
            setShowModal(false)
        }, 2000)
    }

    return (
        <div className='mt-[50px]'>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowModal(false)}></div>
                    <div
                        className={`relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 transform transition-all duration-300 ${showModal ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                            } ${modalType === "success" ? "border-l-4 border-green-500" : "border-l-4 border-red-500"}`}
                    >
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex items-center">
                            {modalType === "success" ? (
                                <div className="bg-green-100 p-2 rounded-full mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            ) : (
                                <div className="bg-red-100 p-2 rounded-full mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                </div>
                            )}
                            <div>
                                <h3 className={`text-lg font-medium ${modalType === "success" ? "text-green-800" : "text-red-800"}`}>
                                    {modalType === "success" ? "Success!" : "Already in Cart"}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{modalMessage}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={() => setShowModal(false)}
                                className={`px-4 py-2 rounded-md text-white ${modalType === "success" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                                    }`}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className='flex'>
                <p className='bg-[#DB4444] ml-[140px] w-[25px] h-[45px] rounded-[4px] mt-[40px] max-[638px]:ml-[20px]'></p>
                <h1 className='text-[#DB4444] font-[600] pt-[50px] pl-[15px] max-[638px]:pt-[50px] max-[638px]:pl-[10px]'>Our Products</h1>
            </div>
            <div className="flex">
                <h1 className='pl-[140px] font-[500] text-[37px] pt-[25px] max-[638px]:pl-[20px] max-[638px]:text-[28px]'>Explore Our Products</h1>
            </div>
            <div className="flex flex-wrap ml-[120px] max-[638px]:grid max-[638px]:ml-[0px] max-[638px]:mt-[20px]">
                {data.map((el) => (
                    <div
                        key={el.id}
                        className="rounded-lg p-4 relative group transition-all duration-300 max-[638px]:w-[100%x] max-[638px]:h-[280px] max-[638px]:mx-[0px]"
                    >
                        <div className="relative flex justify-center w-[290px] h-[240px] items-center bg-gray-100 p-4 rounded-lg max-[638px]:w-[100%] max-[638px]:h-[200px]">
                            <img src={"https://store-api.softclub.tj/images/" + el.image} alt={el.productName} className="w-36 h-36 object-contain max-[638px]:w-[70%] max-[638px]:h-[70%]" />
                            <button className="absolute top-2 right-2 cursor-pointer bg-white p-1 rounded-full shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                            <Link to={`/infoPage/${el.id}`}>
                                <button className="absolute top-12 right-2 cursor-pointer bg-white p-1 rounded-full shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </button>
                            </Link>
                            <button
                                onClick={() => handleAddToCart(el.id)}
                                className="absolute cursor-pointer bottom-0 bg-[black] text-white  px-26 max-[638px]:px-32 py-2 rounded-md max-[638px]:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                Add to cart
                            </button>
                        </div>
                        <h1 className="mt-4 font-[500] text-[17px] max-[638px]:text-[15px]">{el.productName}</h1>
                        <div className="flex items-center space-x-2 mt-2">
                            <p className="text-red-500 font-bold text-md">${el.price}</p>
                            <p className="text-gray-400 line-through">${el.discountPrice}</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <p className="text-yellow-500"><h1>★★★★★</h1></p>
                            <span className="text-gray-500 ml-1"><h1>({el.quantity})</h1></span>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/allProduct">
                <p className='ml-[650px] mt-[30px] cursor-pointer max-[638px]:ml-[100px] max-[638px]:mt-[70px]'>
                    <span className='text-[white] bg-[#DB4444] p-[15px_45px] rounded-[4px] max-[638px]:p-[10px_30px]'>
                        View All Products
                    </span>
                </p>
            </Link>
        </div>
    )
}

export default Sect5