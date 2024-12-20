import React from "react";
// import { getDatabase, ref, onValue } from "firebase/database";
// import { useEffect, useState } from "react";
// import { app } from "./firebase/index.js";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Game Developer.", "UI/UX Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  // const [Halaman1, setHalaman1] = useState({});
  // useEffect(() => {
  //   const db = getDatabase();
  //   const Halaman1Ref = ref(db, "Halaman1/");
  //   onValue(
  //     Halaman1Ref,
  //     (snapshot) => {
  //       const data = snapshot.val();
  //       setHalaman1(data);
  //     },
  //     []
  //   );
  // });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Grace Bindosano</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a third-year Computer Science student at Universitas Klabat, I am
          passionate about exploring the intricacies of technology and its
          potential to shape the future. I am eager to apply my academic
          knowledge to real-world challenges and contribute to innovative
          solutions. With a strong foundation in programming languages and
          problem-solving skills, I am excited to continue my journey of
          learning and growth in the field of computer science.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/gracealynn" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://github.com/gracealynn/project-individu"
              target="blank"
            >
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a
              href="https://github.com/gracealynn/project-individu"
              target="blank"
            >
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://github.com/gracealynn/project-individu"
              target="blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
