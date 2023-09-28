import "./services.css";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h2>
            <b>Unique</b> Ideas
          </h2>
        </div>
        <div className="title">
          <h2>
            <b>For Your</b> Business.
          </h2>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
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
