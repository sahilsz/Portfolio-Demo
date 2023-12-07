import "./contact.css";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let&apos;s Connect</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>
            <a href="mailto:sahilsz@proton.me">sahilsz@proton.me</a>
          </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>LinkedIn</h2>
          <span>
            <a href="https://linkedin.com/in/sahilsz">In/Sahilsz</a>
          </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 100</span>
        </motion.div>
      </motion.div>
      {/* <motion.div className="formContainer" variants={variants}>
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </motion.div> */}
    </motion.div>
  );
}
