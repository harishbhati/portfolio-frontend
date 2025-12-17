import About from "./components/About"
import AboutContent from "./components/AboutContent"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import SoftwareApplication from "./components/SoftwareApplication"
import Timeline from "./components/Timeline"

function App() {

  return (
    <>
      <Header />
      <main>
        <About />
        <AboutContent />
        <Timeline />
        <Skills />
        <Projects />
        <SoftwareApplication />
      </main>
      <Footer />
    </>
  )
}

export default App
