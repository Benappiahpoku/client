"use client";
import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center bg-red-600 flex-col md:flex-row">
        <div className="flex-1 p-10 text-white mr-20 ml-20 md:mr-80 md:ml-60 text-center md:text-left bg-red-600">
          <h1>Hi, I am Ben Appiah-Poku</h1>
          <h2>Full Stack Web Developer</h2>
          <p className="pt-5">
            Im a seasoned website and web app developer specializing in
            crafting intuitive tools that boost productivity and well-being.
            Lets collaborate to transform your ideas into impactful solutions
            that drive success.
          </p>
          <div className="flex flex-col md:flex-row mt-5">
            <Link to="skills" smooth={true} duration={500}>
              <button className="bg-white text-red-600 py-2 px-7 rounded-md cursor-pointer text-lg transition duration-300 ease-in-out font-bold mr-5 mt-5 hover:bg-red-500 hover:text-white">
                Hire Me
              </button>
            </Link>
            <a href="mailto:bappiahpoku@gmail.com">
              <button className="bg-white text-red-600 py-2 px-7 rounded-md cursor-pointer text-lg transition duration-300 ease-in-out font-bold mr-5 mt-5 hover:bg-red-500 hover:text-white">
                Say Hello
              </button>
            </a>
          </div>
        </div>
        <div className="flex-1 p-10">
         
          <Image
            src="/images/heroImage.webp" // Replace 'your-image.jpg' with your actual image file name
            alt="logo"
            width={110}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
