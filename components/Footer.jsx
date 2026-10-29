import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white mt-16">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-3xl font-bold">Say it.</h2>
            <p className="mt-4 text-sky-100">
              A space for fresh perspectives, inspiring stories, and meaningful
              conversations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Explore</h3>
            <div className="mt-4 flex flex-col gap-3 text-sky-100">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">What you’ll find</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sky-100">
              <li>Fresh perspectives</li>
              <li>Inspiring stories</li>
              <li>Meaningful conversations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Say hello</h3>
            <p className="mt-4 text-sky-100">
              Have a story or an idea to share? We’d love to hear from you.
            </p>
            <Link className="mt-3 inline-block underline" href="/contact">
              Get in touch
            </Link>
          </div>
        </div>

        <p className="mt-10 border-t border-sky-700 pt-6 text-sm text-sky-200">
          © 2026 Say it. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
