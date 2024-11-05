import './about.scss';
import { animate, motion } from 'framer-motion';
import { useState } from 'react';
import { FaHtml5, FaGraduationCap, FaTrophy } from 'react-icons/fa';


const Variants ={
  initial: {
    x:-500,
      opacity: 0,
      y:100,
  },
  animate:{
    x:0,
      opacity: 1,
      y:0,
      transition:{
          duration: 1,
          straggerChildren: 0.1,
      }
  },
}

const About = () => {
  // Set initial state to "skills" content
  const [content, setContent] = useState({
    text: "Bachelor's in Computer Science from KIPM College Of Engineering and Technology, Uttar Pradesh.",
    icon: <FaGraduationCap />
  });

  // Define the information for each button
  const data = {
    skills: {
        text: "HTML, CSS, JavaScript, React, Node.js , Mongodb",
        icon: <FaHtml5 />
    },
    education: { 
        text: "Bachelor's in Computer Science from KIPM College Of Engineering and Technology, Uttar Pradesh.",
        icon: <FaGraduationCap />
    },
    achievements: {
        text: "Experience in real-time industry projects, Web Development Intern at Predulive, participation in events such as hackathons and coding competitions.",
        icon: <FaTrophy />
    },
  };

  // Function to update content based on button clicked
  const handleInformation = (infoType) => {
      setContent(data[infoType]);
  };

  return (
    <div className="about" Variants={Variants} initial="initial" animate={animate}>
      <div className="text">
        <h1>About Me</h1>
      </div>
      <div className="wrapper">
        <div className="column-container" >
          {/* Left Column */}
          <div className="textContainer" Variants={Variants}>
            <div className="box">
              <div className="heading"> <h1>Introduction</h1></div>
              <motion.h2 whileHover={{ color: 'rebeccapurple' }}>
                Currently I'm working as a FullStack Developer at Predulive EduTech Foundation.
              </motion.h2>
              <motion.p>
                As a Full Stack Developer Intern at Predulive Edutech Foundation, I optimized website load time by over 40% and developed responsive, user-friendly pages. Collaborating on projects like "Leaders Boli," I enhanced cross-browser compatibility and UI/UX. This experience sharpened my skills in HTML, CSS, JavaScript, and React.
              </motion.p>
              <div className="buttons">
                {/* Skills button is always selected and cannot change the content */}
                <button  onClick={() => handleInformation("skills")}>Skills</button>
                <button className="selected" onClick={() => handleInformation("education")}>Education</button>
                <button onClick={() => handleInformation("achievements")}>Achievements</button>
              </div>
              {/* Display the content based on the selected button */}
              <div className="content">
                {content.icon && <span className="icon">{content.icon}</span>}
                <p>{content.text}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="skillContainer" Variants={Variants}>
            <h2>Skills</h2>
            <div className="skill">
              <div className='iconImage'>
                <img src="/html.png" alt="HTML" />
                <img src="/css.png" alt="CSS" />
                <img src="/react.png" alt="React" />
              </div>
              <div className='iconImage'>
                <img src="/figma.png" alt="Figma" />
                <img src="/node.png" alt="Node.js" />
                <img src="/graphql.png" alt="GraphQL" />
              </div> 
              <div className='iconImage'>
                <img src="/mongodb.png" alt="MongoDB" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
