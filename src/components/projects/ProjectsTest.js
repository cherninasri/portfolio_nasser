import React,{useState} from 'react'
import { projectTwo ,projectOne,} from "../../assets/index";
import '../../index.css';



const Projecttt = () => {

  const [change ,setchange] = useState('all')

  const all = ()=>{
    setchange('all')

  }
  const react = ()=>{
    setchange('react')

  }
  const flutter = ()=>{
    setchange('flutter')

  }
  

 
  return (
    <section
    id="Projects"
    className="w-full pt-10 pb-20  gap-10 xl:gap-0 lgl:flex-row  border-b-[1px] font-titleFont border-b-black"
  >
  <div className='flex flex-row justify-center mb-10'>
  <h1  className="text-base  mr-6 text-white tracking-wide cursor-pointer hover:scale-90 px-2 rounded-lg font-bold hover:text-designColor duration-1000  border-solid border-2 border-designColor" onClick={all}>all</h1>
  <h1 className="text-base  mr-6 text-white tracking-wide cursor-pointer hover:scale-90 px-2 rounded-lg font-bold hover:text-designColor duration-1000  border-solid border-2 border-designColor" onClick={react}>React</h1>
  <h1 className="text-base  mr-6 text-white tracking-wide cursor-pointer hover:scale-90 px-2 rounded-lg font-bold hover:text-designColor duration-1000  border-solid border-2 border-designColor" onClick={flutter}>Flutter</h1>
  </div>

{change=='all' ? (
  <div className='flex flex-row justify-center mb-10 flex-wrap '>  
  <div className='relative op hover:scale-105 duration-1000' >
  <img
  className="w-[350px]  h-[200px] bg-cover  rounded-2xl border-solid border-2  cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
  src={projectTwo}
  alt="projectTwo"
  />
  <h1 className='  w-[350px]  h-[200px]  flex flex-row justify-center items-center opp absolute bottom-0 left-0 top-0 font-bold bg-black opacity-0 '>E-Commerce</h1>
  </div>
  <div className='relative op hover:scale-105 duration-1000' >
  <img
  className="w-[350px]  h-[200px] bg-cover  rounded-2xl border-solid border-2  cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
  src={projectTwo}
  alt="projectTwo"
  />
  <h1 className='  w-[350px]  h-[200px]  flex flex-row justify-center items-center opp absolute bottom-0 left-0 top-0 font-bold bg-black opacity-0 '>E-Commerce</h1>
  </div>
  <div className='relative op hover:scale-105 duration-1000' >
  <img
  className="w-[350px]  h-[200px] bg-cover  rounded-2xl border-solid border-2  cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
  src={projectTwo}
  alt="projectTwo"
  />
  <h1 className='  w-[350px]  h-[200px]  flex flex-row justify-center items-center opp absolute bottom-0 left-0 top-0 font-bold bg-black opacity-0 '>E-Commerce</h1>
  </div>
  <div className='relative op hover:scale-105 duration-1000' >
  <img
  className="w-[350px]  h-[200px] bg-cover  rounded-2xl border-solid border-2  cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
  src={projectTwo}
  alt="projectTwo"
  />
  <h1 className='  w-[350px]  h-[200px]  flex flex-row justify-center items-center opp absolute bottom-0 left-0 top-0 font-bold bg-black opacity-0 '>E-Commerce</h1>
  </div>
  <div className='relative op hover:scale-105 duration-1000' >
  <img
  className="w-[350px]  h-[200px] bg-cover  rounded-2xl border-solid border-2  cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
  src={projectTwo}
  alt="projectTwo"
  />
  <h1 className='  w-[350px]  h-[200px]  flex flex-row justify-center items-center opp absolute bottom-0 left-0 top-0 font-bold bg-black opacity-0 '>E-Commerce</h1>
  </div>
  <div className='relative op hover:scale-105 duration-1000' >
  <img
  className="w-[350px]  h-[200px] bg-cover  rounded-2xl border-solid border-2  cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
  src={projectTwo}
  alt="projectTwo"
  />
  <h1 className='  w-[350px]  h-[200px]  flex flex-row justify-center items-center opp absolute bottom-0 left-0 top-0 font-bold bg-black opacity-0 '>E-Commerce</h1>
  </div>
  </div>


): change=='react' ?( <div className='flex flex-row justify-center mb-10 flex-wrap '>  
<img
className="w-[350px] h-[200px]  rounded-2xl border-solid border-2 hover:scale-105 cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
src={projectOne}
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
):(<div className='flex flex-row justify-center mb-10 flex-wrap '>  
<img
className="w-[350px] h-[200px]  rounded-2xl border-solid border-2 hover:scale-105 cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
src={projectOne}
alt="projectTwo"
/>
<img
className="w-[350px] h-[200px]  rounded-2xl border-solid border-2 hover:scale-105 cursor-pointer duration-1000 hover:ring-opacity-70 mb-6 border-designColor mr-5 "
src={projectOne}
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
</div>)}

 
  
  </section>
  )
}

export default Projecttt