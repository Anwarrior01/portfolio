import { useEffect } from "react"
import Header from "./components/1-header/Header"
import Hero from "./components/2-hero/Hero"
import About from "./components/3-about/About"
import Main from "./components/4-main/Main"
import Contact from "./components/5-contact/Contact"
import Footer from "./components/6-footer/Footer"
import { useState } from "react"

function App() {
  const [mode, setMode] = useState("false");
  const changeMode = (newMode) =>{
    setMode(newMode);
  }
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if (window.scrollY > 300) {
          setScrollBtn(true)
        }else{
          setScrollBtn(false)
        }
          
    })
  },[])
  const [scrollBtn, setScrollBtn] = useState(false);
  return (
    <div id="up" className="website-content">
      <div className="container">
        <Header mode={mode} changeMode={changeMode} />
        <div className="devider"></div>
      </div>
      <div className="hero-app">
        <Hero />
      </div>
      <div className="container">
        {/* <div className="devider"></div> */}
        <About mode={mode} />
        <div className="devider"></div>
        <Main mode={mode} />
        <div className="devider"></div>
        <Contact mode={mode} />
        <div className="devider"></div>
        <Footer />
        <a style={{ opacity: scrollBtn ? 1 : 0, transition: "2s" }} href="#up">
          <button className="icon-keyboard_arrow_up scroll2Top"></button>
        </a>
      </div>
    </div>
  );
}

export default App
