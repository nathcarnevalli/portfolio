import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { contact } from "../constants";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { fadeIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";

const ContactCard = ({ index, name, link, icon }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 max-w-[600px] rounded-2xl flex items-center gap-x-6"
      >
        <div className="relative">
          <img src={icon} alt="project_image" className="w-10 object-cover" />
        </div>
        <div>
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {name !== "Telefone" && name !== "Email" ? (
            <a
              href={link}
              className=" text-secondary text-[14px]"
              target="_blank"
            >
              {link}
            </a>
          ) : (
            <div className=" text-secondary text-[14px]">{link}</div>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Contato.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col flex-wrap gap-5">
        {contact.map((info, index) => (
          <ContactCard
            key={`contact-${index}`}
            index={index}
            name={info.name}
            link={info.link}
            icon={info.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
