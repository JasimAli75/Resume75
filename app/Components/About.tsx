import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl -tracking-tighter text-[#5651e5]">
            About
          </p>
          <h2 className="font-bold text-4xl py-2 text-gray-800">Who I Am</h2>
          <p> I am not your normal developer</p>
          <p className="py-2 text-gray-700 text-justify">
            I specialize in building mobile responsive front-end UI applications
            that connect with APIs and other backend technologies. I am
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-700 text-justify ">
            I started web development in 2023 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wire frames all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            development and various front-end technologies
          </p>
        </div>
        <div className="w-full h-auto m-auto py-12 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 eas-in duration-300">
          <Image
            className="rounded-xl"
            src="https://drive.google.com/uc?export=download&id=1d4dw-GJK9tNsnxpdjir5dwxW5C0cRs-v"
            width={200}
            height={300}
            alt="project logo"
          />
        </div>
      </div>
    </div>
  );
}
