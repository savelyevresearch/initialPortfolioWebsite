"use client";

import { FC } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "@/styles";
import { services } from "@/constants";
import { fadeIn, textVariant } from "../../utils/motion";
import Image from "next/image";
import { SectionWrapper } from "@/HOC/SectionWrapper";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: any;
}

const ServiceCard: FC<ServiceCardProps> = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          /* options={{ max: 45, scale: 1, speed: 450 }} */
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

interface AboutProps {}

const About: FC<AboutProps> = (props: AboutProps) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("up", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I`m a Fullstack Developer using TypeScript, JavaScript, Python,
        Solidity. In addition, I am engaged in Cybersecurity Engineering working
        with GNU/Linux systems, SIEM systems, OSINT tools and tools for
        penetration tests. I quickly learn any technology and use it in
        practice, flexibly work with clients and solve business problems. I
        suggest working together to turn your ideas into reality.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
