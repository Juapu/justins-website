import "./home.scss"
import {motion} from "framer-motion";


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },

}

const scrollToProjects = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById('Projects');
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }

const scrollToContact = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById('Contact');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
const Home = () => {
  return (
    <div className = "home">
        <div className="wrapper">
            <motion.div className = "textContainer" variants={textVariants} initial="initial" animate= "animate">
                <motion.h2 variants={textVariants}>Hello, it's me</motion.h2>
                <motion.h1 variants={textVariants}>Justin Pau</motion.h1>
                <motion.div variants={textVariants} className = "about">
                    <motion.p variants={textVariants}>I'm an aspiring software engineer who loves building exciting things! 
                    I studied computer science at UC Berkeley and am now pursuing a masters in software engineering at SJSU.
                    </motion.p>
                </motion.div>
                <motion.div variants={textVariants} className = "buttons">
                    <motion.button onClick={scrollToProjects} variants={textVariants}>Check out my projects</motion.button>
                    <motion.button onClick={scrollToContact} variants={textVariants}>Contact Me</motion.button>
                </motion.div>
            </motion.div>
        </div>
        
        <img src="/public/profile.png" alt="" />
        
    </div>

  )
}

export default Home