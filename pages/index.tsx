import type { NextPage } from "next";
import Intro from "../components/intro";
import Profile from "../components/profile";
import Preview from "../components/preview";
import Head from "next/head";
// This website is inspired by Lee Robinson's portfolio website

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Howard Zhong - Open to work</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Intro />
      <Preview />
      <Profile />
    </div>
  );
};

export default Home;
