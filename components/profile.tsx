const Profile = () => {
  return (
    <div
      id="profile"
      className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-8 w-full"
    >
      <h1 className="font-bold text-2xl md:text-2xl tracking-tight mb-0 text-black mt-6">
        About Me
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
            Frameworks: Spring Boot, Redis, JUnit, React, Next.js, Node.js, REST
            API, GraphQL API, Mapbox GL JS, Prisma, Apollo, Bootstrap, Flask
          </li>
          <li>
            Developer Tools: Git, Webpack, AWS, Kubernetes, Docker, Figma,
            MongoDB, Auth0, Firebase
          </li>
        </ul>
      </div>
      <h1 className="font-bold text-2xl md:text-2xl tracking-tight mb-0 text-black mt-6">
        Why CS
      </h1>
      <div className="text-gray-600 mt-3 mb-4">
        <p>
          It was the Android Open Source Project (AOSP) that led me to touch the
          beauty of open-source internet and finally got me to study Computer
          Science.
        </p>
        <p>
          When I was in seventh grade, I was enthusiastic in messing with my
          Android device back and forth, including rooting, installing custom
          ROMs, recovering lost data. The process was challenging, but I could
          usually find a tricky way to work around on the online forums.
          Everyone in the community was truly excited to help and collaborate
          with others.
        </p>
        <p>
          I found these experience tremendously rewarding. As time goes by, I
          wanted to uncover the mechanism of these tiny but powerful software.
          To understand the programming fundamentals, I started with Java.
          Later, I learned more backend frameworks based on Java and got
          exposure to web development in Javascript. Now, I'm learning to
          develop high impact system built on the cloud.
        </p>
      </div>
    </div>
  );
};

export default Profile;
