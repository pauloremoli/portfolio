import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useProjectsQuery } from "../graphql/generated/graphql";

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
  return (
    <section className="w-screen flex flex-col  justify-center items-center snap-start">
      {data?.allProject.map((project) => {
        const { name, slug, description, link , color} = project;
        return (
          <div key={slug?.current} className= ` w-screen h-screen m-40 ${color.hex}`>
            <h1 className="text-4xl  p-2">{name}</h1>
            <span className="text-xl  p-2">{description}</span>
            <h3 className="m-6 font-semibold text-xl text-blue-900">
              Technologies:
            </h3>

            <div className="flex flex-row gap-12">
              {project.techologies!.map((tech) => {
                return (
                  <div key={tech!.name} className="">
                    {tech?.logo?.asset?.url && (
                      <Link href={tech.link!}>
                        <a target="_blank">
                          <Image
                            src={tech.logo.asset.url!}
                            alt={tech.name!}
                            width={100}
                            height={60}
                          />
                        </a>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            <Link href={link!}>
              <a target="_blank" className="text-xl mt-14 font-thin">
                {link!}
              </a>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Project;
