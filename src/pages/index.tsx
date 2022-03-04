import type { NextPage } from "next";
import Head from "next/head";
import Project from "../components/Project";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Full page slider with tail windcss</title>
        <meta name="description" content="Full page slider with tail windcss" />
      </Head>

      <div className="w-screen h-screen snap-y overflow-y-scroll snap-always snap-mandatory scroll-smooth bg-blue-900">
        <section className="w-full h-full bg-blue-900 flex justify-center items-center snap-start  ">
          <h1 className="text-5xl text-white">Page 1</h1>
        </section>

        <Project />

        <section className="w-full h-full bg-gray-200 flex justify-center items-center snap-start">
          <h1 className="text-5xl text-white">Page 1</h1>
        </section>
      </div>
    </>
  );
};

export default Home;
