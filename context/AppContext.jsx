"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const router = useRouter();
  const { user, isLoaded } = useUser();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Check URL for category parameter
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get("category");

        if (categoryParam) {
          setCategory(categoryParam);
        }

        const response = await fetch("/api/product/list");
        const data = await response.json();
        if (data.success) {
          let filteredProducts = data.products;

          // Filter by category if specified
          if (categoryParam) {
            filteredProducts = data.products.filter(
              (product) =>
                product.category.toLowerCase() === categoryParam.toLowerCase()
            );
          }

          setProducts(filteredProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const formatWhatsAppMessage = (product) => {
    return `Hi, I'm interested in the ${product.name}. Could you provide more information about it?`;
  };

  const openWhatsAppChat = (product) => {
    const message = formatWhatsAppMessage(product);
    const phoneNumber = "+918828081163"; // Use product's WhatsApp number or default
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const getToken = async () => {
    try {
      const token = await fetch("/api/get-token").then((res) => res.json());
      return token;
    } catch (error) {
      console.error("Error getting token:", error);
      return null;
    }
  };

  // Check if user is a seller
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    if (isLoaded && user) {
      // Check if user has seller role in metadata
      setIsSeller(user.publicMetadata?.role === "seller");
    } else {
      setIsSeller(false);
    }
  }, [isLoaded, user]);

  const value = {
    products,
    setProducts,
    loading,
    category,
    setCategory,
    formatWhatsAppMessage,
    openWhatsAppChat,
    getToken,
    cart,
    setCart,
    router,
    user,
    isSeller,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
