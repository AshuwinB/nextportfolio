import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto max-w-7xl mt-10">
      <div className="grid lg:grid-cols-2 grid-col-1">
        <div>
          <p className="text-xl lg:pt-32 pt-20">Hey !</p>
          <p className="text-7xl pt-5 font-semibold">
            I'm <span className="text-amber-400">Rishi Bose.</span>
          </p>
          <p className="text-4xl pt-5">An Full Stack Web Developer</p>
          <p className="pt-12">
            A web developer's job is to create websites. While their primary
            role is to ensure the website is visually appealing and easy to
            navigate, many web developers are also responsible for the website's
            performance and capacity
          </p>
          <div className="flex justify-between">
            <Link href="#">
              <button
                className="mt-10 bg-amber-400 hover:ring-2 text-white hover:text-black ring-amber-400 hover:bg-white
              w-32 rounded-full font-bold"
              >
                Skill
              </button>
            </Link>
            <Link href="/project">
              <button
                className="mt-10 bg-amber-400 hover:ring-2 text-white hover:text-black ring-amber-400 hover:bg-white
              w-32 rounded-full font-bold"
              >
                My Work
              </button>
            </Link>
            <Link href="https://www.youtube.com/@darkillerlivegaming">
              <button
                className="mt-10 bg-amber-400 hover:ring-2 text-white hover:text-black ring-amber-400 hover:bg-white
              w-32 rounded-full font-bold"
              >
                Youtube
              </button>
            </Link>
          </div>
        </div>
        <div className=" bg-amber-400 rounded-full flex justify-center">
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
