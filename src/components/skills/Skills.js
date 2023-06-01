import React from 'react'
import LeftSkills from './LeftSkills'
import RightSkills from './RightSkills'

const Skills = () => {
  return (
    <section
    id="Skills"
    className="w-full pt-10 pb-20  gap-10 xl:gap-0 lgl:flex-row  border-b-[1px] font-titleFont border-b-black"
  >
  
   <h1 className='flex justify-center text-xs '>TECHNICAL AND PROFESSIONAL</h1>
   <h1 className='flex justify-center text-designColor capitalize text-4xl font-bold'>My Skills</h1>  
   <div className='flex flex-row flex-wrap' >
  <LeftSkills/>
  <RightSkills/>
   </div>

  
  
  
  </section>
  )
}

export default Skills

