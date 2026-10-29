import React from "react";

import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className="bg-sky-800 text-white">
        <div className="flex flex-col gap-4 items-center justify-center h-[calc(100vh-80px)] px-8 mx-auto max-w-7xl">
          <h1 className="text-6xl font-bold text-center">
            Every story has something to say
          </h1>
          <p className="text-center text-2xl">
            Say it is a space for fresh perspectives, inspiring stories, and
            meaninful conversations about the ideas that shape our world
          </p>

          <div className="flex gap-6">
            <Button label="Get started" className="bg-slate-900 text-white" />
            <Button label="Learn more"  className="border-slate-300 border"   />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
