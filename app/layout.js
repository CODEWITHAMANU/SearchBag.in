import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  Cormorant_Garamond,
  Parisienne,
  Inter,
  Poppins,
} from "next/font/google";

// Modern sans-serif font for body text
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

// Clean, modern sans-serif alternative
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

// Premium heading font - Elegant serif
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-cormorant",
});

// Premium cursive logo font
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-parisienne",
});

export const metadata = {
  title: "SEARCH BAGS",
  description:
    "Discover our curated collection of premium bags. Find the perfect bag for every occasion.",
};

export default function RootLayout({ children }) {
  const mainBgStyle = {
    background: "linear-gradient(to bottom, #fafafa, #f4f4f2)",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${cormorant.variable} ${parisienne.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" href="/images/search.png" />
        <title>SEARCH BAGS</title>
        <meta
          name="description"
          content="Discover our curated collection of premium bags. Find the perfect bag for every occasion."
        />
      </head>
      <body style={mainBgStyle}>
        <ClerkProvider>
          <AppContextProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster
              position="top-center"
              reverseOrder={false}
              gutter={8}
              toastOptions={{
                className: "",
                duration: 5000,
                style: {
                  background: "#fff",
                  color: "#333",
                },
                success: {
                  duration: 3000,
                  style: {
                    background: "#10b981",
                    color: "#fff",
                  },
                },
                error: {
                  duration: 3000,
                  style: {
                    background: "#ef4444",
                    color: "#fff",
                  },
                },
              }}
            />
          </AppContextProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
