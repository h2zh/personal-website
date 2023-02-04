import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import React from "react";

// An interface/class for props
export interface ProjectPreviewInterface {
  title: string;
  description: string[];
  linkUrl: string;
  image: string;
  gradiant: string;
}

const ProjectPreview = (props: ProjectPreviewInterface) => {
  return (
    <div className="flex flex-col justify-between h-full w-full bg-white rounded-lg py-4">
      <div className="flex flex-col md:flex-row justify-between">
        <h4 className="text-lg md:text-lg font-medium mb-4 sm:mb-5 w-full text-gray-900 ">
          {props.title}
        </h4>
      </div>
      <ul className="list-disc pl-4">
        {props.description.map((des, idx) => {
          return <li> {des}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProjectPreview;
