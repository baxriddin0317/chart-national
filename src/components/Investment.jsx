import React from "react";
import Title from "./Title";
import {Investment as Data} from "../lib/data"

const Investment = () => {
  return (
    // Investment
    <section id="profile" className="bg-brand-gray text-center py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-5">
        <Title title="Investment profile" />
        <p className="text-brand-zinc mb-8">
          Chart National seeks to make control equity investments in lower
          middle market companies in the Defense, Security and Intelligence
          sector, focused on priority/high-growth budget areas, driving value
          primarily through organic growth but augmented by targeted acquisition
          growth when appropriate.
        </p>
        <p className="text-brand-zinc mb-8">
          Our targeted portfolio companies exhibit most, if not all, of the
          following attributes:
        </p>
        {/* investment cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 items-start pt-8">
          {Data.map(data => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({data}) => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-center text-white text-2xl w-12 h-12 mx-auto rounded-full bg-brand-primary mb-3.5">
        {data.icon}
      </div>
      <p className="text-brand-gray-primary text-sm mb-8">
        {data.text}
      </p>
    </div>
  )
}

export default Investment;
