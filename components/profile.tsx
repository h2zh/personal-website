import Job from "./job";

const Profile = () => {
  const jobMetadataArray = [];
  jobMetadataArray.push({
    title: "Backend Developer (Part-time)",
    company: "URSearch, a start-up affiliated to UW-Madison",
    time: "Aug 2023 – Present",
    location: "Remote",
    description: [
      "Propose architectural design and build a Golang/PostgresSQL backend of a job search application",
      "Containerize the service with Docker and deploy it on Microsoft Azure to perform CI/CD",
      "Work in team to synthesize AI/ML training done in Python with Golang backend",
    ],
  });
  jobMetadataArray.push({
    title: "Software Engineer Intern",
    company: "Liba LLC",
    location: "Sunnyvale, CA",
    time: "June 2023 – Aug 2023",
    description: [
      "Refactored Java Spring Boot microservices, improving performance from 500 QPS to 50,000 QPS by deploying Redis and RocketMQ for the 'Limited Time Promotion & Buy Now' business requirement",
      "Worked with tech leads to finalize architectural design according to Domain-Driven Design principles",
      "Designed peak-load shifting for order service by asynchronously creating orders using RocketMQ. Implemented 'Pay-check & Cancel' by consuming delay message. Optimized optimistic-lock of updating inventory in MySQL",
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
          Howard Zhong is a Computer Science Master&rsquo;s student at
          University of Wisconsin-Madison, expecting to graduate in May 2024. He
          is enthusiastic in building robust software systems. From enterprise
          microservices built on Java Spring Boot to open-source civil hacking
          project coded with React, he dedicates to full-stack development and
          embraces the opportunities to grow in different settings.
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
