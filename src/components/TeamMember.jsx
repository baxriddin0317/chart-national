import React from 'react'

const TeamMember = ({member}) => {
  return (
    <div data-aos="fade-up" className={`${member.id !== 1 ? 'border-t border-brand-zinc/20': ''} py-8`}>
      <h1 className='font-medium text-2xl text-center text-brand-zinc mb-1.5 capitalize'>
        {member.title}
      </h1>
      <span className='block font-semibold text-xs text-center text-brand-primary uppercase mb-4'>
        {member.job}
      </span>
      {member.description.map((text,i) => (
        <p key={i} className='text-sm md:text-base text-brand-zinc mb-4'>
          {text}
        </p>
      ))}
    </div>
  )
}

export default TeamMember
