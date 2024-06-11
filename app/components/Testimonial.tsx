import React from "react";
import { FaStar } from "react-icons/fa";
import Title from "./Title";

interface TestimonialCardProps {
  companyName: string;
  testimonialText: string;
  reviewerName: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  companyName,
  testimonialText,
  reviewerName,
  rating,
}) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <FaStar key={i} className={i < rating ? "text-gold" : "text-gray-400"} />
    ));

  return (
    <div className="flex flex-col border border-gray-300 rounded p-5 relative">
      <div className="absolute top-5 right-5 flex gap-1">{stars}</div>
      <div className="flex flex-col gap-2">
        <h3>{companyName}</h3>
        <p>{testimonialText}</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span className="font-bold">{reviewerName}</span>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <Title ptext="Testimonials" h2text="What Our Clients Say" />
      <div className="flex gap-5">
        <TestimonialCard
          companyName="Naachiaa Construction "
          testimonialText="Working with Benjamin on our Naachiaa construction project was a fantastic experience. He listened attentively and delivered precisely what we envisioned for our website. His effectiveness and dedication truly stood out, making the collaboration seamless and enjoyable. I highly recommend him for any web development endeavors."
          reviewerName="General Manager - Daniel Adjei"
          rating={4}
        />
        <TestimonialCard
          companyName="JDA PM Ltd."
          testimonialText="Benjamin came highly recommended by another client, and from our very first conversation, I knew I had found the right person for the job. He grasped my vision effortlessly and demonstrated the expertise and dedication needed to bring it to life. Benjamin is undoubtedly a attentive developer who delivers exactly what you need."
          reviewerName="Managing Partner - Jerry Donkor"
          rating={4}
        />
      </div>
    </div>
  );
};

export default Testimonials;
