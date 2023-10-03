import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const AchievementCard = ({ index, name, description, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="glass p-5 mt-7 rounded-2xl sm:w-[1000px] w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[1000px]"
          shadow="sm"
        >
          <CardBody>
            <div className="grid md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="achievement_image"
                  className="object-cover"
                  height={200}
                  shadow="md"
                  src={image}
                  width="100%"
                />
              </div>
              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <p className="text-secondary text-[14px]">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Achievements.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following publications showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 gap-7">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={`achievement-${index}`}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "");
