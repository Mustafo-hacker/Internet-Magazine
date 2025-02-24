
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../../axiosRequests/axiosRequest';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux-toolkit/cartSlice/cartSlice'; // import the action

const Sect2 = () => {
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
            <div className='flex'>
                <p className='bg-[#DB4444] ml-[140px] w-[25px] h-[45px] rounded-[4px] mt-[40px] max-[638px]:ml-[20px]'></p>
                <h1 className='text-[#DB4444] font-[600] pt-[50px] pl-[15px] max-[638px]:pt-[50px] max-[638px]:pl-[10px]'>Today’s</h1>
            </div>
            <div className="flex">
                <h1 className='pl-[140px] font-[500] text-[37px] pt-[24px] max-[638px]:pl-[20px] max-[638px]:text-[28px] max-[638px]:w-[100px]'>Flash Sales</h1>
                <div className="flex max-[638px]:ml-[0px] max-[638px]:mt-[30px]">
                    <div>
                        <h1 className='font-[500] pt-[3px] pl-[90px] max-[638px]:pl-[0]'>Days</h1>
                        <h1 className='font-[700] text-[35px] pl-[87px] max-[638px]:pl-[0]'>03</h1>
                    </div>
                    <div>
                        <h1 className='text-[#E07575] pt-[29px] pl-[15px] text-[30px]'>:</h1>
                    </div>
                    <div>
                        <h1 className='font-[500] pt-[3px] pl-[15px]'>Hours</h1>
                        <h1 className='font-[700] text-[35px] pl-[15px]'>23</h1>
                    </div>
                    <div>
                        <h1 className='text-[#E07575] pt-[29px] pl-[15px] text-[30px]'>:</h1>
                    </div>
                    <div>
                        <h1 className='font-[500] pt-[3px] pl-[15px]'>Minutes</h1>
                        <h1 className='font-[700] text-[35px] pl-[15px]'>19</h1>
                    </div>
                    <div className='max-[638px]:hidden'>
                        <h1 className='text-[#E07575] pt-[29px] pl-[2px] text-[30px]'>:</h1>
                    </div>
                    <div className='max-[638px]:hidden'>
                        <h1 className='font-[500] pt-[3px] pl-[15px]'>Seconds</h1>
                        <h1 className='font-[700] text-[35px] pl-[15px]'>56</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap ml-[120px] max-[638px]:grid max-[638px]:ml-[38px] max-[638px]:mt-[20px]">
                {Array.isArray(data?.products) && data.products.map((el) => (
                    <div key={el.id} className="rounded-lg p-4 relative group transition-all duration-300 max-[638px]:w-[100%] max-[638px]:p-2">
                        <div className="relative flex justify-center w-[290px] h-[240px] items-center bg-gray-100 p-4 rounded-lg max-[638px]:w-[300px] max-[638px]:h-[200px]">
                            <div className="absolute top-3 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                                {`${el.quantity}%`}
                            </div>
                            <img src={`https://store-api.softclub.tj/images/${el.image}`} alt={el.productName} className="w-36 h-36 object-contain max-[638px]:w-[70%] max-[638px]:h-[70%]" />
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
                            <button onClick={() => handleAddToCart(el)}
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
            <Link to="/allProduct">

                <div className="text-center mt-[30px]">
                    <span className='text-white bg-[#DB4444] p-[15px_45px] rounded-[4px] max-[638px]:p-[10px_30px]'>View All Products</span>
                </div>
            </Link>
        </div>
    );
};

export default Sect2;
