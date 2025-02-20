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
                    <h1 className='pl-[140px] pt-[45px] font-[400] cursor-pointer max-[638px]:pl-[20px] max-[638px]:pt-[30px]'>Woman’s Fashion</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer max-[638px]:pl-[20px]'>Men’s Fashion</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer max-[638px]:pl-[20px]'>Electronics</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer max-[638px]:pl-[20px]'>Home & Lifestyle</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer max-[638px]:pl-[20px]'>Medicine</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer max-[638px]:pl-[20px]'>Sports & Outdoor</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer max-[638px]:pl-[20px]'>Baby’s & Toys</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer max-[638px]:pl-[20px]'>Groceries & Pets</h1>
                    <h1 className='pl-[140px] pt-[12px] font-[400] cursor-pointer max-[638px]:pl-[20px]'>Health & Beauty</h1>
                    <p className='bg-[#8080805c] w-[1px] h-[400px] ml-[350px] mt-[-350px] max-[638px]:hidden'></p>
                </div>
                <div className='ml-[200px] mt-[-355px] max-[638px]:ml-[0] max-[638px]:mt-[40px]'>
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
                        className='w-[66%] max-[638px]:w-full'
                    >
                        <SwiperSlide><img src={baner} alt="Banner 1" /></SwiperSlide>
                        <SwiperSlide><img src={baner} alt="Banner 2" /></SwiperSlide>
                        <SwiperSlide><img src={baner} alt="Banner 3" /></SwiperSlide>
                        <SwiperSlide><img src={baner} alt="Banner 4" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Sect1
