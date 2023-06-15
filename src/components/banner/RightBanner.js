import React from 'react'
import { bannerImg,bannerImg2 } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[650px] lgl:h-[580px] z-10 "
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-12   w-[350px] h-[100px] lgl:w-[480px] lgl:h-[420px] bg-designColor  rounded-bor  "></div>
    </div>
  );
}

export default RightBanner