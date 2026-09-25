import About from "../Component/About/About"
import Contact from "../Component/Contact/Contact"
import Footer from "../Component/Footer"
import Hero from "../Component/Header/Hero"
import Navbar from "../Component/Navbar"
import Project from "../Component/Project/Project"


const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default Home
