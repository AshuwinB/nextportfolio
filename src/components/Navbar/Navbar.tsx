import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-amber-400">
      <div className="flex justify-between items-center container  mx-auto max-w-7xl h-20">
        <div>
          <Link href='/'>
            <Image src="/logo.png" alt="loading" width={100} height={100} />
          </Link>
        </div>
        <div>
          <p className=" italic uppercase text-xl">Rishi</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
