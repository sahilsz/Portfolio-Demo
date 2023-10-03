import { useRef } from "react";
import "./portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Next.js FullStack",
    img: "https://images.pexels.com/photos/18924410/pexels-photo-18924410/free-photo-of-a-church-on-a-rock-in-petrovac-montenegro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at ratione, deleniti dolorem officiis quia quasi. Dolores doloremque natus impedit nostrum tempora, eos illum. Tempore cum omnis ipsum totam ullam.",
  },
  {
    id: 2,
    title: "Mern Stack",
    img: "https://images.pexels.com/photos/18622543/pexels-photo-18622543/free-photo-of-go-home.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at ratione, deleniti dolorem officiis quia quasi. Dolores doloremque natus impedit nostrum tempora, eos illum. Tempore cum omnis ipsum totam ullam.",
  },
  {
    id: 3,
    title: "Next.js SAAS",
    img: "https://images.pexels.com/photos/14491521/pexels-photo-14491521.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at ratione, deleniti dolorem officiis quia quasi. Dolores doloremque natus impedit nostrum tempora, eos illum. Tempore cum omnis ipsum totam ullam.",
  },
  {
    id: 4,
    title: "Next.js Discord Clone",
    img: "https://images.pexels.com/photos/15086124/pexels-photo-15086124/free-photo-of-yellow-leaves-on-tree-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at ratione, deleniti dolorem officiis quia quasi. Dolores doloremque natus impedit nostrum tempora, eos illum. Tempore cum omnis ipsum totam ullam.",
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
            <button>See Demo</button>
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
