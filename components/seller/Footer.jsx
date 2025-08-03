import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-stone-900 text-stone-100 py-6 border-t border-stone-700">
      <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-6 md:px-10">
        <div className="flex items-center gap-4">
          <Image className="hidden md:block invert" src={assets.logo} alt="logo" />
          <div className="hidden md:block h-7 w-px bg-stone-700"></div>
          <p className="py-4 text-center text-xs md:text-sm text-stone-400 font-body">
            Copyright 2025 © SearchBag.com All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-stone-400 hover:text-teal-500 transition duration-300">
            <Image src={assets.facebook_icon} alt="facebook_icon" className="invert opacity-70 hover:opacity-100 transition duration-300" />
          </Link>
          <Link href="#" className="text-stone-400 hover:text-teal-500 transition duration-300">
            <Image src={assets.twitter_icon} alt="twitter_icon" className="invert opacity-70 hover:opacity-100 transition duration-300" />
          </Link>
          <Link href="#" className="text-stone-400 hover:text-teal-500 transition duration-300">
            <Image src={assets.instagram_icon} alt="instagram_icon" className="invert opacity-70 hover:opacity-100 transition duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;