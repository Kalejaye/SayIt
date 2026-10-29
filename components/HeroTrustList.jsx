import React from "react";
import { trustBlogPosts } from "@/constants/heroData";
import HeroTrustCard from "./HeroTrustCard";

const HeroTrustList = () => {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase  text-sky-700">
            Stories worth sharing
          </p>
          <h2 className="text-3xl font-semibold  text-slate-900 sm:text-4xl">
            You can always Say It
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustBlogPosts.map((blog) => (
            <HeroTrustCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroTrustList;
