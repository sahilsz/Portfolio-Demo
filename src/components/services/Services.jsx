import { useRef } from "react";
import "./services.css";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: "0",
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h2>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h2>
        </div>
        <div className="title">
          <h2>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h2>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            dolorem, dolores ea aut aliquam recusandae maiores sequi libero
            labore rem quia tempore debitis. Possimus deleniti quia repudiandae
            ab ex cumque?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            dolorem, dolores ea aut aliquam recusandae maiores sequi libero
            labore rem quia tempore debitis. Possimus deleniti quia repudiandae
            ab ex cumque?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            dolorem, dolores ea aut aliquam recusandae maiores sequi libero
            labore rem quia tempore debitis. Possimus deleniti quia repudiandae
            ab ex cumque?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            dolorem, dolores ea aut aliquam recusandae maiores sequi libero
            labore rem quia tempore debitis. Possimus deleniti quia repudiandae
            ab ex cumque?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
