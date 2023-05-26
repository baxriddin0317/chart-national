import React from "react";
import coverdom from "../assets/img/coverdome.jpg";

const Hero = () => {
  return (
    // hero section
    <section
      id="home"
      className="relativ flex items-center justify-center bg-no-repeat bg-cover bg-center bg-fixed bg-blend-overlay bg-black/70 h-screen"
      style={{ backgroundImage: `url(${coverdom})` }}>
      {/* hero contents */}
      <div
        data-aos="zoom-in"
        className="max-w-6xl mx-auto text-center text-white px-4 md:px-5 z-10 space-y-3 md:space-y-8">
        {/* title */}
        <h1 className="font-semibold text-3xl md:text-5xl lg:text-6.5xl capitalize">
          chart national L.P
        </h1>
        <h3 className="font-light md:text-2xl lg:text-3xl">
          Partnering with Leading Middle Market Firms
        </h3>
        <h3 className="font-light md:text-2xl lg:text-3xl">
          Serving the Defense, Security & Intelligence Sector
        </h3>
        <p className="text-sm md:text-lg lg:text-xl leading-6 text-white/50">
          The Sector is the conduit for government innovation through necessity.
          Great technologies such as the internet, GPS, and Rapid DNA have come
          about because of Sector needs. In times of national stress, the Sector
          is where the United States looks to solve problems. This makes it a
          safe, innovative and productive investment field. Understanding the
          many facets of what results in successful services and products is
          Chart National's specialty.
        </p>
      </div>
    </section>
  );
};

export default Hero;
