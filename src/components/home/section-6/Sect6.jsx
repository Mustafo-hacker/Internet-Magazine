import React from 'react'
import baner3 from '../../../assets/baner3.svg'

const Sect6 = () => {
    return (
        <div>
            <div>
                <div className='flex'>
                    <p className='bg-[#DB4444] ml-[140px] w-[25px] h-[45px] rounded-[4px] mt-[40px]'></p>
                    <h1 className='text-[#DB4444] font-[600] pt-[50px] pl-[15px]'>Featured</h1>
                </div>
                <h1 className='pl-[140px] font-[500] text-[37px] pt-[25px]'>New Arrival</h1>
            </div>
            <img className='flex m-auto mt-[40px]' src={baner3} alt="" />
        </div>
    )
}

export default Sect6