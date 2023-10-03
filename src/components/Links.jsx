import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { links } from "../constants";
import {Snippet} from "@nextui-org/snippet";

const LinksCard = ({ index, name, image, source_code_link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="glass p-5 rounded-2xl sm:w-[150px] w-full"
  >
    <div className="relative w-full h-[100px]">
      <img
        src={image}
        alt="project_image"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
    <div className="mt-5 flex">
      <p className="mt-2 text-secondary text-[14px]">
      {name}</p>
    </div>
  </motion.div>
);

const Links = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Links.</h2>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-12">
        {links.map((link, index) => (
          <LinksCard key={`link-${index}`} index={index} {...link} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Links, "");
