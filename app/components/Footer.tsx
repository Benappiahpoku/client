import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section>
      <div className="bg-gray-100 p-5 text-center">
        <div className="flex justify-between flex-wrap">
          <div className="flex-1 m-2">
            <h3 className="mb-2">Contact Us</h3>
            <div className="mb-2">
              Email:{" "}
              <a
                href="mailto:bappiahpoku@gmail.com"
                className="mx-2 text-gray-800 no-underline"
              >
                bappiahpoku@gmail.com
              </a>
            </div>
            <div className="mb-2">
              Phone:{" "}
              <a
                href="tel:+233244314463"
                className="mx-2 text-gray-800 no-underline"
              >
                +233 244314463
              </a>
            </div>
          </div>
          <div className="flex-1 m-2">
            <h3 className="mb-2">Follow Us</h3>
            <div className="flex justify-center">
              <a
                href="https://twitter.com/bappiahpoku"
                className="mx-2 text-gray-800 no-underline hover:text-primaryRed"
              >
                <FaTwitter style={{ fontSize: "1.5rem" }} />
              </a>
              <a
                href="https://github.com/Benappiahpoku"
                className="mx-2 text-gray-800 no-underline hover:text-primaryRed"
              >
                <FaGithub style={{ fontSize: "1.5rem" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 text-sm text-gray-800">
          <p suppressHydrationWarning>© {year} All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
