import React from "react";
import ProjectPreview, {
  ProjectPreviewInterface,
} from "../components/project_preview";
import AreaPreview, {
  AreaOfInterestInterface,
} from "../components/area_preview";
import Link from "next/link";

const Preview = () => {
  // areas
  const areaMetadataArray = [];
  areaMetadataArray.push({
    name: "Backend Dev",
    url: "",
    projects: [],
    gradient: "from-[#9bafd9] via-[#c6f8ff] to-[#103783]",
  });
  areaMetadataArray.push({
    name: "Fullstack Dev",
    url: "",
    projects: [],
    gradient: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
  });
  areaMetadataArray.push({
    name: "Open-source Projects",
    url: "",
    projects: [],
    gradient: "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
  });

  const areaPreviewElements = [];
  for (let i = 0; i < areaMetadataArray.length; i++) {
    const metadata = areaMetadataArray[i];
    const element = <AreaPreview {...metadata} key={i} />;
    areaPreviewElements.push(element);
  }

  // projects
  const projectMetadataArray = [];
  projectMetadataArray.push({
    title:
      "linkChicago: Full Stack Website Directory with GraphQL, Prisma, Apollo, Auth0, Next.js",
    description: "",
    linkUrl: "https://linkchicago.vercel.app/",
    image: "/hci.jpg",
    gradiant: "from-[#D8B4FE] to-[#818CF8]",
  });
  projectMetadataArray.push({
    title: "Full Stack E-commerce App with NextJS, React, Sanity, Stripe API",
    description: "",
    linkUrl: "https://react-projects-tau.vercel.app/",
    image: "/screen.jpg",
    gradiant: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
  });

  projectMetadataArray.push({
    title:
      "GeoDev: An intereactive street light map with Mapbox GL JS, NextJS, React",
    description: "NextJS, React, Tailwind CSS, TypeScript",
    linkUrl: "https://brightway.vercel.app/",
    image: "/hci.jpg",
    gradiant: "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
  });

  const projectPreviewElements = [];

  // create a projectPreviewElement for each object in the array
  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metadata = projectMetadataArray[i];
    const element = <ProjectPreview {...metadata} key={i} />;
    projectPreviewElements.push(element);
  }

  return (
    <div id="projects">
      <h3 className="font-bold text-2xl md:text-2xl tracking-tight mt-8 text-black">
        Areas{/* Featured Projects */}
      </h3>
      <Link href="/projects">
        <div className="mt-4 flex flex-row gap-4 items-stretch md:max-w-md">
          {areaPreviewElements}
        </div>
      </Link>
    </div>
  );
};

export default Preview;
