import Header from "./components/1-header/Header"
import Hero from "./components/2-hero/Hero"
import About from "./components/3-about/About"
import Main from "./components/4-main/Main"
import Contact from "./components/5-contact/Contact"
import Footer from "./components/6-footer/Footer"

function App() {

  return (
    <div className="website-content">
      <div className="container">
        <Header />
        <div className="devider"></div>
      </div>
      <div className="hero-app">
        <Hero />
      </div>
      <div className="container">
      {/* <div className="devider"></div> */}
        <About />
        <div className="devider"></div>
        <Main />
        <div className="devider"></div>
        <Contact />
        <div className="devider"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App
