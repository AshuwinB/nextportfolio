import SocialMedia from "@/components/SocialMedia/SocialMedia";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const page = () => {
  return (
    <div className="container mx-auto max-w-7xl mt-10">
      <div className="grid lg:grid-cols-2 grid-col-1">
        <div className="container mx-auto px-3">
          <p className="text-xl lg:pt-32 pt-20">Hey !</p>
          <p className="text-7xl pt-5 font-semibold">
            I m <span className="text-amber-400">Rishi Bose.</span>
          </p>
          <p className="text-4xl pt-5">An Full Stack Web Developer</p>
          <p className="pt-12">
            A web developer job is to create websites. While their primary
            role is to ensure the website is visually appealing and easy to
            navigate, many web developers are also responsible for the website
            performance and capacity
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <Link href="/skill">
              <button
                className="mt-10 bg-amber-400 hover:ring-2 text-white hover:text-black ring-amber-400 hover:bg-white
              w-20 h-20 rounded-full font-bold"
              >
                Skill
              </button>
            </Link>
            <Link href="/project">
              <button
                className="mt-10 bg-amber-400 hover:ring-2 text-white hover:text-black ring-amber-400 hover:bg-white
              w-20 h-20  rounded-full font-bold"
              >
                My Work
              </button>
            </Link>

            <Link href="https://www.youtube.com/@darkillerlivegaming">
              <button
                className="mt-10 bg-amber-400 hover:ring-2 text-white hover:text-black ring-amber-400 hover:bg-white
              w-20 h-20 rounded-full font-bold"
              >
                Youtube
              </button>
            </Link>
            
          </div>
          <SocialMedia />
        </div>
        <div className=" bg-amber-400 rounded-full flex justify-center mt-5">
          <Image
            src="/rishiprofile.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
