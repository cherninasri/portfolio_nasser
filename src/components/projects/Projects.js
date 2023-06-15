import React,{useState} from 'react'
import { projectTwo ,projectOne,project3, r12,
  r11,
  r10,
  r9,
  r8,
  r7,
  r6,
  r4,
  r3,
  r2,} from "../../assets/index";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import '../../index.css';
import { Carousel } from 'react-bootstrap';



const Projects = () => {
  const slides = [
    {
      url: `${r9}`
    },
    {
      url: `${r10}`
    },
    {
      url: `${r11}`
    },
    {
      url: `${r6}`
    },
    {
      url: `${r7}`
    },
    {
      url: `${r4}`
    },
    {
      url: `${r2}`
    },
    {
      url: `${r3}`
    },

  
  ];
  const slides2 = [
    
    {
      url: `${project3}`
    },
    {
      url: `${projectTwo}`
    },
    {
      url: `${projectOne}`
    },

  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const isFirstSlide2 = currentIndex2 === 0;

    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    const newIndex2 = isFirstSlide2 ? slides2.length - 1 : currentIndex2 - 1;

    setCurrentIndex(newIndex);
    setCurrentIndex2(newIndex2);

  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const isLastSlide2 = currentIndex2 === slides2.length - 1;

    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    const newIndex2 = isLastSlide2 ? 0 : currentIndex2 + 1;

    setCurrentIndex(newIndex);
    setCurrentIndex2(newIndex2);

  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setCurrentIndex2(slideIndex);

  };


  const [change ,setchange] = useState('react')

  
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
  <div className='flex flex-row justify-center '>
  
  <h1 className="text-base  mr-6 text-white tracking-wide cursor-pointer hover:scale-90 px-2 rounded-lg font-bold hover:text-designColor duration-1000  border-solid border-2 border-designColor" onClick={react}>React</h1>
  <h1 className="text-base  mr-6 text-white tracking-wide cursor-pointer hover:scale-90 px-2 rounded-lg font-bold hover:text-designColor duration-1000  border-solid border-2 border-designColor" onClick={flutter}>Flutter</h1>
  </div>

{change=='react' ? (
  <div className='max-w-[1350px] h-[750px] w-full m-auto py-16 px-4 relative group'>
  <div
    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500  '
    
  >
  {
    currentIndex==0 ?(<div className='w-full h-full  bg-black opp flex flex-col justify-center items-center top-0  '>
    <h1 className='text-4xl mb-5 text-black font-bold'  > E-Commerce</h1>
    <h1 className='text-xl text-black font-medium mx-40 overflow-hidden'>This image showcases the home page of my e-commerce project. The top section features a sleek and intuitive navigation bar, allowing users to easily navigate through different sections of the website. The navigation bar may include options like "Home," "Shop," "About," "Contact," and more.
    Below the navigation bar, there is a visually appealing slider or carousel that displays featured products, promotions, or important announcements. </h1>
  
    </div>) :currentIndex==1 ?(
      <div className='w-full h-full rounded-2xl bg-black opp flex flex-col justify-center items-center '>
  <h1 className='text-4xl mb-5 text-black font-bold'  > E-Commerce</h1>
  <h1 className='text-xl text-black font-medium mx-40 overflow-hidden'> This image represents the product showcase section on the home page of my e-commerce project. It highlights a selection of featured products in an attractive and organized manner.

  Within this section, there is a slider or carousel that allows visitors to browse through different product images and details. Each slide may showcase a specific product, displaying a high-quality image, product name, price, and perhaps a brief description or key features. Users can navigate through the slider using arrows or other interactive elements to explore various products.</h1>

  </div>)
  :currentIndex==2 ?(
    <div className='w-full h-full rounded-2xl bg-black opp flex flex-col justify-center items-center '>
<h1 className='text-4xl mb-5 text-black font-bold'  > E-Commerce</h1>
<h1 className='text-xl text-black font-medium mx-40 overflow-hidden'>The product details page aims to provide a comprehensive and engaging presentation of the product, ensuring that customers have all the necessary information to make a purchase decision.</h1>

</div>):currentIndex==3 ?(
  <div className='w-full h-full rounded-2xl bg-black opp flex flex-col justify-center items-center '>
<h1 className='text-4xl mb-5 text-black font-bold'  > E-Commerce</h1>
<h1 className='text-xl text-black font-medium mx-40 overflow-hidden'>this image, the website showcases several key elements that contribute to its functionality and appealing design. These elements include:
Login and Logout: The presence of a login and logout feature indicates that the website offers user authentication. Users can log in to access personalized content or perform specific actions,
Admin Area: The inclusion of an admin area suggests that the website has a separate section dedicated to administrators or site owners. This area allows authorized individuals to manage and control various aspects of the website, such as content management
Search Functionality: The image showcases a search feature, enabling users to quickly find specific information, products, or services within the website. </h1>

</div>):currentIndex==4?(
  <div className='w-full h-full rounded-2xl bg-black opp flex flex-col justify-center items-center '>
<h1 className='text-4xl mb-5 text-black font-bold'  > E-Commerce</h1>
<h1 className='text-xl text-black font-medium mx-40 overflow-hidden'>This image showcases the admin area of my website, providing a behind-the-scenes view of the robust tools and functionalities available to site administrators. The admin area serves as a centralized hub for managing and controlling various aspects of the website.
In this image, you can see a clean and intuitive dashboard design, featuring a navigation menu on the side or top that offers easy access to different sections and features. The dashboard provides an overview of essential information, such as website analytics, recent activities, or system status.</h1>

</div>):currentIndex==5?(
  <div className='w-full h-full rounded-2xl bg-black opp flex flex-col justify-center items-center '>
<h1 className='text-4xl mb-5 text-black font-bold'  > E-Commerce</h1>
<h1 className='text-xl text-black font-medium mx-40 overflow-hidden'>This image showcases the user interface of my website's product browsing page, providing an engaging and convenient experience for users. The focus is on empowering users to explore and find desired products easily.
In the image, you can see a visually appealing layout displaying a variety of products. Each product is presented with its corresponding image, title, price, and possibly additional information. The products are organized in a grid or list format, allowing users to browse through the offerings smoothly.</h1>

</div>):currentIndex==6?(
  <div className='w-full h-full rounded-2xl bg-black opp flex flex-col justify-center items-center '>
<h1 className='text-4xl mb-5 text-black font-bold'  > Movie Website</h1>
<h1 className='text-xl text-black font-medium mx-40 overflow-hidden'>This image represents a dynamic and comprehensive website dedicated to showcasing a vast collection of movies. The website serves as an ultimate destination for movie enthusiasts, providing a platform where users can explore, discover, and engage with a wide range of films.
</h1>

</div>):(
  <div className='w-full h-full rounded-2xl bg-black opp flex flex-col justify-center items-center '>
<h1 className='text-4xl mb-5 text-black font-bold'  >  Movie Website</h1>
<h1 className='text-xl text-black font-medium mx-40 overflow-hidden'>The movie details page aims to provide a comprehensive and engaging presentation of the movie, ensuring that customers have all the necessary information to watch the movie.</h1>
</div>)
    

  }
  
  
  </div>
  {/* Left Arrow */}
  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlide} size={30} />
  </div>
  {/* Right Arrow */}
  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactRight onClick={nextSlide} size={30} />
  </div>
  <div className='flex top-4 justify-center py-2'>
    {slides.map((slide, slideIndex) => (
      <div
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        className='text-2xl cursor-pointer'
      >
        <RxDotFilled />
      </div>
    ))}
  </div>
</div>



):(<div className='max-w-[350px] h-[750px] w-full m-auto py-16 px-4 relative group'>
<div
  style={{ backgroundImage: `url(${slides2[currentIndex2].url})` }}
  className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
>{currentIndex2==0? (<div className='w-full h-full rounded-2xl bg-black opp flex flex-col justify-center items-center '>
<h1 className='text-2xl mb-5 text-black font-bold'  > clone design facebook</h1>

</div>)
  :currentIndex2==1?(<div className='w-full h-full rounded-2xl bg-black opp flex flex-col justify-center items-center '>
  <h1 className='text-2xl mb-5 text-black font-bold'  > E-Commerce</h1>
 
  </div>):
  
  
  (<div className='w-full h-full rounded-2xl bg-black opp flex flex-col justify-center items-center '>
  <h1 className='text-2xl mb-5 text-black font-bold'  > clone design news</h1>
  
  </div>)




}



</div>
{/* Left Arrow */}
<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
  <BsChevronCompactLeft onClick={prevSlide} size={30} />
</div>
{/* Right Arrow */}
<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
  <BsChevronCompactRight onClick={nextSlide} size={30} />
</div>
<div className='flex top-4 justify-center py-2'>
  {slides2.map((slide, slideIndex) => (
    <div
      key={slideIndex}
      onClick={() => goToSlide(slideIndex)}
      className='text-2xl cursor-pointer'
    >
      <RxDotFilled />
    </div>
  ))}
</div>
</div>
)}

 
  
  </section>
  )
}

export default Projects