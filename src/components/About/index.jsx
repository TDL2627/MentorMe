import { aboutDetails, featureDetails } from "./data";
const About = () => {
  return (
    <>
      <div id="about" className="h-full w-full">
        <div className="w-full py-10   bg-black text-center">
          <p className="text-white text-2xl">About</p>
        </div>
        <div className="grid md:grid-cols-2 w-full ">
          <div className="w-full h-96 bg-gray-600">
            {aboutDetails.map((item) => (
              <div className="w-full text-start text-white p-10">
                <h3 className="my-5">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
          <div className="w-full h-96 bg-gray-900 overflow-y-auto">

          <div className="w-full text-start text-white p-10">
          <h3 className="my-5 text-white">FEATURES</h3>

                {featureDetails.map((item) => (
              <div className="w-full text-start text-white ">
                <h3 className="my-5">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
