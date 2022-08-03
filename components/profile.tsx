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
          Howard Zhong is a computer science major student at
          University of Wisconsin-Madison, expecting to graduate in May 2024.
        </p>
      </div>
      <div className="prose leading-8 tracking-tight ">
        <h3 className="font-bold text-lg prose text-black">Tech Stack</h3>
        <ul className="list-disc pl-4">
          <li>Programming Languages: Java, Python, JavaScript, HTML/CSS, SQL, TypeScript, C++, C, MATLAB, R</li>
          <li>Tools: React, NextJS, Tailwind CSS, Sanity, Linux, Git, Node.js</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
