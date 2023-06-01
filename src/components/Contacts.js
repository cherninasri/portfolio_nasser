import React from 'react'
import { CgMail } from "react-icons/cg";
import { BsWhatsapp , BsFacebook} from "react-icons/bs";


import '../index.css';


const Contacts = () => {
  return (
     <section
    id="contact"
    className="w-full pt-10 pb-20 xl:gap-0 lgl:flex-row  border-b-[1px] font-titleFont border-b-black"
  >
  
   <h1 className='flex justify-center text-xs '>GET IN TOUCH</h1>
   <h1 className='flex justify-center text-designColor capitalize text-4xl font-bold'>Contact Us</h1>  
   <div className='flex flex-row flex-wrap mt-20' >

   
   <div className='w-[300px] relative mx-auto h-[300px] rounded-2xl border-solid border-2 border-SecondesignColor flex flex-col items-center bg-SecondesignColor duration-1000 hover:-translate-y-3' > 
   <div className=' mt-12 g ml-16'  >
   <CgMail/>
   </div>
   <h1 className='font-NFonts text-base text-white mb-52 mr-4'>Email</h1>
   <h1 className='font-NFonts text-base text-white mt-36  absolute'>cherniinasriii@gmail.com</h1>
  <h1 className="text-base mt-60 font-NFonts  absolute text-white tracking-wide cursor-pointer hover:scale-125    hover:text-designColor duration-1000  border-designColor">send a message</h1>


   </div>
   <div className='w-[300px] relative mx-auto h-[300px] rounded-2xl border-solid border-2 border-SecondesignColor flex flex-col items-center bg-SecondesignColor duration-1000 hover:-translate-y-3' > 
   <div className=' mt-12 g ml-16'  >
   <BsFacebook/>
   </div>
   <h1 className='font-NFonts text-base text-white mb-52 mr-4'>Facebook</h1>
   <h1 className='font-NFonts text-base text-white mt-36 -ml-5  absolute'>Na sser</h1>
  <h1 className="text-base mt-60 font-NFonts  absolute text-white tracking-wide cursor-pointer hover:scale-125    hover:text-designColor duration-1000  border-designColor">send a message</h1>


   </div>
   <div className='w-[300px] relative mx-auto h-[300px] rounded-2xl border-solid border-2 border-SecondesignColor flex flex-col items-center bg-SecondesignColor duration-1000 hover:-translate-y-3' > 
   <div className=' mt-12 g ml-16'  >
   <BsWhatsapp/>
   </div>
   <h1 className='font-NFonts text-base text-white mb-52 mr-4'>Whatsapp</h1>
   <h1 className='font-NFonts text-base text-white mt-36  l absolute'>50349860</h1>
  <h1 className="text-base mt-60 font-NFonts  absolute text-white tracking-wide cursor-pointer hover:scale-125    hover:text-designColor duration-1000  border-designColor">send a message</h1>


   </div>
   
   
  
 
   </div>

  
  
  
  </section>
 
  )
}

export default Contacts