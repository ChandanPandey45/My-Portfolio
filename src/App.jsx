import './App.scss'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/hero'
import Parallax from './Componets/Parallax/Parallax'
import Services from './Componets/Services/Services'
import Portfolio from './Componets/portfolio/Portfolio'
import Contact from './Componets/contact/Contact'
import About from './Componets/Aboutme/About'
import Cursor from './Componets/cursor/Cursor'


function App() {

  return (
    <div>
      <Cursor />
     <section id='Homepage'> <Navbar></Navbar>
     <Hero /> 
     </section>
    
     {/* <section id='Services'> <Parallax type="services"/> </section> */}
     {/* <section> <Services/> </section> */}
     <section id='Portfolio'> <Parallax type= "portfolio"/> </section>
    <Portfolio></Portfolio>
    <section id='Services'>
     <About />
     </section>
     <section id='Contact'> <Contact /> </section>
     </div>
  )
}

export default App
