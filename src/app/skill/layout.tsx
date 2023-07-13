import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My Skills",
  description:
    "Web development is a highly sought-after skill in today's digital age. With the rapid growth of the internet and the increasing dependence on online platforms, having expertise in web development opens up a world of opportunities. Whether you're interested in creating websites, web applications, or e-commerce platforms, possessing web development skills can propel your career to new heights.",
};
export default function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
