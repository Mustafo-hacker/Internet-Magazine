import React, { useState, useEffect } from 'react';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useStore } from '../../../../store/store';

const Sect3 = () => {
    const [active, setActive] = useState(4);
    const { categories, getCategory } = useStore();

    useEffect(() => {
        getCategory();
    }, [getCategory]);

    return (
        <div>
            <div className='flex'>
                <p className='bg-[#DB4444] ml-[140px] w-[25px] h-[45px] rounded-[4px] mt-[40px]'></p>
                <h1 className='text-[#DB4444] font-[600] pt-[50px] pl-[15px]'>Categories</h1>
            </div>
            <h1 className='pl-[140px] font-[500] text-[37px] pt-[25px] max-[638px]:pl-[70px] max-[638px]:text-[28px]'>
                Browse By Category
            </h1>

            <div className="w-full max-w-[1200px] mx-auto mt-[20px] px-[20px] relative">
                <div className="swiper-button-prev-custom absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer max-[638px]:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-600 hover:text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div className="swiper-button-next-custom absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer max-[638px]:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-600 hover:text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                <Swiper
                    modules={[Navigation, A11y]} 
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    grabCursor={true} 
                    touchRatio={1.5} 
                >
                    {categories?.map((el) => (
                        <SwiperSlide key={el.id}>
                            <div
                                onClick={() => setActive(el.id)}
                                className={`flex flex-col items-center justify-center p-10 border-2 rounded-lg cursor-pointer transition-all hover:shadow-lg ${active === el.id
                                        ? "bg-red-500 text-white border-red-500"
                                        : "border-gray-300 text-black hover:border-red-500"
                                    }`}
                                style={{ minHeight: '200px' }}
                            >
                                <div className="w-20 h-20 flex items-center justify-center mb-4">
                                    <img
                                        src={`https://store-api.softclub.tj/images/${el.categoryImage}`}
                                        alt={el.categoryName}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-lg font-semibold text-center">
                                    {el.categoryName}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Sect3;
