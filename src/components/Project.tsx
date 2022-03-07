import Link from "next/link";
import Image from "next/image";
import { useProjectsQuery } from "../graphql/generated/graphql";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Html,
  useGLTF,
  softShadows,
  ScrollControls,
  useScroll,
  useTexture,
  OrbitControls,
} from "@react-three/drei";
import useRefs from "react-use-refs";
import Laptop from "./Laptop";

const bgColors = [
  "bg-gray-200",
  "bg-gray-300",
];

const Project: React.FC = () => {
  const { data, loading, error } = useProjectsQuery();

  if (loading) return <div className="text-white text-2xl">Loading...</div>;

  if (error)
    return (
      <div className="text-white text-2xl">
        Oops, something went wrong.
        <br />
        Please try refreshing the page.
      </div>
    );

  if (data) {
    console.log(data);
  }
  return data?.allProject.map((project, index) => {
    const { name, slug, description, link } = project;

    return (
      <section
        key={slug?.current}
        className={`w-full h-full py-14 px-4 flex-wrap flex flex-col snap-start ${bgColors[index % bgColors.length]}`}
      >
        <div id="left" className="w-full h-full py-8 md:w-1/2">
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, -10, 40], fov: 12 }}
          >
            <Suspense fallback={null}>
              <Laptop projectImage={"/morais_movelaria.jpg"} />
            </Suspense>
          </Canvas>
        </div>
        <div
          id="right"
          className="flex flex-col justify-center items-start w-full h-full md:w-1/2 pl-4 md:pl-20"
        >
          <h1 className="text-4xl font-bold text-indigo-700">{name}</h1>
          <span className="text-xl pt-12">{description}</span>
          <Link href={link!}>
            <a target="_blank" className="text-lg mt-4 mb-20 font-semibold hover:font-bold hover:text-indigo-800">
              {link!}
            </a>
          </Link>

          <div className="flex flex-wrap gap-8">
            {project.techologies!.map((tech) => {
              return (
                <div key={tech!.name} className="w-1/4 h-16 box-border">
                  {tech?.logo?.asset?.url && (
                    <Link href={tech.link!}>
                      <a target="_blank">
                        <Image
                          src={tech.logo.asset.url!}
                          alt={tech.name!}
                          width={120}
                          height={80}
                        />
                      </a>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  });
};

export default Project;
