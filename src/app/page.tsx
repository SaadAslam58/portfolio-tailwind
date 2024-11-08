import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <main className="w-screen relative h-screen">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/img/main-bg.webp)" }}
      >
        <div className="pl-10 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-white text-[50px] font-semibold">
            Make Anything Possible With
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
             {" "} 
             Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
          Hello Everyone! I'm Saad, a web developer and video editor. I specialize in creating engaging and user-friendly websites.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-3">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>

            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>

            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white   px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col  md:hidden gap-5 mb-10 md:mb-0">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-transparent px-5 border border-white  py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>

        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-transparent px-5 border border-white  py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          alt="horse"
          src="/img/horse.png"
          width={300}
          height={300}
          className="absolute right-55 top-40"
        />
        <Image
          src="/img/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
          className=""
        />
      </div>
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          alt="trees"
          src="/img/trees.webp"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        alt="stars"
        src="/img/stars.png"
        width={300}
        height={300}
        className="absolute top-10 left-0 z-[10]"
      />
    </main>
  );
};

export default page;
