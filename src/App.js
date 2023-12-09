import Navbar from "./componets/NavBar/navbar";
import Intro from "./componets/Intro/intro";
import Skills from "./componets/Skills/skills";
import Works from "./componets/Works/works";
import Contact from "./componets/Contact/contact";
import Footer from "./componets/Footer/footer";



function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Skills/>
       <Works/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
