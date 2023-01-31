import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import bg from "../../../public/images/bg.jpg";
import About from "../About";
const Landing = () => {
  return (
    <>
      <div className="w-full h-full text-center">
        <div className="w-full h-full">
          <Image
            src={bg}
            alt="Picture of the author"
            className="w-full  object-cover object-center "
          />
        </div>
        <div className="md:top-40 top-20 w-full absolute">
          <h1 className="md:text-7xl text-2xl font-black text-white text-center leading-tight ">
            Mentor Me
          </h1>
        </div>
      </div>
<About/>
    </>
  );
};

export default Landing;
