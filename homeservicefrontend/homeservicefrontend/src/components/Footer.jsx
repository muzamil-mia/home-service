import React from "react";

const Footer = () => {
  return (
    <div className="min-h-[200px] flex justify-center mt-4 bg-gray-800">
      <div className="w-[98%]  rounded-md p-6 text-gray-300 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-white">HomeServO</h3>
          <p className="text-sm">Your trusted partner for home services</p>
        </div>
        <div className="text-sm">
          <p>© 2024 HomeServO. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
