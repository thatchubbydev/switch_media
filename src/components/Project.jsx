import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";
import "../styles/project.css";

function Project() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });
  return (
    <div>
      <div className="flex-col flex md:flex-row text-center md:justify-between  p-12 md:p-24">
        <div>
          <h4 className=" text-5xl font-semibold  text-black ">
            Selected Work
          </h4>
        </div>
        <div className="pt-4 md:pt-0">
          <a
            className="border-b-2  border-black w-fittext-black  uppercase font-semibold text-sm"
            href="http://"
          >
            Explore Portfolio
          </a>
        </div>
      </div>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => {
            return (
              <motion.div className="item " key={image}>
                <img src={image} className="pl-0" alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Project;
