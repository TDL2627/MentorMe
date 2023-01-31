import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import bg from "../../../public/images/bg.jpg";
const Landing = () => {
  return (
    <>
      <div className="w-full h-full text-center">
        <div className="">
        </div>
        <Image src={bg} alt="Picture of the author" className="w-full h-full object-cover object-center " />

        <div className="top-40 w-full absolute">
          <h1 className="text-7xl font-black text-white text-center leading-tight ">
            Mentor Me
          </h1>
        </div>
      </div>
    </>
  );
};

export default Landing;
