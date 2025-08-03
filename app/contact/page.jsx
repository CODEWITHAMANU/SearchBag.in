"use client";

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mblkywpq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-900 to-teal-700 py-16 sm:py-20 md:py-24">
        {/* <div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-10"></div> */}
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 sm:mb-6">
              CONTACT US
            </h1>
            <p className="text-base sm:text-lg font-body text-stone-200 leading-relaxed px-2">
              Have questions about our products? We're here to help and answer
              any questions you might have.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-soft">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-stone-900 mb-4 sm:mb-6">
                  Send Us a Message
                </h2>
                <div className="w-12 sm:w-16 h-1 bg-teal-600 mb-6 sm:mb-8"></div>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone-700 mb-1 sm:mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 font-body"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700 mb-1 sm:mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 font-body"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-stone-700 mb-1 sm:mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 font-body"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-700 mb-1 sm:mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 font-body"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-soft hover:shadow-hover text-sm sm:text-base ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>

                  {isSubmitted && (
                    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-teal-50 text-teal-700 rounded-lg border-l-4 border-teal-600 text-sm sm:text-base">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/2">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-soft mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-stone-900 mb-4 sm:mb-6">
                  Our Store
                </h2>
                <div className="w-12 sm:w-16 h-1 bg-teal-600 mb-6 sm:mb-8"></div>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-teal-50 p-2.5 sm:p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-heading font-semibold text-stone-900 mb-0.5 sm:mb-1">
                        Address
                      </h3>
                      <p className="text-sm sm:text-base text-stone-600 font-body">
                        Shop No. 27, Lohe Ki Chawl, Mumbai Bag Market
                      </p>
                      <p className="text-sm sm:text-base text-stone-600 font-body">
                        Maulana Azad Road, Madanpura, Mumbai-8
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-teal-50 p-2.5 sm:p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-heading font-semibold text-stone-900 mb-0.5 sm:mb-1">
                        Phone
                      </h3>
                      <a href="tel:+918828081163" className="text-sm sm:text-base text-stone-600 hover:text-teal-600 transition-colors duration-200 font-body">
                        +91 88280 81163
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-teal-50 p-2.5 sm:p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-heading font-semibold text-stone-900 mb-0.5 sm:mb-1">
                        Email
                      </h3>
                      <a href="mailto:searchbags789@gmail.com" className="text-sm sm:text-base text-stone-600 hover:text-teal-600 transition-colors duration-200 font-body">
                        searchbags789@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-soft">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-stone-900 mb-4 sm:mb-6">
                  Business Hours
                </h2>
                <div className="w-12 sm:w-16 h-1 bg-teal-600 mb-6 sm:mb-8"></div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex justify-between pb-2 sm:pb-3 border-b border-stone-100">
                    <span className="text-sm sm:text-base text-stone-600 font-body font-medium">
                      Monday - Friday
                    </span>
                    <span className="text-sm sm:text-base font-semibold font-body text-stone-900">
                      10:00 AM - 7:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between pb-2 sm:pb-3 border-b border-stone-100">
                    <span className="text-sm sm:text-base text-stone-600 font-body font-medium">
                      Saturday
                    </span>
                    <span className="text-sm sm:text-base font-semibold font-body text-stone-900">
                      10:00 AM - 5:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm sm:text-base text-stone-600 font-body font-medium">
                      Sunday
                    </span>
                    <span className="text-sm sm:text-base font-semibold font-body text-stone-900">
                      Closed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
