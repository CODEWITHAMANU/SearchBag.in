import React from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-white border-t text-stone-800 sm:py-10 sm:px-6 md:px-8 border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              <Image
                src="/images/search.png"
                alt="Search Bags Logo"
                width={32}
                height={32}
                className="object-contain w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-xl font-semibold tracking-tight text-teal-700 sm:text-2xl font-logo">
                Search Bags
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-stone-600 sm:text-sm font-body">
              Premium bags for every occasion. Discover our curated collection
              of high-quality bags designed for style and functionality.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="p-1.5 sm:p-2 bg-stone-100 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 text-stone-600"
                >
                  <Icon size={14} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs font-bold tracking-wide text-teal-600 uppercase sm:text-sm">
              Company
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {["About Us", "Contact", "Collections"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href={item === "About Us" ? "/about" : item === "Contact" ? "/contact" : "#"}
                      className="text-xs transition-colors duration-200 sm:text-sm text-stone-600 hover:text-teal-600"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs font-bold tracking-wide text-teal-600 uppercase sm:text-sm">
              Categories
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Travel", "Business", "Student", "Casual", "Luxury"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-xs transition-colors duration-200 sm:text-sm text-stone-600 hover:text-teal-600"
                    >
                      {item} Bags
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-xs font-bold tracking-wide text-teal-600 uppercase sm:text-sm">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex gap-2 items-start sm:gap-3 text-stone-600">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">
                  Byculla (West), Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex gap-2 items-center sm:gap-3 text-stone-600">
                <Phone className="flex-shrink-0 w-4 h-4 text-teal-500 sm:w-5 sm:h-5" />
                <a href="tel:+918828081163" className="text-xs transition-colors duration-200 sm:text-sm hover:text-teal-600">+91 88280 81163</a>
              </li>
              <li className="flex gap-2 items-center sm:gap-3 text-stone-600">
                <Mail className="flex-shrink-0 w-4 h-4 text-teal-500 sm:w-5 sm:h-5" />
                <a href="mailto:searchbags789@gmail.com" className="text-xs transition-colors duration-200 sm:text-sm hover:text-teal-600">searchbags789@gmail.com</a>
              </li>
              <li className="flex gap-2 items-center sm:gap-3 text-stone-600">
                <Clock className="flex-shrink-0 w-4 h-4 text-teal-500 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm">Mon-Sat: 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 mt-8 text-center border-t sm:mt-10 sm:pt-6 border-stone-200">
          <p className="text-xs sm:text-sm text-stone-500">
            © {new Date().getFullYear()} Search Bags. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
