import "./projects.scss";
import {useRef} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const items = [
    {
        id: 1,
        title: "Hotel Booking Web App",
        img:"./hotel_booking.png",
        desc:"A hotel booking website that lets users search for hotel in their city. Users can filter by date range and the price of rooms will be reflected the by the selected range.",
        link: "https://github.com/Juapu/weatherapp",
    },
    {
      id: 2,
      title: "Tennis Ecommerce Web App",
      img:"./ecommerce.png",
      desc:"An ecommerce website for wilson tennis racquets. It's got a slider for the different available racquets, a modal window when someone clicks buy, and a gallery.",
      link: "https://github.com/Juapu/Justinslist"
    },
    {
      id: 3,
      title: "Weather Web App",
      img:"./weather.png",
      desc:"This web application pull data from the open-mateo api to display the weather conditions at your current location. Your timezone, temperature, and associated weather icon will be displayed.",
      link:"https://github.com/Juapu/weatherapp"
    },
    {
      id: 4,
      title: "Gitlet",
      img:"./Gitlet.png",
      desc:"Mini version-control system that mimics some of the basic features of the popular system Git. Gitlet supports saving contents of directories, restoring versions, viewing the history of backups, maintaining branches and merging",
      link: ""
    },
    {
      id: 5,
      title: "Lines of Action",
      img:"./loa.png",
      desc:"A board game invented by Claude Soucie. It is played on a checkerboard with ordinary checkers pieces. The two players take turns, each moving a piece, and possibly capturing an opposing piece. The goal of the game is to get all of one’s pieces into one group of pieces that are connected. Two pieces are connected if they are adjacent horizontally, vertically, or diagonally.",
      link:""
    },
    {
      id: 6,
      title: "Enigma Machine",
      img:"./enigma.png",
      desc:"Created a coded version of and Enigma Machine with rotors, notches, pawls, and a way to decode it. Can create or decode permutations, similar to the one in World War II that was used by Germany.",
      link:""
    },

]
const handleClick = (link) => {
  if (link === "") {
    alert("This was a school project so the code is stored in a private repo");
  } else {
    window.location.href = link;
  }
}
const Single = ({item}) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  return (
    <section id = "Projects">
      <div className = "container">
        <div className="wrapper">
          <div className = "imgContainer" ref={ref}>
            <img src = {item.img} alt = ""/>
          </div>
          <motion.div className = "textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => handleClick(item.link)}>See Code</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
const Projects = () => {

  return (
    <div className = "projects">
      <div className = "title">
        <h1>Featured Works</h1>
      </div>
      {items.map((item) => (
        <Single item = {item} key = {item.id} />
      ))}
    </div>
  )
}

export default Projects