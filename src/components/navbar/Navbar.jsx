import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className = "navbar">
        <Sidebar/>
        <div className="wrapper">
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100009022438853&mibextid=LQQJ4d"><img src = "/facebook.png" alt = ""/></a>
                <a href="https://instagram.com/just1n_pau"><img src = "/instagram.png" alt = ""/></a>
                <a href="https://www.linkedin.com/in/justin-pau-b62851199"><img src = "/linekdin.png" alt = ""/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar