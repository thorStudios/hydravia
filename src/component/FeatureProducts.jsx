import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay, Navigation} from "swiper/modules";
import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.png";
import product3 from "../assets/products/product3.png";
import {Link} from "react-router";
import {FaStar} from "react-icons/fa";
import {FaLeftLong} from "react-icons/fa6";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

const products = [
  {
    id: 1,
    name: "Advanced RO Water Purifier",
    price: 199,
    description:
      "Removes 99.9% bacteria, viruses & heavy metals with multi-stage RO + UV filtration.",
    image: product1,
    features: ["7-Stage Filtration", "UV Protection", "Smart Monitoring"],
  },
  {
    id: 2,
    name: "Premium UV + UF Filter System",
    price: 149,
    description:
      "Ideal for households, ensures pure, safe drinking water with UV + UF protection.",
    image: product2,
    features: ["UV + UF Technology", "Compact Design", "Easy Maintenance"],
  },
  {
    id: 3,
    name: "Alkaline RO Purifier with Mineral Boost",
    price: 249,
    description:
      "Restores natural minerals & provides pH-balanced alkaline water for better health.",
    image: product3,
    features: ["Mineral Restoration", "pH Balance", "Alkaline Water"],
  },
];

const FeatureProducts = () => {
  return (
    <section className="py-16">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold  mb-4 text-center">
            Featured <span className="text-primary">Products</span> 
            <div className="w-16 rounded-md h-1 mt-2 bg-primary mx-auto"></div>
          </h2>
          <p className="text-lg font-normal text-gray-600 max-w-2xl mx-auto capitalize">
            Discover our premium collection of water purification systems
            designed for your health and safety
          </p>
        </div>

        {/* Swiper Carousel - Compact Version */}
        <div className="relative">
          <Swiper
            modules={[Navigation,Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="relative group px-5"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-linear-to-r from-primary/10 to bg-cyan-50 rounded-3xl shadow transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer">
                  <div className="grid grid-cols-1 md:grid-cols-3  p-6">
                    {/* Product Information - Compact */}
                    <div className="md:col-span-2 flex flex-col justify-center space-y-2 pl-5 py-10">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed mb-3 capitalize font-medium">
                          {product.description}
                        </p>

                        {/* Features List */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full border border-green-200 font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-start gap-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-bold text-green-600">
                            ${product.price}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ${product.price + 50}
                          </span>
                          <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded">
                            SAVE $50
                          </span>
                        </div>

                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              size={15}
                              className="text-yellow-400"
                            />
                          ))}
                          <span className="text-sm text-gray-500 ml-1">
                            (128)
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons - Compact */}
                      <div className="mt-4 flex justify-start items-center gap-4 space-x-3">
                        <Link to={`/product/${product.id}`} className="">
                          <button className="btn-primary">
                            Buy Now
                          </button>
                        </Link>
                        <Link to={`/product/${product.id}`} className="">
                          <button className="btn-secondary ">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Product Image - Compact */}
                    <div className="md:col-span-1 flex items-center justify-center ">
                      <div className="relative">
                        <div className="absolute -inset-3 bg-linear-to-r from-green-100 to-blue-100 rounded-2xl opacity-60 blur-md"></div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="relative w-full h-70 rounded-lg object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
            {/* Custom Compact Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4.5 z-10">
              <button className="custom-prev w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-green-600 hover:border-green-400 transition-all duration-300 transform hover:scale-110 group-hover:opacity-100 ">
                <MdChevronLeft />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4.5 z-10">
              <button className="custom-next w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-green-600 hover:border-green-400 transition-all duration-300 transform hover:scale-110 group-hover:opacity-100  ">
                <MdChevronRight />
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
