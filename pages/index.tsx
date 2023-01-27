import type { NextPage } from "next";
import Intro from "../components/intro";
import Profile from "../components/profile";
import Preview from "../components/preview";
// This website is inspired by Lee Robinson's portfolio website

const Home: NextPage = () => {
  return (
    <div className="">
      <Intro />
      <Preview />
      <Profile />
    </div>
  );
};

export default Home;
