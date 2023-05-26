import React from 'react'
import coverdom from "../assets/img/coverdome.jpg"

const Hero = () => {
  return (
    // hero section
    <section id='home' className="relativ bg-no-repeat bg-cover bg-fixed h-screen flex items-center justify-center" style={{backgroundImage: `url(${coverdom})`}}>
      <div className='absolute w-full h-full left-0 top-0 bg-black/70'>
      </div>
      {/* <img className='absolute w-full h-full -z-20' src={coverdom} alt="" /> */}
      <div className='max-w-6xl mx-auto text-center text-white px-4 md:px-5 z-10'>
        <h1 className='text-4xl md:text-5xl lg:text-6.5xl font-semibold mb-4 md:mb-8 capitalize'>
          chart national L.P
        </h1>
        <h3 className='font-light text-lg md:text-2xl lg:text-3xl mb-4 md:mb-8'>
        Partnering with Leading Middle Market Firms
        </h3>
        <h3 className='font-light text-lg md:text-2xl lg:text-3xl mb-4 md:mb-8'>
        Serving the Defense, Security & Intelligence Sector
        </h3>
        <p className='md:text-lg lg:text-xl leading-6 text-white/50'>
          The Sector is the conduit for government innovation through necessity. Great technologies such as the internet, GPS, and Rapid DNA have come about because of Sector needs. In times of national stress, the Sector is where the United States looks to solve problems. This makes it a safe, innovative and productive investment field. Understanding the many facets of what results in successful services and products is Chart National's specialty.
        </p>
      </div>
    </section>
  )
}

export default Hero
