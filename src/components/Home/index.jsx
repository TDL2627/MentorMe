import React, { useState } from "react";
import { useAccountStore } from "../../store";
import { Loader } from "../elements/Loader";
import Link from "next/link";
const Home = () => {
  const { user } = useAccountStore();
  return (
    <div className="w-full bg-black h-screen text-center">
      <div>
        <h1 className="text-3xl text-red-500 font-bold underline ">
          Mentor Me
        </h1>
        <p className="text-white">Welcome {user?.name}</p>
<Loader/>
      </div>
    </div>
  );
};

export default Home;
