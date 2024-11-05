import './portfolio.scss'
import {props, useRef} from 'react'
import {motion , useScroll , useSpring, useTransform} from 'framer-motion'

const items =[
    {
    id:1,
    title: "Weather Web",
    img: '/Weather.jpg',
    desc:" Developed a responsive weather forecast app with HTML, CSS, and JavaScript, integrating a weather API for real-time updates. Enabled users to search cities for instant weather details, including temperature, wind speed, and humidity. This project highlights skills in front-end design, API integration, and interactive UI development. "},
        {id:2,
        title: "Real State",
        img: "/Real State.jpg",
        desc:"Developed a real estate web platform featuring property listings for buying, selling, and renting. Integrated a real-time chatbot to assist users with inquiries, provide property recommendations, and enhance user interaction. This project showcases skills in full-stack development, real-time data handling, and AI-driven conversational interfaces." 
        }, 
        {
            id:3,
            title: "Password Menia",
            img: "/Password Menia.png",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est aperiam natus dolor et corporis sit fuga quos libero maxime optio blanditiis officiis harum doloremque ipsa, illo eum reiciendis eligendi" 
            }, 
            {
                id:4,
                title: "NetFlix Clone",
                img: "/Netflix.webp",
                desc:"Developed a Netflix clone using Html, CSS and JavaScript for the purpose of the learnig." 
                },
            ];
            const Single= ({ item }) =>{
                const ref = useRef()

                const {scrollYProgress} = useScroll({ target: ref ,
                    //   offset:["start start" , "end start"]
                    }); // optional hai cn be cha

                const y= useTransform(scrollYProgress , [0,1] ,[-500, 500])
                return (<section >
                    <div className="container">
                        <div className="wrapper">
                            <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                        </div>
                        <motion.div className="textContainer" style={{y}} >
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                           <a href="https://github.com/ChandanPandey45/"> <motion.button whileHover={{background:"white" , color:"black"}}> See Demo</motion.button></a>
                            </motion.div>
                            </div>
                        </div>
                    
                </section>
                );
            }
const Portfolio = () => {
const ref= useRef();

const {scrollYProgress} = useScroll({ target: ref , offset:["end end" , "start start"],}); // optional hai cn be changed
const scaleX = useSpring(scrollYProgress, {
    stiffness : 100,
    damping: 30,
})

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1> My Projects</h1>
            <motion.div style={{ scaleX}} className='progressBar'></motion.div >
        </div>
    {items.map (item =>(
        <Single item={item} key={item.id}/>
    ))}
    </div>
  )
}

export default Portfolio