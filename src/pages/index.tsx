import type { NextPage } from "next";
import Head from "next/head";
import Project from "../components/Project";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paulo Remoli's portfolio</title>
        <meta name="description" content=">Paulo Remoli's portfolio - Full stack developer" />
      </Head>

      <div className="w-screen h-screen snap-y snap-always snap-mandatory overflow-y-scroll scroll-smooth bg-blue-900 ">
        <section className="w-full h-full bg-blue-900 flex justify-center items-center snap-start  ">
          <h1 className="text-5xl text-white">Page 1</h1>
        </section>

        <Project />

      </div>
    </>
  );
};

export default Home;
