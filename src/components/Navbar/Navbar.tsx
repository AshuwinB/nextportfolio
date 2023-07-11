"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  const session = useSession();

  console.log(session);

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };
  return (
    <div className="bg-amber-400">
      <div className="flex justify-between items-center container  mx-auto max-w-7xl h-20">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="loading" width={100} height={100} />
          </Link>
        </div>
        <div>
          {session.status === "authenticated" ? (
            <div className="flex justify-center space-x-2">
              <p className="capitalize text-xl">
                {session.data.user?.name}
              </p>
              <button className="bg-red-400 w-20 rounded-2xl" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Link href="/authenticate/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
