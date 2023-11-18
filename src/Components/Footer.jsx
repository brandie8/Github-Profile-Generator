import React from "react";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-400 p-2.5 flex justify-center items-center">
      <BsGithub className="mx-2" />
      <p>GitHub Profile Generator | © 2023 Brandon Nabwire</p>
    </footer>
  );
};

export default Footer;
