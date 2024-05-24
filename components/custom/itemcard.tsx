import React from "react";
import Image from "next/image";
import FaButton from "./fabutton";

const ItemCard = () => {
  return (
    <div className=" group">
      <div className=" w-full h-[40vh] relative">
        <Image
          className=" transition-all delay-100 duration-200 ease-in-out "
          src={
            "https://assets.website-files.com/63f83c3771afc20c164884a5/640fe533acbad511a1d6b636_product-01.jpg"
          }
          fill
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            objectPosition: "center",
          }}
        />
        <Image
          className=" opacity-0 group-hover:opacity-100 absolute transition-all delay-100 duration-200 ease-in-out "
          src={"https://source.unsplash.com/votive-candle-r40EYKVyutI"}
          fill
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            objectPosition: "center",
          }}
        />
      </div>
      <div className=" py-5 space-y-5 flex flex-col items-center">
        <h1 className=" text-center text-[20px]">Alpha Arbutin & Vitamin C</h1>
        <div className=" flex flex-col items-center">
          <h1 className=" text-darkslategreen text-[30px] text-center font-melodrama">
            $ 120.00 USD
          </h1>
          <del className=" text-darkslategreen text-lg text-center font-melodrama">
            $ 209.00 USD
          </del>
        </div>
        <FaButton style=" w-[5rem]">
          <p>Shop Now</p>
        </FaButton>
      </div>
    </div>
  );
};

export default ItemCard;
