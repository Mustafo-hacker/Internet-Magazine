import React from 'react'
import Sect1 from '../../components/home/section-1/Sect1'
import Sect2 from '../../components/home/section-2/Sect2'
import Sect3 from '../../components/home/section-3/Sect3'
import Sect4 from '../../components/home/section-4/Sect4'
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import Sect5 from '../../components/home/section-5/Sect5'
import Sect7 from '../../components/home/section-7/Sect7'
import Sect6 from '../../components/home/section-6/Sect6'

const Home = () => {
  return (
    <div>
      <Sect1 />
      <Sect2 />
      <Sect3 />
      <Sect4 />
      <Sect5/>
      <Sect6/>
      <div className="flex justify-evenly flex-wrap mt-[20px] max-[638px]:flex-col max-[638px]:items-center">
        <Sect7 img={img1} title={"FREE AND FAST DELIVERY"} desc={"Free delivery for all orders over $140"} />
        <Sect7 img={img2} title={"24/7 CUSTOMER SERVICE"} desc={"Friendly 24/7 customer support"} />
        <Sect7 img={img3} title={"MONEY BACK GUARANTEE"} desc={"We return money within 30 days"} />
      </div>
    </div>
  )
}

export default Home
