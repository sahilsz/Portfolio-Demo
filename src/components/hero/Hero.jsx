import "./hero.css";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVarients = {
  intial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      reapeatType: "mirror",
      duration: 20,
    },
  },
};
export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Sahil Sharma</motion.h2>
          <motion.h3 variants={textVariants}>
            Building something cool, Software Developer and Designer
          </motion.h3>
          <motion.div className="buttons" variants={textVariants}>
            <a
              href="https://github.com/sahilsz"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </a>
            <a href="/Sahil_Resume.pdf" target="_blank">
              <motion.button variants={textVariants}>Résumé </motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVarients}
        initial="initial"
        animate="animate"
      >
        Creating Exploring Developing Experimenting
      </motion.div>
      <div className="imageContainer">
        <img src="/js.png" alt="Hero" />
      </div>
    </div>
  );
}
