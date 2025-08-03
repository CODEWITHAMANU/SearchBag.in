import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="relative bg-gradient-to-r from-teal-50 to-stone-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 border-b border-gray-200 shadow-lg rounded-2xl overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-teal-400 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-teal-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/noise.svg')] opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Content - Brand Info */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-teal-700 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700 tracking-tight">
                  SEARCH BAG
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 italic mt-1 font-body">Since 2007</p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <p className="text-base sm:text-lg font-medium text-gray-700 font-body">
                Manufacturer & Wholesaler
              </p>
              <p className="text-lg sm:text-xl font-semibold text-teal-600 font-heading">
                Soft Luggage Experts
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 font-body">
              {[
                "Laptop Bags",
                "College Bags",
                "School Bags",
                "Luggage",
                "Traveling Bags",
              ].map((item, index) => (
                <span
                  key={index}
                  className="bg-white border border-gray-200 px-2 sm:px-3 py-1 rounded-full shadow-soft hover:bg-teal-50 hover:border-teal-200 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-right mt-6 md:mt-0">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col md:items-end">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-teal-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-base sm:text-lg font-medium text-gray-700 font-body">
                    Bulk Deals · Huge Variety · Best Industry Prices
                  </p>
                </div>
              </div>
              <p className="text-lg sm:text-xl font-semibold text-teal-600 font-heading">
                Specialist in Complementary Items
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end space-y-2 sm:space-y-3">
              <button
                onClick={() => router.push("/all-products")}
                className="relative bg-gradient-to-r from-teal-700 to-teal-500 hover:from-teal-600 hover:to-teal-400 text-white px-6 sm:px-10 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-soft hover:shadow-hover group font-body"
              >
                <span className="relative z-10 mr-2">Explore Products</span>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300">
                  →
                </span>
              </button>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <p className="text-gray-500 text-xs sm:text-sm hover:text-teal-600 transition-colors font-body">
                  www.searchbag.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
