import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import "./app.scss";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import Contact from "./components/contact/Contact";
import Info from "./components/info/Info";

function App() {

    const [menuOpen,setMenuOpen] = useState(false)
    return (
      
      <div className="app">
       <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu  menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
       
       <div className="sections">
         <Portfolio />
         <About />
         <Info />
         <Contact />

       </div>
      </div>
    );
  }
  export default App;