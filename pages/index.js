import { motion } from "framer-motion";
import MakeEasy from "./homepage/makeEasy";
import ForYou from "./homepage/forYou";
import Interact from "./homepage/interact";

import Aminationmain from "./homepage/animationmain";

import SliderCarousel from "./homepage/carousel";
import Contact from "./homepage/Contact";
const easing = [0.6, -0.05, 0.01, 0.99];

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export default function Home() {
  return (
    <motion.div
    // initial="initial"
    // animate="animate"
    // exit={{ opacity: 0 }}
    // variants={fadeIn}
    >
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <MakeEasy />
        <Interact />
        <ForYou />
        <SliderCarousel />

        <Aminationmain />
        <Contact />
      </div>
    </motion.div>
  );
}
