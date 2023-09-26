"use client";
import React from "react";

export const Home = ({propsData}: any) => {
   
   const title = propsData[0]?.title || "Default Title";

  return (
    <>
      <div>
        {title}
      </div>
    </>
  );
};