import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickAccess from './components/QuickAccess'
import Nucleos from './components/Nucleos'
import Ulaca from './components/Ulaca'
import Naturaleza from './components/Naturaleza'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickAccess />
        <Nucleos />
        <Ulaca />
        <Naturaleza />
      </main>
      <Footer />
    </>
  )
}

export default App
