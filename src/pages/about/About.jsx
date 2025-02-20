import React from 'react'
import Sect1 from '../../components/about/section-1/Sect1'
import Sect4 from '../../components/about/section-4/Sect4'
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import Sect2 from '../../components/about/section-2/Sect2'
import surat1 from '../../assets/surat1.svg'
import surat2 from '../../assets/surat2.svg'
import Sect3 from '../../components/about/section-3/Sect3'
import men1 from '../../assets/men1.svg'
import men2 from '../../assets/men2.svg'
import men3 from '../../assets/men3.svg'
import menu from '../../assets/menu.svg'
import social2 from '../../assets/social2.svg'

const About = () => {
  return (
    <div>
      <Sect1 />
      <div className="flex justify-evenly">
        <Sect2 sx={"border-2 border-[gray] w-[260px] h-[220px] mt-[80px]"} st={"m-auto pt-[25px]"} stt={"text-center pt-[10px] font-bold text-[33px]"} stt2={"text-center font-[400] pt-[7px]"} img={surat1} text={"10.5k "} desc={"Sallers active our site"} />
        <Sect2 sx={"bg-[#DB4444] w-[260px] h-[220px] mt-[80px]"} st={"m-auto pt-[25px]"} stt={"text-center pt-[10px] text-[white] font-bold text-[33px]"} stt2={"text-center text-[white] font-[400] pt-[7px]"} img={surat2} text={"33k "} desc={"Sallers active our site"} />
        <Sect2 sx={"border-2 border-[gray] w-[260px] h-[220px] mt-[80px]"} st={"m-auto pt-[25px]"} stt={"text-center pt-[10px] font-bold text-[33px]"} stt2={"text-center font-[400] pt-[7px]"} img={surat1} text={"45.5k "} desc={"Sallers active our site"} />
        <Sect2 sx={"border-2 border-[gray] w-[260px] h-[220px] mt-[80px]"} st={"m-auto pt-[25px]"} stt={"text-center pt-[10px] font-bold text-[33px]"} stt2={"text-center font-[400] pt-[7px]"} img={surat1} text={"25k "} desc={"Sallers active our site"} />
      </div>
      <div className="flex justify-evenly mt-[110px]">
        <Sect3 img={men1} text={"Tom Cruise"} stt={"pt-3 font-[500] text-[25px]"} stt2={"font-[400]"} stt3={"w-18 h-10"} desc={"Founder & Chairman"} icon={social2} />
        <Sect3 img={men2} text={"Emma Watson"} stt={"pt-3 font-[500] text-[25px]"} stt2={"font-[400]"} stt3={"w-18 h-10"} desc={"Managing Director"} icon={social2} />
        <Sect3 img={men3} text={"Will Smith"} stt={"pt-3 font-[500] text-[25px]"} stt2={"font-[400]"} stt3={"w-18 h-10"} desc={"Product Designer"} icon={social2} />
      </div>
      <img className='flex m-auto pt-10' src={menu} alt="" />
      <div className="flex justify-evenly">
        <Sect4 img={img1} title={"FREE AND FAST DELIVERY"} desc={"Free delivery for all orders over $140"} />
        <Sect4 img={img2} title={"24/7 CUSTOMER SERVICE"} desc={"Friendly 24/7 customer support"} />
        <Sect4 img={img3} title={"MONEY BACK GUARANTEE"} desc={"We reurn money within 30 days"} />
      </div>
    </div>
  )
}

export default About