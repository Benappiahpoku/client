import React from "react";
import Image from "next/image";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonial";
import AboutMe from "./components/About";
import SkillSet from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <section id="home" className="pt-20">
        {/* Hero */}
        <Hero />
      </section>
      <section id="portfolio">
        {/* Portfolio */}
        <Portfolio />
      </section>

      <section id="skills">
        {/* Skills */}
        <SkillSet />
      </section>
      <section id="about">
        {/* About */}
        <AboutMe />
      </section>
      <section id="testimonials">
        {/* Testimonial */}
        <Testimonials />
      </section>
      <section id="contact">
        {/* Contact  */}
        <Contact />
      </section>
    </main>
  );
}

