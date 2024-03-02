import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projectsitems() {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
          className="rounded-xl group-hover:opacity-20"
          src={
            "https://drive.google.com/uc?export=download&id=15MZKEjp6kcEpoTR8LveqNG9l_aDkvRjV"
          }
          alt="Projects logo"
          width={500}
          height={500}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-[20px] text-white tracking-tighter text-center font-bold">
            E-commerce Website with Next.js & Reactjs
          </h3>
          <p className="pb-4 pt-2 text-white text-center font-semibold">
            Next.js & Reactjs, Shandcn UI,
          </p>
          <Link
            target="_blank"
            href={"https://github.com/JasimAli75/pricing-app-web"}
          >
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-[18px] cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
