import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import OtherWorks from './components/OtherWorks/OtherWorks'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <OtherWorks />
      </main>
      <Footer />
    </>
  )
}

export default App
