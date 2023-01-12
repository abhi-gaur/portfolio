import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import Skills from "./Components/Pages/Skills";
import SocialLinks from "./Components/SocialLinks";


function App() {
  return (
    <div>
      <h1>
        <NavBar/>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>

        <SocialLinks/>
      </h1>
    </div>
  );
}

export default App;
