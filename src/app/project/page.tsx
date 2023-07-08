import CardProject from "@/components/CardProject/CardProject";
import TimeLineProj from "@/components/CardProject/TimeLineProj";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div>
          <TimeLineProj/>
        </div>
        <div className=" col-span-2">
          <CardProject/>
        </div>
      </div>
    </div>
  );
};

export default page;
