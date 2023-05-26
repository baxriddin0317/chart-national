import React from 'react'
import Title from './Title'
import {FaLink} from "react-icons/fa"
import {Portifolio as Data} from "../lib/data"

const Portifolio = () => {
  return (
    // portifolio
    <section id='portifolio' className='max-w-6xl mx-auto px-4 md:px-5 py-16'>
      <Title title="Portfolio Companies" />

      {/* portifolio cards */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 items-stretch'>
        {Data.map(data => (
          <PortifolioCard key={data.id} data={data} />
        ))}
      </div>
    </section>
  )
}

const PortifolioCard = ({data}) => {
  return (
    // card
    <div data-aos="fade-up" className='text-center flex flex-col items-center justify-between px-4'>
      <img className='h-16 md:h-20' src={data.img} alt="pportifolio card" />
      <h1 className='font-medium text-2xl text-brand-zinc mb-1.5 capitalize'>
        {data.title}
      </h1>
      <p className='text-sm text-brand-zinc mb-4'>
      {data.text}
      </p>
      <a href={data.linkUrl} className='flex items-center justify-center w-10 h-10 border border-brand-gray-light text-brand-gray-light hover:text-brand-zinc hover:border-brand-zinc rounded-full' target='_blank' rel="noreferrer">
        <FaLink className="text-xl" />
      </a>
    </div>
  )
}

export default Portifolio
