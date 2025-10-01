import React from "react";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import email from "../assets/icons/mail.png";

const Hero = () => {
  return (
    <div className="flex flex-1 bg-slate-100 justify-center items-center">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-bold">Neel Bollapragada</h1>
        <p className="mt-8 text-xl">
          Current 3rd Year Computer Science student at the University of
          Edinburgh. Interested in Software Development and Cyber Security.
        </p>
        <div className="flex flex-row justify-center items-center mt-20">
          <h1 className="text-xl inline mr-4">CONTACT: </h1>
          <a
            href="https://www.linkedin.com/in/neel-bollapragada-2784532a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-115 hover:brightness-125 transition duration-200 hover:cursor-pointer"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="h-10 w-10 inline mr-4"
            />
          </a>
          <a
            href="https://github.com/NeelBollapragada"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-115 hover:brightness-125 transition duration-200 hover:cursor-pointer"
          >
            <img src={github} alt="github" className="h-10 w-10 inline mr-4" />
          </a>
          <a
            href="mailto:neel.bollapragada@example.com"
            className="hover:scale-115 hover:brightness-125 transition duration-200 hover:cursor-pointer"
          >
            <img src={email} alt="email" className="h-10 w-10 inline" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
