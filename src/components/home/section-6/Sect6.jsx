import React from 'react'
import baner3 from '../../../assets/baner3.svg'

const Sect6 = () => {
    return (
        <div>
            <div>
                <div className='flex'>
                    <p className='bg-[#DB4444] ml-[140px] w-[25px] h-[45px] rounded-[4px] mt-[40px] max-[638px]:ml-[20px]'></p>
                    <h1 className='text-[#DB4444] font-[600] pt-[50px] pl-[15px] max-[638px]:pt-[50px] max-[638px]:pl-[10px]'>Featured</h1>
                </div>
                <h1 className='pl-[140px] font-[500] text-[37px] pt-[25px] max-[638px]:pl-[20px] max-[638px]:text-[28px]'>New Arrival</h1>
            </div>
            <img className='flex m-auto mt-[40px] max-[638px]:w-[90%]' src={baner3} alt="" />
        </div>
    )
}

export default Sect6
