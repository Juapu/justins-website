import "./app.scss"
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id = "Homepage">
      <Navbar/>
      <Home/>
    </section>
    <Projects/>
    <section id = "Services">
      <Services/>
    </section>
    <section id = "Contact">
      <Contact/>
    </section>
    </div>
};

export default App;
