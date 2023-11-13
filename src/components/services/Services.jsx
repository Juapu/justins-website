import "./services.scss"
import {motion} from "framer-motion"
const variants ={
    initial:{
        x:-500,
        y: 100,
        opacity: 0
    },
    animate:{
        x: 0,
        opacity:1,
        y: 0,
        transition:{
            duration: 1,
            staggerChildren: 0.1
        }
    }
}
const Services = () => {
  return (
    <motion.div className = "services" variants={variants} initial = "initial" whileInView="animate">

        <motion.div className = "textContainer" variants={variants}>
            <h2>Services</h2>
            <p>
                Are you looking to increase your online presence? 
                Let me help you build a personalized website for a cheap price! 
                A personalized website is a great way to make a lasting first impression, 
                whether you're a business owner aiming to attract customers or an individual seeking 
                employment and looking to impress potential employers. Here is what you can expect from me.
            </p>
        </motion.div>
        <motion.div className = "listContainer" variants={variants}>
            <motion.div className = "box" 
            whileHover={{background:"lightgray", color: "black"}}>
                <h2>Design</h2>
                <p>
                    I will design and develop a weblflow for you website using figma.
                </p>
            </motion.div>
            <motion.div className = "box"
            whileHover={{background:"lightgray", color: "black"}}>
                <h2>Implementation</h2>
                <p>
                    I will build the website using frameworks like next.js and a database like postgreSQL.
                    The website will be hosted on Heroku.
                </p>
            </motion.div>
            <motion.div className = "box"
            whileHover={{background:"lightgray", color: "black"}}>
                <h2>Maintenance</h2>
                <p>
                    I will help you maintain and update the website if you have any changes that you would like to make further down the line.
                </p>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services