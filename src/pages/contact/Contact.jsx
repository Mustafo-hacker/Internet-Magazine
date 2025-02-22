import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="p-5 md:p-10">
      <div className="flex pl-5 md:pl-[140px] pt-5 md:pt-[110px] max-[638px]:mt-[50px]">
        <h1 className='text-gray-500'>Home /</h1>
        <h1>Contact</h1>
      </div>

      <div className="flex flex-col md:flex-row mt-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="bg-white shadow-lg p-6 w-full md:w-1/3 rounded-lg">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-red-500 p-3 rounded-full text-white">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call To Us</h3>
              <p className="text-gray-500 text-sm">We are available 24/7, 7 days a week.</p>
              <p className="text-gray-500 text-sm">Phone: +8801611112222</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-red-500 p-3 rounded-full text-white">
              <MdEmail />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Write To Us</h3>
              <p className="text-gray-500 text-sm">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-gray-500 text-sm">Emails: customer@exclusive.com</p>
              <p className="text-gray-500 text-sm">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg p-6 w-full md:w-2/3 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input type="text" placeholder="Name" className="border p-2 rounded w-full" />
            <input type="email" placeholder="Email" className="border p-2 rounded w-full" />
            <input type="tel" placeholder="Phone" className="border p-2 rounded w-full" />
          </div>
          <textarea placeholder="Your Message" className="border p-2 rounded w-full h-32 mb-4"></textarea>
          <button className="bg-red-500 w-full md:w-auto md:ml-auto text-white px-6 py-2 rounded">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
