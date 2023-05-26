import React from 'react'

const TeamMember = ({member}) => {
  return (
    <div data-aos="fade-up" className={`${member.id !== 1 ? 'border-t border-brand-zinc/20': ''} py-8`}>
      <h3 className='font-medium text-2xl text-center text-brand-zinc capitalize mb-1.5'>
        {member.title}
      </h3>
      <span className='block font-semibold text-xs text-center text-brand-primary uppercase mb-4'>
        {member.job}
      </span>
      <div className='text-sm md:text-base text-brand-zinc space-y-4'>
      {member.description.map((text,i) => (
        <p key={i}>
          {text}
        </p>
      ))}
      </div>
    </div>
  )
}

export default TeamMember
