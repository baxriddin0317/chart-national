import React from "react";
import Title from "./Title";

const About = () => {
  return (
    // about us
    <section id="about" className="max-w-6xl mx-auto px-4 md:px-5 py-16">
      <Title title="about us" />

      <div className="grid md:grid-cols-2">
        <p data-aos="fade-right" className="px-4 mb-8">
          Chart National is a private investment fund with an investment focus
          on companies that are emerging leaders serving the defense,
          intelligence, security and related markets (the "Sector") through
          management buyouts, recapitalizations and in limited cases, structured
          growth equity transactions.
        </p>
        <p data-aos="fade-left" className="px-4 mb-8">
          Chart National’s strategy is to identify companies and management
          teams where we can partner to drive value through relationships and
          access and deliver operational improvement through active board-level
          involvement. Chart has over ten years of dedicated experience in the
          Sector, making it among the most established, experienced private
          equity firms focused in this target market.
        </p>
      </div>
    </section>
  );
};

export default About;
