import type { NextPage } from "next";
import Head from "next/head";
import Intro from "../components/Intro";
import Project from "../components/Project";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paulo Remoli's portfolio</title>
        <meta
          name="description"
          content=">Paulo Remoli's portfolio - Full stack developer"
        />
      </Head>

      <div className="w-full h-full md:h-screen md:w-screen snap-y snap-always snap-mandatory overflow-y-scroll scroll-smooth bg-blue-900 ">
        <Intro />
        <Project />
      </div>
    </>
  );
};

export default Home;
