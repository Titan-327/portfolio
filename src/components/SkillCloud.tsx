import { NextPage } from "next";
// import {IconCloud} from "@/components/magicui/icon-cloud";
import { lazy, Suspense } from 'react';

const IconCloud = lazy(() => import("./IconCloud"));



const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "sonarqube",
  "figma",
];

const SkillSection = () => {
  return (

     <div className="m-auto  flex size-full md:size-2/4 max-w-lg items-center justify-center overflow-hidden">
          <Suspense fallback={<div>Loading...</div>}>
          <IconCloud iconSlugs={slugs} />
          </Suspense>
        </div>
     

  );
};

export default SkillSection;