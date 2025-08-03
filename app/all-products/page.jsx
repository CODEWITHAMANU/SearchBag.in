"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/context/AppContext";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { assets } from "@/assets/assets";

const AllProducts = () => {
  const { products, category, setCategory, loading } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [complimentaryItems, setComplimentaryItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showComplimentary, setShowComplimentary] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Effect to set active filter from URL or context
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setActiveFilter(categoryParam);
      setCategory(categoryParam);
    } else if (category) {
      setActiveFilter(category);
    }
    
    console.log("URL category param:", categoryParam);
    console.log("Active filter set to:", activeFilter);
  }, [searchParams, category, setCategory]);

  // Effect to filter products when products or active filter changes
  useEffect(() => {
    console.log("Products from context:", products?.length || 0);
    console.log("Active filter for filtering:", activeFilter);
    
    if (products && products.length > 0) {
      console.log("Available categories in products:", [...new Set(products.map(p => p.category.toLowerCase()))]);
      
      let filtered;
      if (activeFilter === "all") {
        filtered = products;
      } else {
        filtered = products.filter(
          (product) => {
            // Normalize category names for comparison
            const productCategory = product.category.toLowerCase().trim();
            const filterCategory = activeFilter.toLowerCase().trim();
            
            // Check for partial matches or specific mappings
            const match = 
              productCategory === filterCategory ||
              productCategory.includes(filterCategory) ||
              filterCategory.includes(productCategory);
              
            console.log(`Product ${product.name} category: ${productCategory}, match with ${filterCategory}: ${match}`);
            return match;
          }
        );
      }
      console.log("Filtered products count:", filtered.length);
      setFilteredProducts(filtered);
      
      // Set complimentary items based on current category
      // For example, if viewing bags, show accessories as complimentary
      const complementaryMap = {
        "backpack": ["accessories", "complementary items"],
        "laptop bag": ["accessories", "complementary items"],
        "sling bag": ["accessories", "complementary items"],
        "duffel bag": ["accessories", "complementary items"],
        "gym bag": ["accessories", "complementary items"],
        "accessories": ["backpack", "laptop bag", "complementary items"],
        "complementary items": ["backpack", "laptop bag", "accessories"]
      };
      
      const complementaryCategories = complementaryMap[activeFilter] || [];
      if (complementaryCategories.length > 0) {
        const complementaryProducts = products.filter(product => 
          complementaryCategories.includes(product.category.toLowerCase())
        ).slice(0, 4); // Limit to 4 items
        
        setComplimentaryItems(complementaryProducts);
        setShowComplimentary(complementaryProducts.length > 0);
      } else {
        setComplimentaryItems([]);
        setShowComplimentary(false);
      }
    } else {
      setFilteredProducts([]);
      setComplimentaryItems([]);
      setShowComplimentary(false);
    }
  }, [products, activeFilter]);

  const categories = [
    { id: "all", name: "All Bags" },
    { id: "backpack", name: "Backpack" },
    { id: "laptop bag", name: "Laptop Bag" },
    { id: "sling bag", name: "Sling Bag" },
    { id: "duffel bag", name: "Duffel Bag" },
    { id: "gym bag", name: "Gym Bag" },
    { id: "accessories", name: "Accessories" },
    { id: "complementary items", name: "Complementary Items" },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10 sm:mb-12 px-2 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
          <div className="absolute bottom-0 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 font-heading tracking-tight mb-4 relative">
            Our Collection
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-4 sm:mb-6 shadow-sm"></div>
          <p className="text-blue-800/80 max-w-md sm:max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-body relative">
            Explore our complete collection of premium bags, designed for every
            lifestyle and occasion.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 sm:mb-10">
          <div className="bg-white rounded-xl shadow-md p-4 border border-blue-100 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4 relative z-10">
              <h2 className="text-base sm:text-lg font-medium text-blue-900 font-heading">
                Filter by Category
              </h2>
              <p className="text-blue-700/70 text-sm font-body bg-blue-50/70 px-3 py-1 rounded-full">
                {filteredProducts.length} products found
              </p>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveFilter(cat.id);
                    // Update URL with category parameter
                    if (cat.id === "all") {
                      router.push("/all-products");
                    } else {
                      router.push(`/all-products?category=${cat.id}`);
                    }
                  }}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap rounded-lg ${
                    activeFilter === cat.id
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                      : "bg-white text-blue-800 hover:bg-blue-50 border border-blue-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="col-span-full text-center py-16 sm:py-20 px-4">
            <div className="mx-auto max-w-md relative">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 bg-blue-200 rounded-full mb-4"></div>
                <div className="h-4 bg-blue-200 rounded w-48 mb-2"></div>
                <div className="h-3 bg-blue-100 rounded w-32"></div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Products Grid */}
            {filteredProducts && filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            ) : (
              <div className="col-span-full text-center py-16 sm:py-20 px-4">
                <div className="mx-auto max-w-md relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
                  <svg
                    className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-blue-400 relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <h3 className="mt-4 text-lg sm:text-xl font-medium text-blue-900 font-heading relative z-10">
                    No products found
                  </h3>
                  <p className="mt-2 text-sm text-blue-700/70 font-body relative z-10">
                    We couldn't find any products in this category.
                  </p>
                  <div className="mt-6 relative z-10">
                    <button
                      onClick={() => {
                        setActiveFilter("all");
                        router.push("/all-products");
                      }}
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      View All Products
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Complimentary Items Section */}
            {showComplimentary && complimentaryItems.length > 0 && (
              <div className="mt-16 pt-8 border-t border-blue-100">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 font-heading tracking-tight mb-3 relative">
                    Complimentary Items
                  </h2>
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-3"></div>
                  <p className="text-blue-800/80 max-w-md sm:max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-body">
                    Products that pair perfectly with your {activeFilter}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
                  {complimentaryItems.map((product, index) => (
                    <ProductCard key={`comp-${index}`} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
