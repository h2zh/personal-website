import Job from "./job";

const Profile = () => {
  const jobMetadataArray = [];
  jobMetadataArray.push({
    title: "Research Software Engineer",
    company:
      "Center for High Throughput Computing - Morgridge Institute for Research",
    time: "Oct 2024 – Present",
    location: "Madison, WI",
    description: [
      "Build the core features of Pelican (a.k.a. Open Science Data Federation, OSDF), a worldwide distributed computing infrastructure supporting high-throughput data transfer up to PB-scale",
      "Golang development items: Issuer public/privite keys rotation; Server downtime persistence; APIs",
      "PR reviews: Kubernetes operator, NextJS web UI; Support high-profile customers like FermiLab, LIGO",
    ],
  });
  jobMetadataArray.push({
    title: "Fullstack Development Intern",
    company: "Norfolk Southern Corporation",
    time: "Sep 2023 – Dec 2023",
    location: "Atlanta, GA",
    description: [
      "Developed a Java pipeline and algorithms to migrate 800+ customer reports to new database and backend service",
      "Worked with tech lead to finalize the new database schema design, optimize the SQL scripts, write technical docs, and debrief stakeholders in the Sprint Review",
      "Implemented new and refactored existing Spring Boot RESTful APIs, carried out frontend development with JavaScript to meet business needs in Agile workflow, resulting in enhanced system performance",
      "Utilized Jenkins, OpenShift CI/CD pipelines to configure stages and jobs for automated build and deployment",
    ],
  });
  jobMetadataArray.push({
    title: "Backend Developer, Student Lead",
    company: "UW School of Medicine and Public Health",
    time: "Aug 2023 – May 2024",
    location: "Madison, WI (Hybrid)",
    description: [
      "Lead a team to build, integrate and test APIs of a lab recruitment platform with Golang/PostgreSQL, which was selected to NSF Regional I-Corps",
      "Orchestrate a micro-service structure to synthesize the Golang backend, Python algorithms, and file storage respectively with Azure Container App, Serverless Function, Blob storage and PostgreSQL database",
      "Parallel requests through Go routines & channels, optimizing query performance by 57%",
      "Apply DevOps integrations with Microsoft Azure, Docker, Github Actions to perform CI/CD",
    ],
  });
  jobMetadataArray.push({
    title: "Software Engineer Intern",
    company: "Liba LLC",
    location: "Sunnyvale, CA",
    time: "June 2023 – Aug 2023",
    description: [
      "Refactored Java Spring Boot microservices according to Domain-Driven Design principles, to optimize the performance of high-throughput system",
      "Revised the optimistic-lock in MySQL, avoiding stock inconsistency risks arising from concurrent orders",
      "Deployed Redis for high throughput scenarios like Flash Sales, improving performance from 500 to 50,000 QPS",
      "Designed peak-load shifting for order service by asynchronously creating orders using RocketMQ. Implemented 'Pay-check & Cancel' by consuming delay message",
    ],
  });
  jobMetadataArray.push({
    title: "Software Engineer Intern",
    company: "Patternlot",
    time: "June 2022 – Aug 2022",
    location: "Remote",
    description: [
      "Researched, designed, integrated RESTful APIs for Spring Boot-Redis systems per requirements",
      "Implemented new software designs that reduced API response time by 15%-60%",
      "Automated nginx file config by using confd and Redis, ensuring availability during system upgrades",
      "Documented internal knowledge base on Jira Confluence",
    ],
  });
  jobMetadataArray.push({
    title: "Tutor | CS300: Programming II",
    company: "UW-Madison",
    time: "Jan 2022 – May 2022",
    location: "Madison, WI",
    description: [
      "Led weekly meeting which covers topics including sorting algorithms, data structures, OOP in Java",
      "Developed question sets and helped students with course projects coded with Java",
    ],
  });

  return (
    <div
      id="profile"
      className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-8 w-full space-y-4"
    >
      <h1 className="font-bold text-2xl md:text-2xl tracking-tight mb-0 text-black mt-6">
        Bio
      </h1>
      <div className="text-gray-600">
        <p>
          Howard Zhong is a research software engineer who works on the
          &ldquo;Netflix&rdquo; of PB-scale data. He obtained his Master of
          Science degree in Computer Science from UW-Madison. He has more than 1
          year of experience in building robust software systems. From
          enterprise microservices built on Java Spring Boot to open-source data
          federation platform, he dedicates to backend and full-stack
          development, embracing the opportunities to grow in different
          settings.
        </p>
      </div>

      <div className="prose leading-7 tracking-normal ">
        <h3 className="font-bold text-lg prose text-black">Tech Stack</h3>
        <ul className="list-disc pl-4">
          <li>
            Languages: Java, Python, Go, JavaScript, Typescript, HTML/CSS, SQL,
            C++, Bash Shell Script
          </li>
          <li>
            Frameworks: Spring Boot, Kubernetes, Redis, RocketMQ, JUnit, React,
            Next.js, Node.js, REST API, GraphQL API, Mapbox GL JS, Prisma,
            Apollo, Bootstrap, Flask
          </li>
          <li>
            Developer Tools: Git, Webpack, AWS, Docker, Figma, MongoDB, Auth0,
            Firebase
          </li>
        </ul>
      </div>

      <h1 className="font-bold text-2xl md:text-2xl tracking-tight pt-3 text-black">
        Experience
      </h1>
      {jobMetadataArray.map((job, idx) => {
        return <Job {...job} key={idx}></Job>;
      })}
    </div>
  );
};

export default Profile;
