import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    image: assets.header_macbook_image,
    title: "LUXURY TRAVEL",
    description: "Premium leather travel bags for the sophisticated explorer.",
  },
  {
    id: 2,
    image: assets.boy_with_laptop_image,
    title: "BUSINESS ELITE",
    description: "Professional briefcases and laptop bags for executives.",
  },
  {
    id: 3,
    image: assets.header_headphone_image,
    title: "URBAN STYLE",
    description: "Contemporary designs for the modern city dweller.",
  },
];

const FeaturedProduct = () => {
  const router = useRouter();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-4 py-1.5 rounded-full mb-4 shadow-sm">PREMIUM QUALITY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-heading tracking-tight">
            FEATURED COLLECTIONS
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl text-lg leading-relaxed font-body">
            Discover our most popular and trending bag collections, meticulously
            crafted for style, durability, and everyday functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map(({ id, image, title, description }, index) => {
            // Different accent colors for each card - all in blue shades
            const accentColors = [
              "from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-300",
              "from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400",
              "from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500"
            ];
            
            return (
              <div
                key={id}
                className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-stone-100 transform hover:-translate-y-2"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/20 to-transparent z-10"></div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md z-10"></div>
                
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3 font-heading tracking-wide group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
                  <p className="text-white/90 mb-6 font-body">{description}</p>
                  <button 
                    onClick={() => router.push('/all-products?category=' + title.toLowerCase().replace(' ', '-'))}
                    className={`px-6 py-3 bg-gradient-to-r ${accentColors[index]} text-white rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100`}
                  >
                    Explore Collection
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
