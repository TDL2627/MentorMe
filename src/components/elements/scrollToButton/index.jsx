import React from "react";
import { Link } from "react-scroll";

const SmoothScrollButton = (props) => {
    const {link ,title}=props
  return (
    <>
    
      <Link
        activeClass="active"
        to={link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="btn btn-blue cursor-pointer text-white font-bold py-2 px-4 rounded"
      >
       {title}
      </Link>
    </>
  );
};

export default SmoothScrollButton;
