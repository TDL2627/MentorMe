import React, { useState } from 'react';
import Link from 'next/link';
const Modal = ({title, children,setShowModal}) => {
 

  return (
    <>
       <div onClick={() => setShowModal("")} className="fixed top-0 z-10 left-0 h-full w-full bg-black bg-opacity-75 flex items-center justify-center">
        </div>
       
        <div className="bg-white p-6 rounded-lg fixed z-20 w-1/2 ml-96 mt-20">
        <button onClick={() => setShowModal("")} className="  float-right  bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
              X
            </button>
            {children}
            
          </div>
    </>
  );
}

export default Modal;