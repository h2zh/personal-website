import Head from "next/head";
import React from "react";
import ProjectPreview from "../components/project_preview";

const Projects = () => {
  // projects
  const projectMetadataArray = [];
  projectMetadataArray.push({
    title:
      "Java Spring Boot Micro-services: Order and Promotion System (Intern Project at Patternlot)",
    description: [
      "Refactored Java Spring Boot microservices, improving performance \
      from 500 QPS to 50,000 QPS by deploying Redis and RocketMQ for the \
      &lsquo;&lsquo;Limited Time Promotion & Buy Now&rsquo;&rsquo; \
      business requirement",
      "Worked with tech leads to finalize architectural design according \
      to MVC & Domain-Driven Design principles",
      "Designed peak-load shifting for order service by asynchronously \
      creating orders using RocketMQ. Implemented &lsquo;&lsquo;Pay-check \
      & Cancel&rsquo;&rsquo; by consuming delay message. Optimized \
      optimistic-lock of updating inventory in MySQL",
    ],
    linkUrl: "",
    image: "/hci.jpg",
    gradiant: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]", // color
  });
  projectMetadataArray.push({
    title: "Backend service with Go, Docker, AWS Kubernetes: SimpleBank",
    description: [
      "Designed database schema, implemented CRUD operations and transactions in Go with PostgreSQL",
      "Implemented RESTful APIs with Gin and Viper for configuration. Utilized Go Mock to generate mocks for \
      the database, achieving robust unit tests of 80% coverage. Authenticated APIs by PASETO and JWT",
      "Enabled automatic issue & renew TLS certificate with Let&rsquo;s Encrypt. Set up Github Actions to run unit test",
      "Built Docker image and deployed on AWS Kubernetes and automated Github Actions workflow. Utilized \
      Kubernetes ingress to route traffic to the service. Explored gRPC APIs and gateway in Golang",
    ],
    linkUrl: "",
    image: "/screen.jpg",
    gradiant: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]", // color
  });

  const projectPreviewElements = [];

  // create a projectPreviewElement for each object in the array
  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metadata = projectMetadataArray[i];
    const element = <ProjectPreview {...metadata} key={i} />;
    projectPreviewElements.push(element);
  }
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
        <div className="mt-4 flex flex-col gap-4 items-stretch ">
          {projectPreviewElements}
        </div>
      </div>
    </div>
  );
};

export default Projects;
