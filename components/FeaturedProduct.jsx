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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-heading tracking-tight">
            FEATURED COLLECTIONS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl text-lg leading-relaxed font-body">
            Discover our most popular and trending bag collections, meticulously
            crafted for style, durability, and everyday functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(({ id, image, title, description }) => (
            <div
              key={id}
              className="relative group overflow-hidden rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-stone-100"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-heading tracking-wide">{title}</h3>
                <p className="text-white/90 mb-4 font-body">{description}</p>
                <button 
                  onClick={() => router.push('/all-products?category=' + title.toLowerCase().replace(' ', '-'))}
                  className="px-6 py-2 bg-teal-500 text-white rounded-full text-sm font-medium hover:bg-teal-600 transition-colors duration-300 shadow-soft hover:shadow-md transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Explore Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
