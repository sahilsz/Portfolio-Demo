import { useRef } from "react";
import "./portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Ai-Saas - Next.js FullStack",
    img: "ai.png",
    desc: "This is my attempt to implement a client interface for an Ai-ChatBot. I'm current working on this, this project utilized latest tech such as Next.js, TypeScript and more.",
    demo: "ai-sas.vercel.app",
  },
  {
    id: 2,
    title: "Mern Stack- Fiver Clone",
    img: "/fiverr.png",
    desc: "This is my implementation of fiver using React on client side, node on server side and mongodb for data storage. I have intergrated React with node.js with authentication using JWT. I have also added postman collection to test the endpoints.",
    link: "https://github.com/sahilsz/Fiverr-Clone",
  },
  {
    id: 3,
    title: "RestFUL APIs - Node.js",
    img: "/book.png",
    desc: "A Node.js backend RESTful APIs for managing and storing individuals books. This is my submission project for one of my Hackthon. Here I created all the CRUD endpoints with proper authentication & authorization with 70% unittest coverage.",
    link: "https://github.com/sahilsz/node-books-management",
  },
  {
    id: 4,
    title: "RestAPI with zod - Node.js, TypeScript",
    img: "https://images.pexels.com/photos/15086124/pexels-photo-15086124/free-photo-of-yellow-leaves-on-tree-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "This is RestAPI with Node.js, Express, MongoDB, TypeScript and Zod with authentication using JWT and proper testing and logging using Pino.",
    link: "https://github.com/sahilsz/Nodejs-RestAPI",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item?.demo ? item.demo : item.link}>
              <button>{item?.demo ? "See Demo" : "Visit"}</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}
