import React, { useState } from 'react'
import phone from '../../../assets/phone.svg'
import phone1 from '../../../assets/phone1.svg'
import phone2 from '../../../assets/phone2.svg'
import phone3 from '../../../assets/phone3.svg'
import phone4 from '../../../assets/phone4.svg'
import phone5 from '../../../assets/phone5.svg'

const categories = [
    { id: 1, name: "Phones", img: phone },
    { id: 2, name: "Computers", img: phone1 },
    { id: 3, name: "SmartWatch", img: phone2 },
    { id: 4, name: "Camera", img: phone3 },
    { id: 5, name: "HeadPhones", img: phone4 },
    { id: 6, name: "Gaming", img: phone5 }
];

const Sect3 = () => {
    const [active, setActive] = useState(4)
    return (
        <div>
            <div className='flex'>
                <p className='bg-[#DB4444] ml-[140px] w-[25px] h-[45px] rounded-[4px] mt-[40px]'></p>
                <h1 className='text-[#DB4444] font-[600] pt-[50px] pl-[15px]'>Categories</h1>
            </div>
            <h1 className='pl-[140px] font-[500] text-[37px] pt-[25px]'>Browse By Category</h1>
            <div className="flex space-x-4 justify-center">
                {categories.map((el) => (
                    <div
                        key={el.id}
                        onClick={() => setActive(el.id)}
                        className={`flex flex-col ml-[15px] items-center justify-center mt-[20px] w-46 h-34 border-2 rounded-lg cursor-pointer transition-all ${active === el.id
                                ? "bg-red-500 text-white border-red-500"
                                : "border-gray-300 text-black hover:border-red-500"
                            }`}
                    >
                        <img src={el.img} alt="" />
                        <span className="mt-2 font-medium">{el.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sect3