import React, { useEffect, useState } from 'react'
import sony from '../../../assets/sony.svg'
import sony2 from '../../../assets/sony2.svg'
import sony3 from '../../../assets/sony3.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Sect2 = () => {
    const [data, setData] = useState([])
    const get = async () => {
        try {
            const { data } = await axios.get("https://store-api.softclub.tj/Product/get-products")
            setData(data.data)
        } catch (error) {
            console.error(error);

        }
    }
    const addToCart = async (id) => {
        try {
            //  const data = await axios(`https://store-api.softclub.tj/Cart/add-product-to-cart?id=${id}`,{
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            //   },
            // })
            // console.log(data);

            const response = fetch(`https://store-api.softclub.tj/Cart/add-product-to-cart?id=${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            console.log(response)
        } catch (error) {
            console.error(error);

        }
    }
    useEffect(() => {
        get()
    }, [])
    return (
        <div>
            <div className='flex'>
                <p className='bg-[#DB4444] ml-[140px] w-[25px] h-[45px] rounded-[4px] mt-[40px] max-[638px]:ml-[20px]'></p>
                <h1 className='text-[#DB4444] font-[600] pt-[50px] pl-[15px] max-[638px]:pt-[50px] max-[638px]:pl-[10px]'>Today’s</h1>
            </div>
            <div className="flex">
                <h1 className='pl-[140px] font-[500] text-[37px] pt-[25px] max-[638px]:pl-[20px] max-[638px]:text-[28px] max-[638px]:w-[100px]'>Flash Sales</h1>
                <div className="flex max-[638px]:ml-[0px] max-[638px]:mt-[30px]">
                    <div>
                        <h1 className='font-[500] pt-[3px] pl-[90px] max-[638px]:pl-[0]'>Days</h1>
                        <h1 className='font-[700] text-[35px] pl-[87px] max-[638px]:pl-[0]'>03</h1>
                    </div>
                    <div>
                        <h1 className='text-[#E07575] pt-[29px] pl-[15px] text-[30px]'>:</h1>
                    </div>
                    <div>
                        <h1 className='font-[500] pt-[3px] pl-[15px]'>Hours</h1>
                        <h1 className='font-[700] text-[35px] pl-[15px]'>23</h1>
                    </div>
                    <div>
                        <h1 className='text-[#E07575] pt-[29px] pl-[15px] text-[30px]'>:</h1>
                    </div>
                    <div>
                        <h1 className='font-[500] pt-[3px] pl-[15px]'>Minutes</h1>
                        <h1 className='font-[700] text-[35px] pl-[15px]'>19</h1>
                    </div>
                    <div className='max-[638px]:hidden'>
                        <h1 className='text-[#E07575] pt-[29px] pl-[2px] text-[30px]'>:</h1>
                    </div>
                    <div className='max-[638px]:hidden'>
                        <h1 className='font-[500] pt-[3px] pl-[15px]'>Seconds</h1>
                        <h1 className='font-[700] text-[35px] pl-[15px]'>56</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-wrap ml-[120px] max-[638px]:ml-[10px]">
                    {data?.products?.length > 0 && data.products.map((el) => {
                        return <div key={el.id}>
                            <h2>{el.productName}</h2>
                            <p>{el.categoryName}</p>
                            <p>{el.price}</p>
                            <button onClick={() => addToCart(el.id)}>Add to Cart</button>
                        </div>
                    })}
                </div>
            </div>
            <Link to="/allProduct">
                <div>
                    <p className='text-center mt-[30px]'><span className='text-[white] bg-[#DB4444] p-[15px_45px] rounded-[4px] max-[638px]:p-[10px_30px]'>View All Products</span></p>
                </div>
            </Link>
        </div>
    )
}

export default Sect2
