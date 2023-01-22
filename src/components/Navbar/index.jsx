import Link from 'next/link';
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import Modal from '../elements/Modal';
import { useState } from 'react';


const Navigation = () => {
    const [showModal,setShowModal]=useState("")
  return (
      <>
     
    <nav className="bg-black p-2 sticky w-full top-0 flex justify-between items-center">
    <Link href="/">
    <Image
        src={logo}
        alt="Picture of the author"
        width={50} 
        height={50} 
      />
    </Link>
    <div className="flex">
      <button onClick={()=>{
          if(showModal){
            setShowModal("")
          }else{
            setShowModal("login")
          }
          
      }}>
        <p className="text-white font-medium mr-4 cursor-pointer">Login</p>
      </button>
      <Link href="/contact">
        <p className="text-white font-medium cursor-pointer">Contact</p>
      </Link>
    </div>
  </nav>
{showModal == "login" &&(
    <>
    <Modal setShowModal={setShowModal} title="login">
        <p>Aye</p>
    </Modal>
    </>
)}
  </>

  )
}

export default Navigation;