import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useProjectsQuery } from "../graphql/generated/graphql";

const bgColors = ["bg-green-200", "bg-teal-300", "bg-cyan-200", "bg-indigo-200", "bg-rose-300"]

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
    

      data?.allProject.map((project, index) => {
        
        const { name, slug, description, link } = project;
        console.log(bgColors[index % 5]);
        

        return (
          
        <section key={slug?.current} className={`"w-full h-full py-14 px-4 flex-wrap flex flex-col justify-center items-center snap-start ${bgColors[index % bgColors.length]}`}>
            <h1 className="text-4xl  p-2 font-bold">{name}</h1>
            <span className="text-xl  p-2">{description}</span>
            <h3 className="m-6 font-semibold text-xl text-blue-900 mt-20">
              Technologies:
            </h3>

            <div className="flex flex-row flex-wrap gap-4 md:gap-12 justify-center">
              {project.techologies!.map((tech) => {
                return (
                  <div key={tech!.name} className="">
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

            <Link href={link!}>
              <a target="_blank" className="text-xl mt-14 font-thin">
                {link!}
              </a>
            </Link>
          </section>
        );
      })
  );
};

export default Project;
