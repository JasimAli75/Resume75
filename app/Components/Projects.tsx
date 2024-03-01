import Image from "next/image";
import React from "react";
import Link from "next/link";
import Projectsitem1 from "./Projectsitem1";
import Projectitem2 from "./Projectitem2";
import Projectitem3 from "./Projectitem3";

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-tighter uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 font-semibold text-3xl">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Projectsitem1 />
          <Projectitem2 />
          <Projectitem3 />
        </div>
      </div>
    </div>
  );
}
