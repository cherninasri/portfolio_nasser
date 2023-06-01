import React from 'react'
import Media from './banner/Media';
import { FaFacebookF,FaInstagram, FaLinkedinIn, } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=' h-[150px]  mt-10 ' >
    <div className="flex gap-4 justify-center mb-2">
    <span className="bannerIcon">
      <FaFacebookF />
    </span>
    <span className="bannerIcon">
      <FaInstagram />
    </span>
    <span className="bannerIcon">
      <FaLinkedinIn />
    </span>
    </div>

    <div className='font-NFonts text-xl text-white mx-auto flex flex-row justify-center '> this portfolio was created by @nasser </div>
      
    </div>
  )
}

export default Footer
