import { useState } from "react";
import { Slider } from "@mui/material";

const LeftSide = () => {
    const [price, setPrice] = useState([0, 10000]);

    return (
        <>
            <div className="flex pl-[140px] pt-[70px] max-[638px]:ml-[-50px]">
                <h1 className='text-[gray]'>Home /</h1>
                <h1>Explore Our Products</h1>
            </div>  
            <div className="w-64 p-4 border-r border-gray-300 ml-[120px] mt-[60px] max-[638px]:ml-[70px]">
                <div className="mb-4">
                    <h2 className="font-bold mb-2 pl-1">Category</h2>
                    <ul className="space-y-1">
                        {["All products", "Electronics", "Home & Lifestyle", "Mobile", "Sports & Outdoor"].map((category, index) => (
                            <li key={index} className="text-sm cursor-pointer p-1 hover:text-red-500">
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-4">
                    <h2 className="font-bold mb-2 pl-1">Brands</h2>
                    {["Samsung", "Apple", "Huawei", "Poco", "Lenovo"].map((brand, index) => (
                        <div key={index} className="flex items-center p-1 space-x-2">
                            <input type="checkbox" id={brand} className="cursor-pointer" />
                            <label htmlFor={brand} className="text-sm cursor-pointer">{brand}</label>
                        </div>
                    ))}
                </div>

                <div className="mb-4">
                    <h2 className="font-bold mb-2 pl-1">Features</h2>
                    {["Music", "Plastic cover", "8GB Ram", "Super power", "Large Memory"].map((feature, index) => (
                        <div key={index} className="flex items-center p-1 space-x-2">
                            <input type="checkbox" id={feature} className="cursor-pointer" />
                            <label htmlFor={feature} className="text-sm cursor-pointer">{feature}</label>
                        </div>
                    ))}
                </div>

                <div className="mb-4">
                    <h2 className="font-bold mb-2">Price Range</h2>
                    <Slider
                        value={price}
                        onChange={(e, newValue) => setPrice(newValue)}
                        valueLabelDisplay="auto"
                        min={0}
                        max={10000}
                        className="text-red-500"
                    />
                    <div className="flex justify-between text-sm">
                        <span>${price[0]}</span>
                        <span>${price[1]}</span>
                    </div>
                    <button className="mt-2 w-full py-1 border-2 border-red-500 text-red-500 cursor-pointer rounded">
                        Apply
                    </button>
                </div>

                <div className="mb-4">
                    <h2 className="font-bold mb-2 pl-1">Condition</h2>
                    {["Any", "Refurbished", "Brand new", "Old items"].map((condition, index) => (
                        <div key={index} className="flex items-center p-1 space-x-2">
                            <input type="radio" name="condition" id={condition} className="cursor-pointer" />
                            <label htmlFor={condition} className="text-sm cursor-pointer">{condition}</label>
                        </div>
                    ))}
                </div>

                <div>
                    <h2 className="font-bold mb-2 pl-1">Ratings</h2>
                    {[5, 4, 3, 2, 1].map((rating, index) => (
                        <div key={index} className="flex items-center p-1 space-x-2">
                            <input type="checkbox" id={`rating-${rating}`} className="cursor-pointer" />
                            <label htmlFor={`rating-${rating}`} className="text-md text-[gold] cursor-pointer">
                                {"★".repeat(rating) + "☆".repeat(5 - rating)}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default LeftSide;
