import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";

const BallCard = ({ index}) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[25px]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='glass rounded-[20px] py-5 px-5 min-h-[20px] max-w-[100px] flex justify-evenly items-center flex-col'
        style={{borderRadius:"50%"}}
      >
        <img
          src={index}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <div>
      <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Technical Skills.
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCard index={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
