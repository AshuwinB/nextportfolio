import React from "react";
import { checkEnvironment } from "../checkEnvironment/checkEnvironment";
import { FaDoorOpen } from "react-icons/fa";
import Link from "next/link";
async function getData() {
  const res = await fetch(checkEnvironment().concat("/api/posts"), {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const TimeLineProj = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto px-3">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {data.map((item: any, index: number) => (
          <li className="mb-10 ml-4" key={index}>
            <div
              className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border
             border-white dark:border-gray-900 dark:bg-gray-700"
            ></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startdate}➖{item.enddate}
            </time>

            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 ">
                  - {item.title}
                </h3>
              </div>
              <div>
                <Link href={item.websiteurl}>
                <FaDoorOpen className="h-8 w-8"/>
                </Link>
              
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLineProj;
