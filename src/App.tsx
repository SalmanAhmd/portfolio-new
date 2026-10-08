import Nav from './components/Nav'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import CaseStudy from './components/CaseStudy'
import Work from './components/Work'
import Journey from './components/Journey'
import Experience from './components/Experience'
import Stack from './components/Stack'
import Method from './components/Method'
import Focus from './components/Focus'
import Notes from './components/Notes'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Philosophy />
        <CaseStudy />
        <Work />
        <Journey />
        <Experience />
        <Stack />
        <Method />
        <Focus />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
