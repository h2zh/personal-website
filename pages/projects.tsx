import Head from "next/head";
import React from "react";
import cn from "classnames";
import ProjectPreview from "../components/project_preview";

const Projects = () => {
  // projects
  const projectMetadataArray = [];
  projectMetadataArray.push({
    title:
      "Java Spring Boot Micro-services: Order and Promotion System (Intern Project at Liba)",
    description: [
      "Refactored Java Spring Boot microservices, improving performance \
      from 500 QPS to 50,000 QPS by deploying Redis and RocketMQ for the \
      ''Limited Time Promotion & Buy Now'' business requirement",
      "Worked with tech leads to finalize architectural design according \
      to MVC & Domain-Driven Design principles",
      "Designed peak-load shifting for order service by asynchronously \
      creating orders using RocketMQ. Implemented ''Pay-check \
      & Cancel'' by consuming delay message. Optimized \
      optimistic-lock of updating inventory in MySQL",
    ],
    linkUrl: "",
    image: "/hci.jpg",
    category: "backend",
  });
  projectMetadataArray.push({
    title: "Backend service with Go, Docker, AWS Kubernetes: SimpleBank",
    description: [
      "Designed database schema, implemented CRUD operations and transactions in Go with PostgreSQL",
      "Implemented RESTful APIs with Gin and Viper for configuration. Utilized Go Mock to generate mocks for \
      the database, achieving robust unit tests of 80% coverage. Authenticated APIs by PASETO and JWT",
      "Enabled automatic issue & renew TLS certificate with Let's Encrypt. Set up Github Actions to run unit test",
      "Built Docker image and deployed on AWS Kubernetes and automated Github Actions workflow. Utilized \
      Kubernetes ingress to route traffic to the service. Explored gRPC APIs and gateway in Golang",
    ],
    linkUrl: "",
    image: "/screen.jpg",
    category: "backend",
  });
  projectMetadataArray.push({
    title: "Decentralized Crowdfunding",
    description: [
      "Implemented customized smart contract interactions in its entire life cycle (create, contribute, withdraw, refund, finalize) with Web3.js, Ethers.js",
      "Built a backend Node.js server to perform database operations in MongoDB",
      "Developed a Next.js frontend interface with Redux, NextAuth and Tailwind CSS",
    ],
    linkUrl: "https://github.com/h2zh/DApp-Fullstack",
    image: "/screen.jpg",
    category: "fullstack",
  });
  projectMetadataArray.push({
    title: "ChatAero.com | GPT-based aviation message decoder",
    description: [
      "Built with React and Material UI. Prompted GPT-3.5 model to generate JSON data based on user input",
      "Developed RESTful APIs to do client-side JSON data fetching on top of a Static Generation chatbox interface",
      "Integrated Redux for efficient state management and utilized Thunk middleware for async Firebase user authentication",
    ],
    linkUrl: "https://www.chataero.com/",
    image: "/screen.jpg",
    category: "fullstack",
  });
  projectMetadataArray.push({
    title: "linkChicago",
    description: [
      "A fullstack website directory application that helps people access credible public services in Chicago. It was built with TypeScript, PostgreSQL, Next.js, Prisma & GraphQL",
    ],
    linkUrl: "https://linkchicago.vercel.app/",
    image: "/screen.jpg",
    category: "fullstack",
  });

  const projectPreviewElements = [];

  // create a projectPreviewElement for each object in the array
  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metadata = projectMetadataArray[i];
    const element = <ProjectPreview {...metadata} key={i} />;
    projectPreviewElements.push(element);
  }

  // TODO: Passing Data Between React Components

  return (
    <div>
      <Head>
        <title>Howard&rsquo;s Project Warehouse</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div id="projects">
        <h3 className="font-bold text-2xl md:text-2xl tracking-tight mt-0 text-black">
          Featured Projects
        </h3>
        <div
          className={cn(
            "bg-gradient-to-r from-[#9bafd9] via-[#c6f8ff] to-[#103783]",
            "rounded-xl w-full md:w-full bg-gradient-to-r p-1",
            "flex mt-6"
          )}
        >
          <div className="flex flex-col justify-center h-full w-full bg-white rounded-lg p-2">
            <div className="flex flex-col md:flex-row justify-center ">
              <h4
                className="text-lg md:text-xl font-bold text-center"
                id="Backend"
              >
                Backend Development
              </h4>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 items-stretch ">
          {projectMetadataArray
            .filter((project) => {
              return project.category === "backend";
            })
            .map((project, idx) => {
              console.log(project.title);
              return <ProjectPreview {...project} key={idx} />;
            })}
        </div>

        <div
          className={cn(
            "bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] ",
            "rounded-xl w-full md:w-full bg-gradient-to-r p-1",
            "flex mt-6"
          )}
        >
          <div className="flex flex-col justify-center h-full w-full bg-white rounded-lg p-2">
            <div className="flex flex-col md:flex-row justify-center ">
              <h4
                className="text-lg md:text-xl font-bold text-center"
                id="Fullstack"
              >
                Fullstack Development
              </h4>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 items-stretch ">
          {projectMetadataArray
            .filter((project) => {
              return project.category === "fullstack";
            })
            .map((project, idx) => {
              return <ProjectPreview {...project} key={idx} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
