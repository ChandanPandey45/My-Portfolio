import { useRef } from 'react';
import './services.scss'
import {animate, color, motion , inView, useInView} from 'framer-motion';
import { use } from 'framer-motion/client';

const Variants ={
    initial: {
        x:-500,
        y: 100,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
            straggerChildren: 0.1,
        }
    },
}
 
const Services = () => {
    const ref = useRef()

    const isInView = useInView(ref, {margin : '-100px'})
  return (
    <motion.div className='services' variants={Variants} initial="initial" 
    // animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={ "animate"}
    >
        <motion.div className="textContainer" variants={Variants}>
        <p>I focus on helping your brand grow <br />
         and move forwards</p>
         <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={Variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1> <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1> <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business </h1>
                <motion.button whileHover={{background:"white", color:"black"}}> WHAT WE DO ?</motion.button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={Variants}>
            <motion.div className="box" whileHover={{background : "lightgray", color: "black" }}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nulla harum rem adipisci, iste veniam aliquid laboriosam? Minima omnis aliquid optio, qui debitis repudiandae architecto! Eveniet repellat error esse fugiat!</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background : "lightgray", color: "black" }}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nulla harum rem adipisci, iste veniam aliquid laboriosam? Minima omnis aliquid optio, qui debitis repudiandae architecto! Eveniet repellat error esse fugiat!</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background : "lightgray", color: "black" }}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nulla harum rem adipisci, iste veniam aliquid laboriosam? Minima omnis aliquid optio, qui debitis repudiandae architecto! Eveniet repellat error esse fugiat!</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background : "lightgray", color: "black" }}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nulla harum rem adipisci, iste veniam aliquid laboriosam? Minima omnis aliquid optio, qui debitis repudiandae architecto! Eveniet repellat error esse fugiat!</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
        </motion.div>
  )
}

export default Services