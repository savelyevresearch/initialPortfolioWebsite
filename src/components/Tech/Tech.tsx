"use client";

import { technologies } from "@/constants";
import { FC } from "react";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "@/HOC/SectionWrapper";

interface TechProps {}

const Tech: FC<TechProps> = (props: TechProps) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div key={technology.name} className="w-28 h-28">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
