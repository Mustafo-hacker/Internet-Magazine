import React, { useEffect } from 'react';
import baner from '../../../assets/baner.svg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useStore } from '../../../../store/store';
import 'swiper/css/bundle';

const Sect1 = () => {
    const { categories, getCategory } = useStore();

    useEffect(() => {
        getCategory();
    }, [getCategory]);

    return (
        <div className='relative mt-[120px] max-[638px]:mt-[50px]'>
            <div style={{ minHeight: '60px' }}>
                {categories?.map((el, index) => (
                    <div
                        key={el.id}
                        className="mt-[20px] overflow-x-auto opacity-0 animate-fadeIn"
                        style={{ animationDelay: `${index * 0.3}s` }}
                    >
                        <h1 className='pl-[140px] font-[400] cursor-pointer max-[638px]:pl-[10px] max-[638px]:text-[18px]'>
                            {el.categoryName}
                        </h1>
                    </div>
                ))}
            </div>

            <div className='absolute left-1/2 transform -translate-x-1/2 ml-[120px] top-2 w-[62%] max-[1024px]:w-[80%] max-[638px]:ml-[195px] max-[638px]:mt-[20px] max-[768px]:w-full max-[638px]:static max-[638px]:w-full'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    scrollbar={{ draggable: true }}
                    className='w-full min-h-[100px]'
                >
                    <SwiperSlide><img src={baner} alt="Banner 1" className="w-full" /></SwiperSlide>
                    <SwiperSlide><img src={baner} alt="Banner 2" className="w-full" /></SwiperSlide>
                    <SwiperSlide><img src={baner} alt="Banner 3" className="w-full" /></SwiperSlide>
                    <SwiperSlide><img src={baner} alt="Banner 4" className="w-full" /></SwiperSlide>
                </Swiper>
                <div className="swiper-button-prev max-[768px]:hidden"></div>
                <div className="swiper-button-next max-[768px]:hidden"></div>
            </div>
        </div>
    );
};

export default Sect1;