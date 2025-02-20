import React from 'react'

const Sect7 = ({img,title,desc}) => {
    return (
        <div>
            <div className='text-center mt-[100px]'>
                <img className='w-[60px] m-auto mb-[15px] ' src={img} alt="" />
                <h3 className='text-[18px] font-[650] '>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Sect7