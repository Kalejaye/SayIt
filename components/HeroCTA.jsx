import React from "react";
import { ctaContent } from "@/constants/heroData";
import Link from "next/link";
import Image from "next/image";

const HeroCTA = () => {
  const {
    eyebrow,
    title,
    description,
    primaryAction,
    secondaryAction,
    image,
    imageAlt,
  } = ctaContent;
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex max-w-6xl justify-center items-center mx-auto bg-sky-900 text-white p-15 border rounded-2xl ">
        <div>
          <h3 className="text-xs w-fit p-3  border rounded-full border-sky-300">
            <span className="w-3 h-3 bg-sky-400 inline-flex  rounded-full justify-center items-center mr-2 " />
            {eyebrow}
          </h3>
          <p className="text-4xl font-semibold mt-5">{title}</p>
          <p className="text-gray-300 text-[16px]">{description}</p>

          <div className="mt-6">
            <Link
              className="bg-slate-900 border-slate-900 rounded-full py-3 px-6 inline-flex "
              href={primaryAction.href}
            >
              {primaryAction.label}
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={image}
            alt={imageAlt}
            width={300}
            height={200}
            className="object-cover w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCTA;
