import React, { useState } from 'react';
import Link from 'next/link';
const Landing = () => {


  return (
    <>
 
    <div className="w-full h-full text-center">
      <div>
        <h1 className="text-3xl text-red-500 font-bold underline ">Mentor Me</h1>
      </div>
      <Link href="/home">
        Lets go
      </Link>
    </div>
    </>
  );
}

export default Landing;