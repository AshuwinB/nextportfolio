import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="mt-4 lg:mt-10 container mx-auto px-3">
        <p className="text-xl font-semibold mb-4">Social Media</p>
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-5">
        <Link href="https://www.facebook.com/rishi.bose.1119/" >
          <BsFacebook className="h-10 w-10 text-blue-500 focus:underline" />
        </Link>
        <Link href="https://github.com/RishiBose961">
          <BsGithub className="h-10 w-10 text-black" />
        </Link>
        <Link href="https://www.linkedin.com/in/rishi-bose%F0%9F%98%87-4934ba252/">
          <BsLinkedin className="h-10 w-10 text-blue-600" />
        </Link>
        <Link href="https://www.facebook.com/rishi.bose.1119/">
          <BsInstagram className="h-10 w-10 text-pink-600" />
        </Link>
        <Link href="https://www.youtube.com/@darkillerlivegaming">
          <BsYoutube className="h-10 w-10 text-red-600" />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
