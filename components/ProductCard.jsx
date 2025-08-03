import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

const ProductCard = ({ product }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY;

  return (
    <Link href={`/product/${product._id}`}>
      <div className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 border border-stone-100 h-full flex flex-col hover:border-teal-100">
        {/* Image Section */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image?.[0] || assets.placeholder_image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            width={400}
            height={400}
            priority
          />
          <div className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-medium px-3 py-1 rounded-full tracking-wide opacity-90 font-body">
            {product.category}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="font-heading font-semibold text-stone-900 group-hover:text-teal-600 transition-colors duration-300 tracking-tight text-lg mb-2">
            {product.name}
          </h3>
          <p className="text-stone-600 text-sm mb-4 line-clamp-2 flex-grow font-body">
            {product.description}
          </p>

          <div className="flex justify-between items-end mt-auto">
            <div>


              <div className="flex items-baseline gap-2">
                <span className="text-teal-600 font-bold text-lg font-heading">
                  {currency || "₹"}
                  {product.offerPrice}
                </span>
                {product.price > product.offerPrice && (
                  <span className="text-stone-500 text-sm line-through font-body">
                    {currency || "₹"}
                    {product.price}
                  </span>
                )}
              </div>
            </div>

            <div className="bg-teal-50 text-teal-700 text-xs font-medium px-2 py-1 rounded-md font-body">
              {Math.round(
                ((product.price - product.offerPrice) / product.price) * 100
              )}
              % OFF
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
