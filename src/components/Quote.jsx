import React from "react";
import { quotes } from "../lib/data";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Quote = () => {
  return (
    <section className="relative bg-black/70">
      <img
        className="absolute w-full h-full -z-20 object-cover"
        src={require("../assets/img/bg-quote.jpg")}
        alt="quotes bg"
      />
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
        {quotes.map((quote, i) => (
          <SwiperSlide key={i}>
            <div className="max-w-6xl mx-auto px-4 md:px-5 py-16 text-center">
              <p className="text-white md:text-lg lg:text-xl mb-5">
                <FaQuoteLeft className="inline-block mr-4" />
                {quote.text}
                <FaQuoteRight className="inline-block ml-4" />
              </p>
              <p className="text-white/80">{quote.smallText}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Quote;
