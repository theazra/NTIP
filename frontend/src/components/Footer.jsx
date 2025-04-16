import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm items-start w-full">
        <div className="flex flex-col self-start">
          <img src={assets.logo} className="mb-4 w-24 mt-[-20px]" alt="UsedUp Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
          Welcome to UsedUp! Our mission is to offer high-quality second-hand clothing, footwear, and accessories. We believe in sustainability and reuse, helping to reduce waste and protect the environment. Every piece has its own story and is now waiting for a new owner.
          </p>
        </div>
        <div className="self-start">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="self-start">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+387 225 883</li>
            <li>contact@usedup.com</li>
          </ul>
        </div>
      </div>

      {/* Footer koji je izvan grida */}
      <div className="w-full flex flex-col items-center justify-center text-center mt-10">
        <hr className="w-full" />
        <p className="py-5 text-sm">Copyright 2025 © usedup.com. All Rights Reserved.</p>
      </div>
    </>
  );
};
export default Footer;