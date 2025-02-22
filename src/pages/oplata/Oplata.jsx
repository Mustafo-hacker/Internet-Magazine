import React from 'react';

const Oplata = () => {
  return (
    <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex pl-5 md:pl-[140px] pt-5 md:pt-[110px] max-[638px]:mt-[50px]">
        <h1 className='text-gray-500'>Home /</h1>
        <h1>Oplata</h1>
      </div>

      <div className="bg-white shadow-lg p-6 mt-5 md:mt-40 rounded-lg w-full max-w-md md:max-w-none mx-auto">
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between mb-2">
            <span>LCD Monitor</span>
            <span>$650</span>
          </div>
          <div className="flex justify-between">
            <span>H1 Gamepad</span>
            <span>$1100</span>
          </div>
        </div>
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
        </div>
        <div className="flex justify-between text-xl font-semibold mb-4">
          <span>Total:</span>
          <span>$1750</span>
        </div>

        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" className="h-4 w-4" />
            <span>Bank</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input type="radio" name="payment" className="h-4 w-4" />
            <span>Cash on delivery</span>
          </label>
        </div>

        <div className="flex mb-4">
          <input type="text" placeholder="Coupon Code" className="border p-2 rounded-l w-full" />
          <button className="bg-red-500 text-white px-4 py-2 rounded-r">Apply</button>
        </div>

        <button className="bg-red-500 text-white px-6 py-3 w-full rounded">Place Order</button>
      </div>
      <div className="bg-white shadow-lg p-6 mt-5 md:mt-[-470px] rounded-lg w-full max-w-md md:max-w-none mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
        <div className="space-y-4">
          <input type="text" placeholder="First name" className="border p-2 rounded w-full" />
          <input type="text" placeholder="Last name" className="border p-2 rounded w-full" />
          <input type="text" placeholder="Street address" className="border p-2 rounded w-full" />
          <input type="text" placeholder="Apartment, floor, etc. (optional)" className="border p-2 rounded w-full" />
          <input type="text" placeholder="Town/City" className="border p-2 rounded w-full" />
          <input type="tel" placeholder="Phone number" className="border p-2 rounded w-full" />
          <input type="email" placeholder="Email address" className="border p-2 rounded w-full" />
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="save-info" className="h-4 w-4 text-red-500" />
            <label htmlFor="save-info" className="text-sm text-gray-600">Save this information for faster check-out next time</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oplata;
