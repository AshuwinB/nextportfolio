"use client";
import React from "react";
import ModelProje from "./ModelProje";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";


interface ButtonProps {
  mutate: (params: any) => any;
}

const CardProject = () => {
  const session = useSession();
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data,mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.email}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between mt-4">
      <p className=" text-xl font-semibold">View Project</p>
        <ModelProje mutate={mutate} />
      </div>
      
      <div className=" grid grid-cols-1 md:col-span-2 gap-4 lg:grid-cols-2 mb-4">
        {data.map((item: any,index:number) => (
          <div key={index} className="max-w-sm hover:bg-stone-200 bg-white border mt-5 h-fit border-gray-200 rounded-lg shadow  dark:border-gray-700">
            <div className="flex justify-center pt-4">
              <Image src={item.imageurl} alt="" width={500} height={500} />
            </div>

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {item.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                {item.about}.
              </p>
            
                <div className=" flex justify-between mt-1 mb-1 cursor-pointer">
                  <Link href={item.githuburl}>
                    {" "}
                    <BsGithub className="h-6 w-6 text-black" />
                  </Link>

                  <Link href={item.websiteurl}>
                    <div className=" flex justify-center space-x-2">
                      <BsGlobe className="h-6 w-6 text-blue-500" />{" "}
                      <p>{item.type}</p>
                    </div>
                  </Link>
                  {
                    session.status ==="authenticated"? <CiEdit className="h-6 w-6 text-blue-500" />:""
                  }
                 
                </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProject;
