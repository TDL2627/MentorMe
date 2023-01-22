import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Modal from "../elements/Modal";
import { useState } from "react";
import { Login, Register } from "../elements/Forms";

const Navigation = () => {
  const [showModal, setShowModal] = useState("");
  return (
    <>
      <nav className="bg-black z-[270] p-2 sticky w-full top-0 flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </Link>
        <div className="flex">
          <button
            onClick={() => {
              setShowModal("login");
            }}
          >
            <p className="text-white font-medium mr-4 cursor-pointer">Login</p>
          </button>
          <button
            onClick={() => {
              setShowModal("register");
            }}
          >
            <p className="text-white font-medium cursor-pointer">Register</p>
          </button>
        </div>
      </nav>
      {showModal == "login" && (
        <>
          <Modal setShowModal={setShowModal} title="login">
            <Login />
          </Modal>
        </>
      )}
      {showModal == "register" && (
        <>
          <Modal setShowModal={setShowModal} title="register">
            <Register />
          </Modal>
        </>
      )}
    </>
  );
};

export default Navigation;
