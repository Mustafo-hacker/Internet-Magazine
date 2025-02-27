"use client"

import { useEffect, useState } from "react"
import sony from "../../assets/sony.svg"
import sony2 from "../../assets/sony2.svg"
import sony3 from "../../assets/sony3.svg"
import { Link, useParams } from "react-router-dom"
import { useStore } from "../../../store/store"

const Info = () => {
  const { data, product, getProducts, addToCart, getProductById,cart  } = useStore()
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()

  useEffect(() => {
    getProducts()
    getProductById(id)
  }, [id, getProducts, getProductById])

  useEffect(() => {
    console.log("Product:", product)
    console.log("Image path:", product?.image ? `https://store-api.softclub.tj/images/${product.image}` : "No image")
  }, [product])

  const handleImageError = (e) => {
    console.error("Image failed to load:", e.target.src)
    e.target.src = "https://via.placehoylder.com/300"
  }
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState("")
  const [modalType, setModalType] = useState("success")


  const handleAddToCart = (productId) => {
    const isProductInCart = cart?.some((item) => item.id === productId)

    if (isProductInCart) {
      setModalMessage("This product is already in cart!")
      setModalType("warning")
    } else {
      addToCart(productId)
      setModalMessage("Product successfully added to cart!")
      setModalType("success")
    }

    setShowModal(true)

    setTimeout(() => {
      setShowModal(false)
    }, 2000)
  }



  return (
    <>
      <div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowModal(false)}></div>
            <div
              className={`relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 transform transition-all duration-300 ${showModal ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                } ${modalType === "success" ? "border-l-4 border-green-500" : "border-l-4 border-red-500"}`}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex items-center">
                {modalType === "success" ? (
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                )}
                <div>
                  <h3 className={`text-lg font-medium ${modalType === "success" ? "text-green-800" : "text-red-800"}`}>
                    {modalType === "success" ? "Success!" : "Already in Cart"}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{modalMessage}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className={`px-4 py-2 rounded-md text-white ${modalType === "success" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                    }`}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-10 p-10 mt-[100px] max-w-6xl mx-auto">
        <div className="flex gap-3 flex-col lg:flex-row">
          <div className="flex flex-col gap-2">
            {[sony, sony2, sony3].map((img, index) => (
              <img
                key={index}
                src={img || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 bg-[#80808034] mt-2 rounded-md cursor-pointer transition-all duration-300 hover:scale-105"
                onError={handleImageError}
              />
            ))}
          </div>
          {product && product.image ? (
            <img
              src={`https://store-api.softclub.tj/images/${product.image}`}
              alt={product.productName || "Product"}
              className="w-[300px] h-[300px] ml-3 bg-[#8080802b] mt-2 object-contain"
              onError={handleImageError}
            />
          ) : (
            <div className="w-[300px] h-[300px] ml-3 bg-[#8080802b] mt-2 flex items-center justify-center">
              <p>Image loading...</p>
            </div>
          )}
        </div>

        <div className="w-full lg:w-[450px]">
          <h1 className="text-3xl font-bold">{product?.productName || "Loading..."}</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500 text-lg">★★★★☆</span>
            <span className="text-gray-500">({product?.quantity || 0} Reviews)</span>
            <span className="text-green-600 font-semibold">In Stock</span>
          </div>
          <p className="text-3xl font-bold mt-4">${product?.discountPrice || "0.00"}</p>
          <p className="text-gray-500 mt-2 text-sm">{product?.description || "Loading product description..."}</p>

          <div className="mt-4">
            <h3 className="font-semibold">Colours:</h3>
            <div className="flex gap-2 mt-2">
              <span className="w-6 h-6 bg-black rounded-full cursor-pointer border transition-colors duration-200 hover:bg-gray-600"></span>
              <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer border transition-colors duration-200 hover:bg-red-700"></span>
              <span className="w-6 h-6 bg-gray-300 rounded-full cursor-pointer border transition-colors duration-200 hover:bg-gray-500"></span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <h3 className="font-semibold">Quantity:</h3>
            <div className="flex border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition duration-200"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition duration-200"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <Link to="/oplata">
              <button className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-red-600 transition duration-200">
                Buy Now
              </button>
            </Link>
          </div>

          <div className="mt-6 space-y-3 border-t pt-4">
            <div>
              <p className="font-semibold">🚚 Free Delivery</p>
              <p className="text-gray-500 text-sm">Enter your postal code for Delivery Availability</p>
            </div>
            <div>
              <p className="font-semibold">🔄 Return Delivery</p>
              <p className="text-gray-500 text-sm">Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <p className="bg-[#DB4444] ml-[140px] w-[25px] h-[45px] rounded-[4px] mt-[40px] max-[638px]:ml-[20px]"></p>
        <h1 className="text-[#DB4444] font-[600] pt-[50px] pl-[15px] max-[638px]:pt-[50px] max-[638px]:pl-[10px]">
          Related Item
        </h1>
      </div>
      <div className="flex flex-wrap ml-[120px] max-[638px]:ml-[0px]">
        {data.map((el) => (
          <div
            key={el.id}
            className="rounded-lg p-4 relative group transition-all duration-300 max-[638px]:w-[100%] max-[638px]:p-2"
          >
            <div className="relative flex justify-center w-[290px] h-[240px] items-center bg-gray-100 p-4 rounded-lg max-[638px]:w-[100%] max-[638px]:h-[200px]">
              <div className="absolute top-3 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                {`${el.quantity}%`}
              </div>
              {el.image ? (
                <img
                  src={`https://store-api.softclub.tj/images/${el.image}`}
                  alt={el.productName}
                  className="w-36 h-36 object-contain max-[638px]:w-[70%] max-[638px]:h-[70%]"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-36 h-36 bg-gray-200 flex items-center justify-center">
                  <p>No image</p>
                </div>
              )}
              <Link to={`/infoPage/${el.id}`}>
                <button className="absolute top-3 right-2 cursor-pointer bg-white p-1 rounded-full shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </Link>
              <button
                onClick={() => handleAddToCart(el.id)}
                className="absolute cursor-pointer bottom-0 bg-[black] text-white w-full py-2 rounded-md max-[638px]:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                Add to cart
              </button>
            </div>
            <h1 className="mt-4 font-[500] text-[17px] max-[638px]:text-[15px]">{el.productName}</h1>
            <div className="flex space-x-2 mt-2 max-[638px]:flex-col">
              <p className="text-red-500 font-bold text-md">${el.discountPrice}</p>
              <p className="text-gray-400 line-through">${el.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Info

