import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="flex pl-[140px] pt-[110px]">
        <h1 className='text-[gray]'>Home /</h1>
        <h1>Contact</h1>
      </div>
      <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#DB4444]">Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div>
                <h2 className="text-xl mt-8 font-semibold mb-4">Password Changes</h2>
                <label className="block text-sm font-medium text-gray-700"></label>
                <input type="email" placeholder='CURRENT PASSWORD' className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" readOnly />
              </div>
              <div>
                <input type="password" placeholder='NEW PASSWORD' className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mt-11 font-medium text-gray-700">Last name</label>
                <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Street address</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value="Kingston, 5226, United State" readOnly />
              </div>
              <div>
                <input type="password" placeholder='Confirm new password' className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md">Cancel</button>
          <button className="px-4 py-2 bg-[#DB4444] text-white rounded-md">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
