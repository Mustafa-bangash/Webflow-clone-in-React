import React, { useState } from "react";
import { motion } from "framer-motion";
import frontBottle from "../../images/bottleFront.png";
import backBottle from "../../images/bottleBack.png";

function Box2() {
  const [hover, setHover] = useState(false);

 
  const frontBottleVariants = {
    initial: { opacity: 1, x: 0, rotateZ: 0 },
    hover: {
      rotateZ: [0, 5, -25], 
      x: ["0vw", "-25vw"], 
      opacity: [0.5, 0.5, 0.5, 0], 
      transition: {
        times: [0, 0.3, 0.5, 1],
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    reset: { rotateZ: 0, x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  const backBottleVariants = {
    initial: { opacity: 0, x: "20vw" }, 
    hover: {
      rotateZ: [0, 10, 0],
      x: ["20vw", "0vw"], 
      opacity: [0, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.2, 
      },
    },
    reset: { x: "20vw", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div
      className="w-[50vw] h-[100vh] bg-[#566D25] flex justify-center items-center relative overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1 className="font-didot text-[18vw] text-[hsla(0,0%,100%,0.1)] absolute top-10">
        No2
      </h1>


      <motion.img
        src={frontBottle}
        alt="Front Bottle"
        className="w-[150px] h-[590px] absolute"
        variants={frontBottleVariants}
        initial="initial"
        animate={hover ? "hover" : "reset"}
      />


      <motion.img
        src={backBottle}
        alt="Back Bottle"
        className="w-[150px] h-[590px] absolute"
        variants={backBottleVariants}
        initial="initial"
        animate={hover ? "hover" : "reset"}
      />
    </div>
  );
}

export default Box2;
