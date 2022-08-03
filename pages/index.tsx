import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import Footer from "../components/footer";
// import Header from "../components/header";
// import Layout from "../components/layout";
import Profile from "../components/profile";
import ProjectPreview, {ProjectPreviewInterface} from "../components/project_preview";

const Home: NextPage = () => {

  const projectMetadataArray = [];
  projectMetadataArray.push(
    {
      title: "Full Stack E-commerce App with NextJS, React, Sanity, Stripe API",
      description: "",
      linkUrl: "https://react-projects-tau.vercel.app/",
      image: "/screen.jpg",
      gradiant: "from-[#D8B4FE] to-[#818CF8]"
    }
  );
  projectMetadataArray.push(
    {
      title: "Full Stack Pinterest Clone App with Next.js, Sanity",
      description: "Next.js, Sanity",
      linkUrl: "/Project1",
      image: "/hci.jpg",
      gradiant: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
    }
  );
  projectMetadataArray.push(
    {
      title: "Frontend Personal Website with NextJS, React, Tailwind CSS, TypeScript",
      description: "NextJS, React, Tailwind CSS, TypeScript",
      linkUrl: "/",
      image: "/hci.jpg",
      gradiant: "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
    }
  );

  const projectPreviewElements = [];

  // create a projectPreviewElement for each object in the array
  for (let i=0; i<projectMetadataArray.length; i++){
    const metadata = projectMetadataArray[i];
    const element = <ProjectPreview {...metadata} key={i}/>;
    projectPreviewElements.push(element);
  }

  return (
    <div className="">
      <h3 className="font-bold text-2xl md:text-2xl tracking-tight mt-1 text-black">
            Featured Projects
      </h3>
      <div className="mt-4 flex flex-col gap-4">
        {projectPreviewElements}
      </div>
      <Profile />
    </div>
  );
};

export default Home;
