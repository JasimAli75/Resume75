import React from "react";
import Image from "next/image";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export default function Main() {
  return (
    <div id="home" className=" w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="flex justify-center ">
            <Image
              className="rounded-full rounded-tx-md cursor-pointer hover:scale-110 ease-in duration-300"
              src={"/../public/Images/JJ.jpg"}
              width={220}
              height={220}
              alt="Portfolio pic"
            />
          </div>
          <p className="uppercase text-sm tracking-tighter text-gray-600 mt-10">
            Let's build something together
          </p>
          <h1 className="py-4 font-semibold text-3xl text-gray-700">
            Hi, I'm <span className="text-[#5651e5]"> Jasim Ali Rajput </span>
          </h1>
          <h1 className="py-1 font-medium text-3xl text-gray-700">
            A MERN-Stack Web Developer
          </h1>
          <p className="py-4 text-sm text-gray-600 max-w-[70%] m-auto">
            Jasim Ali is a MERN-Stack web application developer specializy in
            Next.js, React.js Tailwind, ChakaraUI, Javascript with Back-end
            factionality. I'm a MERN-Stack web Application Developer
            specializing in building (and occasionaly designing) exceptional
            digital experiences. Currently I'm focused on building responsive
            front-end web applications while learning bac-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/jasim-amanat-a24a861b2/"}
              >
                <GrLinkedinOption />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link target="_blank" href={"https://github.com/JasimAli75"}>
                <AiFillGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                target="_blank"
                href={"mailto:Jasim.ali.rajput65@gmail.com"}
              >
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link target="_blank" href={"https://wa.me/03111498656"}>
                <BsWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
