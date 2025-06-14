import React from "react";
import HeadlineCard1 from "../assets/HeadlineCard1.jpg";
import HeadlineCard2 from "../assets/HeadlineCard2.jpg";
import HeadlineCard3 from "../assets/HeadlineCard3.jpg";
import HeadlineCard4 from "../assets/HeadlineCard4.jpg";

const HeadlineCard = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:px-10 px-6 pt-10 mx-auto gap-6">
      <div className="relative rounded-xl">
        <div className="absolute w-full h-full text-white bg-black/50">
          <p className="font-bold md:text-3xl text-2xl pl-3 pt-4">Sun's Out, BOGO's Out</p>
          <p className="font-bold pl-3">Through 8/26</p>
          <button className="absolute bg-white text-black rounded px-2 bottom-3 left-3">Order Now</button>
        </div>
        <img className="rounded-xl md:max-h-[250px] max-h-[160px] w-full object-cover" src={HeadlineCard3} alt="/" />
      </div>

      <div className="relative rounded-xl ">
        <div className="absolute w-full h-full text-white bg-black/50">
          <p className="font-bold md:text-3xl text-2xl pl-3 pt-4">New Restaurants</p>
          <p className="font-bold pl-3">Added daily</p>
          <button className="absolute bg-white text-black rounded px-2 bottom-3 left-3">Order Now</button>
        </div>
        <img className="rounded-xl md:max-h-[250px] max-h-[160px] w-full object-cover" src={HeadlineCard4} alt="/" />
      </div>

      <div className="relative rounded-xl">
        <div className="absolute w-full h-full text-white bg-black/50">
          <p className="font-bold md:text-3xl text-2xl pl-3 pt-4">We deliver desserts</p>
          <p className="font-bold pl-3">Through 8/26</p>
          <button className="absolute bg-white text-black rounded px-2 bottom-3 left-3">Order Now</button>
        </div>
        <img className="rounded-xl md:max-h-[250px] max-h-[160px] w-full object-cover" src={HeadlineCard1} alt="/" />
      </div>
    </div>
  );
};

export default HeadlineCard;
