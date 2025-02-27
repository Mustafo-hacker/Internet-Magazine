import React, { useEffect, useState } from 'react';
import { useStore } from '../../../store/store';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { data, getProducts, addToCart, deleteCart, cart } = useStore()

  useEffect(() => {
    getProducts();
  }, []);


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
      <div className="flex items-center justify-between px-[140px] pt-[80px] max-[638px]:grid">
        <h1 className="font-[400] text-[18px] max-[638px]:ml-[-90px]">Wishlist (4)</h1>
        <p className="mt-[50px] mb-[40px] max-[638px]:ml-[-90px]">
          <span className="border-2 border-[gray] p-[10px_35px] cursor-pointer hover:bg-gray-200">
            Move All To Bag
          </span>
        </p>
      </div>
      <div className="flex flex-wrap ml-[120px] max-[638px]:ml-[0px]">
        {data.map((el) => (
          <div key={el.id} className="rounded-lg p-4 relative group transition-all duration-300 max-[638px]:w-[100%] max-[638px]:p-2">
            <div className="relative flex justify-center w-[290px] h-[240px] items-center bg-gray-100 p-4 rounded-lg max-[638px]:w-[100%] max-[638px]:h-[200px]">
              <div className="absolute top-3 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                {`${el.quantity}%`}
              </div>
              <img src={`https://store-api.softclub.tj/images/${el.image}`} alt={el.productName} className="w-36 h-36 object-contain max-[638px]:w-[70%] max-[638px]:h-[70%]" />
              <button
                onClick={() => deleteCart(el.id)}
                className="absolute top-2 right-2 cursor-pointer bg-white p-1 rounded-full shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-0.346 9M9.26 9l0.346 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
              <Link to={`/infoPage/${el.id}`}>
                <button className="absolute top-12 right-2 cursor-pointer bg-white p-1 rounded-full shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </Link>
              <button
                onClick={() => handleAddToCart(el.id)}
                className="absolute cursor-pointer bottom-0 bg-[black] text-white  px-26 max-[638px]:px-35 py-2 rounded-md max-[638px]:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
    </div>
  );
};

export default Wishlist;
