import React, { useState } from 'react';
import Link from 'next/link';
const Modal = ({title, children,setShowModal}) => {
 

  return (
    <>
       <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
              <p>{title}</p>
            {children}
            <button onClick={() => setShowModal("")} className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
              Close Modal
            </button>
          </div>
        </div>
    </>
  );
}

export default Modal;