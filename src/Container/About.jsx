import React from "react";
import aboutVideo from "../assets/about.mp4";
import { IoHomeOutline } from "react-icons/io5";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";

import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <div className="relative w-full h-full">
        <video
          src={aboutVideo}
          type="video/mp4"
          loop
          autoPlay
          muted
          controls={false}
          className="object-cover w-full h-full"
        />

        {/* MOBILE VERSION  */}

        <div className="lg:hidden absolute top-0 right-0 left-0 bottom-0 items-center bg-Overlay text-white comforto flex flex-col justify-center">
          <Link
            to="/"
            className="absolute duration-700 text-white top-10 text-3xl left-10 hover:text-5xl"
          >
            <IoHomeOutline />
          </Link>
          <p className="text-white drop-shadow-xl text-5xl duration-700 ease-in-out hover:-translate-y-9">
            Kaushik <br /> Sharma
          </p>
          <div className="w-60 h-1 my-10 bg-gray-300  rounded-lg "></div>
          <p className="text-gray-300 drop-shadow-lg text-4xl text-center duration-700 ease-in-out hover:-translate-y-9">
            Developer <br /> Coder <br /> Learner
          </p>
          <div className=" absolute top-3/4 right-0 left-0 flex flex-row justify-center gap-10 text-white mt-3 text-2xl">
            <a
              href="https://www.github.com/ikaushiksharma"
              className="hover:text-3xl duration-500"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ikaushiksharma"
              className="hover:text-3xl duration-500"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.instagram.com/ikaushiksharma"
              className="hover:text-3xl duration-500"
            >
              <AiFillInstagram />
            </a>
            <a
              href="mailto:kaushik445566@gmail.com"
              className="hover:text-3xl duration-500"
            >
              <AiFillMail />
            </a>
          </div>
          <div className="absolute bottom-10 hover:tracking-widest duration-700 ease-out text-gray-400">
            Copyright &copy; 2022 | Kaushik Sharma
          </div>
        </div>

        {/* DeskTop Version  */}

        <div className="hidden absolute top-0 bottom-0 left-0 right-0 lg:flex items-center justify-center gap-24 comforto bg-Overlay">
          <Link
            to="/"
            className="absolute duration-700 text-white top-20 text-3xl left-20 hover:text-5xl"
          >
            <IoHomeOutline />
          </Link>
          <p className="text-white drop-shadow-xl text-8xl duration-700 ease-in-out hover:-translate-y-9">
            Kaushik <br /> Sharma
          </p>
          <div className="w-1 h-60 bg-gray-300  rounded-lg "></div>
          <p className="text-gray-300 drop-shadow-lg text-6xl duration-700 ease-in-out hover:-translate-y-9">
            Developer <br /> Coder <br /> Learner
          </p>
          <div className=" absolute top-2/3 right-0 left-0 flex flex-row justify-center gap-20 text-white mt-3 text-3xl">
            <a
              href="https://www.github.com/ikaushiksharma"
              className="hover:text-5xl duration-500"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ikaushiksharma"
              className="hover:text-5xl duration-500"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.instagram.com/ikaushiksharma"
              className="hover:text-5xl duration-500"
            >
              <AiFillInstagram />
            </a>
            <a
              href="mailto:kaushik445566@gmail.com"
              className="hover:text-5xl duration-500"
            >
              <AiFillMail />
            </a>
          </div>
          <div className="absolute bottom-10 hover:tracking-widest duration-700 ease-out text-gray-400">
            Copyright &copy; 2022 | Kaushik Sharma
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
