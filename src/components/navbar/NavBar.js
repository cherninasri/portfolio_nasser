import React from 'react'
import { navLinksdata } from '../../constants/index';
import { Link } from "react-scroll";



const NavBar = () => {
  return (
    <div className="w-full h-16 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
    <div>
    <h1 className='text-4xl font-NFonts text-white ml-20  hover:border-b-[2px] hover:border-designColor duration-1000' > <span  className='text-designColor'>N</span>ASSER</h1>
  </div>
    <div>
    <ul className="hidden mdl:inline-flex items-center mr-10 ">
      {navLinksdata.map(({ _id, title, link }) => (
        <li
          className="text-sm font-normal mr-6 text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-1000"
          key={_id}
        >
          <Link
            activeClass="active"
            to={link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
    </div>
   
    </div>
  )
}

export default NavBar
