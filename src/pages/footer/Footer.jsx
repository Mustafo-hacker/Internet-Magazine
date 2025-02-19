import social from '../../assets/social.svg'

const Footer = () => {
    return (
      <footer className="bg-[black] text-white py-8 px-4 mt-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="space-y-3 ml-[100px]">
            <h3 className="text-xl font-semibold">Exclusive</h3>
            <h4 className="text-lg">Subscribe</h4>
            <h5 className="text-sm">Get 10% off your first order</h5>
            <div className="relative">
              <input
                className="w-[200px] py-2 pl-2 text-gray-700 rounded-[4px] border border-white bg-transparent placeholder-gray-400 placeholder:text-[13px]"
                placeholder="Enter your email"
                type="email"
              />
            </div>
          </div>
  
          <div className="space-y-3 ml-[120px]">
            <h3 className="text-xl font-semibold">Support</h3>
            <h5 className="text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h5>
            <h5 className="text-sm">exclusive@gmail.com</h5>
            <h5 className="text-sm">+88015-88888-9999</h5>
          </div>
  
          <div className="space-y-3 ml-[130px]">
            <h3 className="text-xl font-semibold">Account</h3>
            <h4 className="text-sm hover:text-gray-400 cursor-pointer">My Account</h4>
            <h4 className="text-sm hover:text-gray-400 cursor-pointer">Card</h4>
            <h4 className="text-sm hover:text-gray-400 cursor-pointer">Wishlist</h4>
            <h4 className="text-sm hover:text-gray-400 cursor-pointer">Shop</h4>
          </div>
  
          <div className="space-y-3 ml-[80px]">
            <h3 className="text-xl font-semibold">Quick Link</h3>
            <h4 className="text-sm hover:text-gray-400 cursor-pointer">Privacy Policy</h4>
            <h4 className="text-sm hover:text-gray-400 cursor-pointer">Terms Of Use</h4>
            <h4 className="text-sm hover:text-gray-400 cursor-pointer">FAQ</h4>
            <h4 className="text-sm hover:text-gray-400 cursor-pointer">Contact</h4>
          </div>
  
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Social</h3>
            <img src={social} alt="Social Links" className="w-40 cursor-pointer" />
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  