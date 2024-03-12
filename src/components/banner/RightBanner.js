import React from 'react'
import { bannerImg,bannerImg2,ii } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className=" lgl:w-[520px] lgl:h-[380px] z-10 "
        src={ii}
        alt="bannerImg"

      />
      <div className="absolute bottom-[0px] w-[450px] h-[100px] lgl:w-[480px] lgl:h-[380px] bg-designColor  rounded-bor  "></div>
    </div>
  );
}

export default RightBanner