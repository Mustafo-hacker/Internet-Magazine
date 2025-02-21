import React from 'react'
import girls from '../../../assets/girls.svg'

const Sect1 = () => {
    return (
        <div>
            <div className="flex pl-[140px] pt-[110px] max-[638px]:pl-[20px]">
                <h1 className='text-[gray]'>Home /</h1>
                <h1>About</h1>
            </div>
            <div className="flex flex-wrap justify-between items-center mt-[70px] ">
                <div className="w-full md:w-[50%] px-4">
                    <h1 className='font-[500] ml-[120px] text-[40px] max-[638px]:ml-[0px]'>Our Story</h1>
                    <p className='pt-[25px] ml-[120px] text-lg max-w-[630px] max-[638px]:ml-[0px]'>
                        Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
                    </p>
                    <p className='pt-[20px] ml-[120px] text-lg max-w-[630px] max-[638px]:ml-[0px]'>
                        Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer goods to electronics and more.
                    </p>
                </div>
                <div>
                    <img src={girls} className='ml-[-50px] max-[638px]:ml-[0px] max-[638px]:mt-[50px]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sect1
