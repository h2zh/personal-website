const Profile = () => {
  return (
    <div
      id="profile"
      className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-8 w-full"
    >
      <h1 className="font-bold text-2xl md:text-2xl tracking-tight mb-0 text-black mt-6">
        Bio
      </h1>
      <div className="text-gray-600 mt-3 mb-4">
        <p>
          Howard Zhong is a Computer Science Master's student at University of
          Wisconsin-Madison, expecting to graduate in May 2024. He is
          enthusiastic in building robust software systems. From enterprise
          microservices built on Java Spring Boot to open-source civil hacking
          project coded with React, he dedicates to full-stack development and
          embraces the opportunities to grow in different settings.
        </p>
      </div>
      <div className="prose leading-8 tracking-normal ">
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
    </div>
  );
};

export default Profile;
