/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import animation from "../../../assets/animation.json";
import Container from "../../Container";

const MainHeading = () => {
  return (
    <div className="bg-[#fdf8f7] pt-10  pb-20 md:p-0">
    <Container>
    <div className=" sm:flex justify-between items-center h-[calc(100vh-70px)] text-center md:text-left">
      <div className="w-full md:1/2">
        <div className="">
          <h4 className=" text-2xl md:text-3xl xl:text-4xl font-bold  text-[#ff6900] pt-10  ">Hi I'm</h4>
          <h1 className="text-3xl  md:text-5xl xl:text-6xl font-extrabold text-[#15295f] my-4 -mt-2">
            ABUL ALA JOBAYAR
          </h1>
          <h6 className=" text-2xl md:text-3xl xl:text-4xl font-semibold text-[#15295f]">
            Web Developer <span className="text-[#ff6900]">(MERN)</span> Expert
          </h6>
          <p className="mt-5 mb-10 text-base text-[#15295f]">
            Web Developer with the ability to learn and collaborate in a rapidly
            changing environment and Composition. Worked through 1000+ hours of
            boot camp Structure, Learning Html, CSS, Bootstrap, Tailwind,
            JavaScript, React, Express, Node, MongoDB, And Next js.
          </p>
          <button className="px-4 py-2 bg-[#ff6900] text-white rounded-xl font-bold  border-[#ff6900]  border-2 hover:bg-white hover:text-[#ff6900]">Contact Me</button>
        </div>
      </div>
      <div className="w-full md:1/2 hidden md:block">
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
    </Container>
    </div>
  );
};

export default MainHeading;
