import React from 'react'
import { projectTwo } from "../../assets/index";
import '../../index.css';



const Projects = () => {
  return (
    <section
    id="Projects"
    className="w-full pt-10 pb-20  gap-10 xl:gap-0 lgl:flex-row  border-b-[1px] font-titleFont border-b-black"
  >
  <div className='flex flex-row justify-center mb-10'>
  <h1 className="text-base  mr-6 text-white tracking-wide cursor-pointer hover:scale-90 px-2 rounded-lg font-bold hover:text-designColor duration-1000  border-solid border-2 border-designColor">all</h1>
  <h1 className="text-base  mr-6 text-white tracking-wide cursor-pointer hover:scale-90 px-2 rounded-lg font-bold hover:text-designColor duration-1000  border-solid border-2 border-designColor">React</h1>
  <h1 className="text-base  mr-6 text-white tracking-wide cursor-pointer hover:scale-90 px-2 rounded-lg font-bold hover:text-designColor duration-1000  border-solid border-2 border-designColor">Flutter</h1>
  </div>

  <div className='flex flex-row justify-center mb-10 flex-wrap '>  
  <img
  className="w-[350px] h-[200px]  rounded-2xl border-solid border-2 hover:scale-105 cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
  src={projectTwo}
  alt="projectTwo"
  />
  <img
  className="w-[350px] h-[200px]  rounded-2xl border-solid border-2 hover:scale-105 cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
  src={projectTwo}
  alt="projectTwo"
  />
  <img
  className="w-[350px] h-[200px]  rounded-2xl border-solid border-2 hover:scale-105 cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
  src={projectTwo}
  alt="projectTwo"
  />
  <img
  className="w-[350px] h-[200px]  rounded-2xl border-solid border-2 hover:scale-105 cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
  src={projectTwo}
  alt="projectTwo"
  />
  <img
  className="w-[350px] h-[200px]  rounded-2xl border-solid border-2 hover:scale-105 cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
  src={projectTwo}
  alt="projectTwo"
  />
  <img
  className="w-[350px] h-[200px]  rounded-2xl border-solid border-2 hover:scale-105 cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
  src={projectTwo}
  alt="projectTwo"
  />
  
  </div>
  </section>
  )
}

export default Projects