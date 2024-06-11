import React from "react";
import { FaGithub, FaDownload } from "react-icons/fa";
import Image from "next/image";

import Title from "./Title";

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <Title ptext="About Me" h2text="My Story" />
      <div className="flex gap-5">
        <div className="flex-1">
          <Image
            src="/images/HeroImage.webp" // Replace 'your-image.jpg' with your actual image file name
            alt="logo"
            width={200}
            height={300}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-center">Code Architect, Problem Solver</h3>
          <p>
            Ive had a passion for computers and coding since childhood, sparked
            by my dads gift of a Commodore 64. Hours flew by as I tinkered and
            learned basic languages, igniting a lifelong love for programming.
            From dabbling in website creation to embracing Reacts modular
            approach, my journey in computing has been rich and rewarding. Now,
            I devote my time to crafting innovative apps and exploring how
            technology can address African challenges with homegrown solutions.
          </p>
          <div className="flex gap-5 m-5 font-bold">
            <div>
              <a
                href="https://github.com/Benappiahpoku"
                className="text-gray-900 hover:text-pink-600"
              >
                GitHub
                <FaGithub className="ml-2 text-xl" />
              </a>
            </div>
            <div>
              <a
                href="/downloads/Benjamin Appiah-Poku CV Rev06.pdf"
                download
                className="text-gray-900 hover:text-pink-600"
              >
                Download CV
                <FaDownload className="ml-2 text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
