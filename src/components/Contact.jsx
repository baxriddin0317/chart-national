import React from 'react'
import Title from './Title'

const Contact = () => {
  return (
    // contact section
    <section id="contact" className='pt-16 pb-20'>
      {/* title */}
      <Title title="contact us" />
      <div data-aos="fade-up" className='max-w-6xl flex flex-col lg:flex-row items-center lg:items-start justify-between mx-auto px-4 lg:px-5'>
        {/* contact */}
        <div className='flex flex-col md:flex-row lg:flex-col items-start justify-around w-full lg:w-auto gap-x-6'>
          <h3 className='text-2xl text-brand-zinc font-medium mb-2 whitespace-nowrap'>
          New York Office
          </h3>
          <p className='text-brand-zinc mb-8'>
            <strong>
            Chart National L.P
            </strong>
            <br />
            45 Rockefeller Plaza
            <br />
            20th Floor
            <br />
            New York, NY 10111
          </p>
          <p className='text-brand-zinc mb-8'>
          (212) 350-8200
          <br />
          <a href="mailto:info@chartnational.com" className='text-brand-primary'>
          info@chartnational.com
          </a>
          </p>
        </div>
        {/* map */}
        <iframe title='myMap' className='w-full lg:w-2/3 h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.122782844418!2d-73.98070228757368!3d40.75932413459651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258feb834773b%3A0xaa70abfd11842ab7!2s45%20Rockefeller%20Plaza%2C%20New%20York%2C%20NY%2010111%2C%20USA!5e0!3m2!1sen!2s!4v1685512478280!5m2!1sen!2s" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  )
}

export default Contact
