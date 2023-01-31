const About = () => {
  return (
    <>
      <div  id="about" className="h-full w-full">
        <div className="w-full py-10   bg-black text-center">
          <p className="text-white text-2xl">About</p>
        </div>
        <div className="grid grid-cols-2 w-full ">
          <div className="w-full h-96 bg-gray-600"></div>
          <div className="w-full h-96 bg-gray-900"></div>
        </div>
      </div>
    </>
  );
};

export default About;
