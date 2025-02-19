import React from 'react'
import baner from '../../../assets/baner.svg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Sect1 = () => {
    return (
        <div>
            <div>
                <div>
                    <h1 className='pl-[140px] pt-[45px] font-[400] cursor-pointer'>Woman’s Fashion</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer'>Men’s Fashion</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer'>Electronics</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer'>Home & Lifestyle</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer'>Medicine</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer'>Sports & Outdoor</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer'>Baby’s & Toys</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer'>Groceries & Pets</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer'>Health & Beauty</h1>
                    <p className='bg-[#8080805c] w-[1px] h-[400px] ml-[350px] mt-[-350px]'></p>
                </div>
                <div className='ml-[200px] mt-[-355px]'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className='w-[66%]'
                    >
                        <SwiperSlide><img src={baner} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={baner} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={baner} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={baner} alt="" /></SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Sect1