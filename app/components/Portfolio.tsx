import React from "react";
import "./Portfolio.css";
import Image from "next/image";

import Title from "./Title";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <div>
        <Title ptext="Portfolio" h2text="My Creative Works" />
      </div>
      <div className="portfolio-content">
        <div className="card">
          <div className="card-main">
            <div>
              <h2>Calmflow </h2>
              <p>
                The Calmflow application empowers us to pause amidst our hectic
                workdays, allowing a moment for deep breaths. Users enjoy the
                flexibility to input any message, and the app will spontaneously
                remind them of it at various points throughout the day.
              </p>
              <div className="card-main-button-container">
                <a href="https://github.com/Benappiahpoku/Calm-Flow-Relaxing-App">
                  Learn More
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/images/calmflow.png" // Replace 'your-image.jpg' with your actual image file name
                alt="logo"
                width={110}
                height={60}
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-main">
            <div>
              <h2>Pomodoro Flower</h2>
              <p>
                A React Electron Pomodoro Flower app that assists in maintaining
                productivity while cultivating virtual flowers on your macOS.
              </p>
              <div className="card-main-button-container">
                <a href="https://github.com/Benappiahpoku/Pomodoro-Flower-React-Electron-App">
                  Learn More
                </a>
              </div>
            </div>
            <div>
              {" "}
              <Image
                src="/images/calmflow.png" // Replace 'your-image.jpg' with your actual image file name
                alt="logo"
                width={110}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-content">
        <div className="card">
          <div className="card-main">
            <div>
              <h2>Kalculator</h2>
              <p>
                Elevate your productivity with a React Electron calculator that
                adapts to your mood, transitioning seamlessly from serene blue
                hues to vibrant red tones. Tailor your workspace to reflect your
                mindset, fostering creativity and focus as you tackle your tasks
                with flair
              </p>
              <div className="card-main-button-container">
                <a href="https://github.com/Benappiahpoku/Kalculator-React-Electron-App">
                  Learn More
                </a>
              </div>
            </div>
            <div>
              {" "}
              <Image
                src="/images/calmflow.png" // Replace 'your-image.jpg' with your actual image file name
                alt="logo"
                width={110}
                height={60}
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-main">
            <div>
              <h2>Typing Exercise</h2>
              <p>
                A React Electron typing tool designed to enhance my speed by
                practicing with the most commonly used English words.
              </p>
              <div className="card-main-button-container">
                <a href="https://github.com/Benappiahpoku/Typing-Exercise-App">
                  Learn More
                </a>
              </div>
            </div>
            <div>
              {" "}
              <Image
                src="/images/calmflow.png" // Replace 'your-image.jpg' with your actual image file name
                alt="logo"
                width={110}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
