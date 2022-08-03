import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../public/screen.jpg";

const Project1: NextPage = () => {
  const back_icon = <FontAwesomeIcon icon={faArrowLeft} />;

  return (
    <div>
      <div className="flex flex-col mt-4">
        <h4 className="w-full mb-4 font-semibold text-2xl text-gray-900 md:text-2xl">
          Full Stack E-commerce App
        </h4>
        <Image src={projectImage} alt="project picture"></Image>
      </div>
      <p className="text-gray-600 mt-4">
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
