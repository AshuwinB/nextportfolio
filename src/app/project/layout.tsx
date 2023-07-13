import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My Work",
  description:
    "The primary goal of this project was to create a secure, scalable, and user-friendly e-commerce website that enables businesses to showcase and sell their products or services online. The website offers a wide range of features and functionalities to facilitate seamless browsing, product selection, and secure transactions",
};
export default function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
