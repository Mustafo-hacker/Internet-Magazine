import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate(); 

    const handleBackToProducts = () => {
        navigate('/home');
    };

    return (
        <div className="min-h-screen flex mt-[0px] mb-[-150px] items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
                <div className="flex justify-center">
                    <svg
                        className="w-16 h-16 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h1 className="text-2xl font-bold mt-4 text-gray-800">
                    Ваш заказ успешно оформлен!
                </h1>

                <p className="mt-2 text-gray-600">
                    Спасибо за ваш заказ. Мы отправили вам подтверждение на email. Если у вас есть вопросы, свяжитесь с нами.
                </p>

                <button
                    onClick={handleBackToProducts}
                    className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Вернуться к продуктам
                </button>
            </div>
        </div>
    );
};

export default Success;