"use client";

import Image from "next/image";

const AboutPage = () => {
  const coreValues = [
    {
      title: "PREMIUM QUALITY",
      description:
        "We source the finest materials and partner with skilled artisans to create exceptional products.",
      icon: (
        <svg
          className="w-6 h-6 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "CUSTOMER SATISFACTION",
      description:
        "Your happiness is our priority. We strive to exceed expectations in every interaction.",
      icon: (
        <svg
          className="w-6 h-6 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "AFFORDABLE PRICING",
      description:
        "We offer high-quality products at reasonable prices so everyone can enjoy stylish bags.",
      icon: (
        <svg
          className="w-6 h-6 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "TIMELY DELIVERY",
      description: "We ensure our products reach you on time, every time.",
      icon: (
        <svg
          className="w-6 h-6 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-900 to-teal-700 py-16 sm:py-20 md:py-28">
        {/* <div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-10"></div> */}
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 sm:mb-6">
              ABOUT SEARCH BAG
            </h1>
            <p className="text-base sm:text-lg font-body text-stone-200 leading-relaxed px-2">
              Established in 2007 in Mumbai, we are a premier manufacturer and
              wholesaler of high-quality bags.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            {/* <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="/images/about-mission.jpg"
                alt="Our Mission"
                className="rounded-xl shadow-soft w-full h-auto"
              />
            </div> */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-stone-900 mb-4 sm:mb-6">
                OUR MISSION
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-teal-600 mb-6 sm:mb-8"></div>
              <p className="text-sm sm:text-base text-stone-600 font-body mb-4 sm:mb-6 leading-relaxed">
                At Search Bag, our mission is to offer high-quality, stylish,
                and durable bags that meet the diverse needs of our customers.
                We are committed to delivering innovative products at affordable
                prices, ensuring that everyone can enjoy premium value.
              </p>
              <p className="text-sm sm:text-base text-stone-600 font-body leading-relaxed">
                With a strong focus on customer satisfaction and timely service,
                we aim to build lasting relationships and become a trusted brand
                in every customer's journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-stone-900 mb-4">
              WHY CHOOSE US
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-stone-600 font-body text-sm sm:text-base">
              What makes Search Bag stand out from the competition
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <div className="bg-teal-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  {value.icon}
                </div>
                <h3 className="text-base sm:text-lg font-heading font-semibold text-stone-900 mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-500 font-body text-xs sm:text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-stone-900 mb-4 sm:mb-6 text-center">
              OUR STORY
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-teal-600 mx-auto mb-8 sm:mb-12"></div>
            <div className="text-sm sm:text-base text-stone-600 font-body space-y-4 sm:space-y-6">
              <p>
                Established in the year 2007 at Mumbai, Maharashtra, we "Search
                Bag" are a Sole Proprietorship based firm, engaged as the
                foremost Manufacturer and Wholesaler of Messenger Bags, Boys
                Backpack, and more.
              </p>
              <p>
                Our products are high in demand due to their premium quality and
                affordable prices. Furthermore, we ensure to timely deliver
                these products to our clients, through this we have gained a
                huge clients base in the market.
              </p>
              <p>
                From humble beginnings in Mumbai's bustling bag market, we've
                grown to become a trusted name in the industry, known for our
                commitment to quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
