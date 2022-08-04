
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../public/screen.jpg";

const Project1: NextPage = () => {

  return (
    <div>
      <div className="flex flex-col">
        <h4 className="w-full mb-6 font-bold text-3xl text-gray-900">
          Full Stack E-commerce App
        </h4>
        <Image src={projectImage} alt="project picture"></Image>
      </div>
      <p className="text-gray-600 mt-4 mb-12">
        To be updated.
      </p>
      {/* <h1 className="text-xl text-indigo-600 mb-4 font-bold">
        Full Stack E-commerce App
      </h1>
      <Image src={projectImage}></Image>
      <div className="mt-4">something here</div> */}
    </div>
  );
};

export default Project1;
