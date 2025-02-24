import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import axiosInstance from '../../../../axiosRequests/axiosRequest';
import { addToCart } from '../../../redux-toolkit/cartSlice/cartSlice';



const RightSide = () => {
    const [data, setData] = useState({ products: [] });
    const [showModal, setShowModal] = useState(false);
    const [addedProduct, setAddedProduct] = useState(null);
    const dispatch = useDispatch();

    const get = async () => {
        try {
            const response = await axiosInstance.get("https://store-api.softclub.tj/Product/get-products");
            console.log("API Response:", response.data);
            setData(response.data.data || { products: [] });
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    };

    async function postToCard(id) {
        try {
            await axiosInstance.post(`/add-product-to-card?id=${id}`);
        } catch (error) {
            console.error(error);
        }
    }

    const handleAddToCart = async (product) => {
        if (!product?.id) return;
        dispatch(addToCart(product));
        setAddedProduct(product);
        setShowModal(true);

        setTimeout(() => {
            setShowModal(false);
        }, 3000);

        postToCard(product.id);
    };

    useEffect(() => {
        get();
    }, []);

    return (
        <div>
            {showModal && addedProduct && (
                <div className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
                    <p>{addedProduct.productName} успешно добавлен в корзину!</p>
                </div>
            )}
            <div className="flex flex-wrap ml-[50px] mt-[140px] max-[638px]:ml-[30px] max-[638px]:mt-[30px]">
                {Array.isArray(data?.products) && data.products.map((el) => (
                    <div
                        key={el.id}
                        className="rounded-lg p-4 relative group transition-all duration-300"
                    >
                        <div className="relative flex justify-center w-[300px] h-[240px] items-center bg-gray-100 p-4 rounded-lg">
                            <img src={"https://store-api.softclub.tj/images/" + el.image} alt={el.productName} className="w-36 h-36 object-contain max-[638px]:w-[70%] max-[638px]:h-[70%]" />
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
                            <button onClick={() => handleAddToCart(el)}
                                className="absolute cursor-pointer bottom-0 bg-[black] text-white px-26 py-2 rounded-md max-[638px]:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                Add to cart
                            </button>

                        </div>
                        <h1 className="mt-4 font-[500] text-[17px] max-[638px]:text-sm">{el.productName}</h1>
                        <div className="flex items-center space-x-2 mt-2">
                            <p className="text-red-500 font-bold text-md">${el.discountPrice}</p>
                            <p className="text-gray-400 line-through">${el.price}</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <p className="text-yellow-500"><h1>★★★★★</h1></p>
                            <span className="text-gray-500 ml-1">({el.quantity})</span>
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
