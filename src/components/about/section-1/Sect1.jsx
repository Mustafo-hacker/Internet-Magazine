import React from 'react'
import girls from '../../../assets/girls.svg'

const Sect1 = () => {
    return (
        <div>
            <div className="flex pl-[140px] pt-[70px]">
                <h1 className='text-[gray]'>Home /</h1>
                <h1>About</h1>
            </div>
            <div className="flex">
                <div>
                    <h1 className='pl-[140px] font-[500] text-[40px] pt-[50px]'>Our Story</h1>
                    <p className='pl-[140px] pt-[25px] w-[630px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='pl-[140px] pt-[20px] w-[630px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div>
                    <img src={girls} className='pl-34' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sect1