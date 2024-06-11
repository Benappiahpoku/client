"use client"
import React, { ChangeEvent, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Title from "./Title";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  description: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col space-y-5">
      <div className="mb-5">
        <Title ptext="Contact" h2text="Do you have any questions?" />
      </div>
      <div className="flex space-x-5">
        <div className="flex-1">
          <form
            action="https://formspree.io/f/xayrkevn"
            method="POST"
            className="flex flex-col space-y-2"
          >
            <div className="flex space-x-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="flex-1 p-2 rounded border border-gray-300"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="flex-1 p-2 rounded border border-gray-300"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="p-2 rounded border border-gray-300"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="p-2 rounded border border-gray-300"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="h-24 border-none p-2"
            ></textarea>
            <button
              type="submit"
              className="p-2 bg-red-600 text-white rounded cursor-pointer text-lg transition duration-300 ease-in-out font-bold hover:bg-white hover:text-red-500"
            >
              Send
            </button>
          </form>
        </div>
        <div className="flex-1">
          <h2 className="text-6xl text-red-600 text-center">Get in touch</h2>
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center space-x-2 mb-2">
              <FaMapMarkerAlt />
              <span>123 Main St, Anytown, USA</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <FaPhone />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <FaEnvelope />
              <span>info@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;