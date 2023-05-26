import React from "react";

const Title = ({title}) => {
  return (
    <div data-aos="fade-up" className="text-center mb-8">
      <h2 className="text-3xl mb-3 capitalize">{title}</h2>
      <span className="block w-14 h-1 bg-brand-primary mx-auto"></span>
    </div>
  );
};

export default Title;
