import "./contact.scss";
import {motion} from "framer-motion";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const variants = {
    initial:{
        y:500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transitionn: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    }
}
const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_14rcyzk', 'template_kaqjyg7', formRef.current, 'jJKZrlYKY4qtojoYW')
      .then((result) => {
          setSuccess(true);
      }, (error) => {
          setError(false);
      });
  };
  return (
    <motion.div className = "contact" variants = {variants} initial="initial" whileInView = "animate">
        <motion.div className = "textContainer" variants = {variants}>
            <motion.h1 variants = {variants}>Contact</motion.h1>
        </motion.div>
        <div className = "formContainer">
            <form ref = {formRef}
            onSubmit={sendEmail}>
                <input type = "text" required placeholder = "Your Name..." name = "name"/>
                <input type = "email" required placeholder = "Your Email Address..." name = "email"/>
                <textarea rows={8} placeholder = "Your Message..." name = "message"/>
                <button>Submit</button>
                {error && "Error"}
                {success && "Success"}
            </form>
        </div>
    </motion.div>
  )
}

export default Contact