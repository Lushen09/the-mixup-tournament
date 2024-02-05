import Hero from "../components/Hero"
import Intro from "../components/Intro"
import About from "../components/About"
import Gallery from "../components/Gallery"
import Event from "../components/Event"
import Registration from "../components/Registration"
import Footer from "../components/Footer"
import FAQ from "../components/FAQ"
import Viewing from "../components/Viewing"

const Home = () => {
   return (
      <>
         <Hero />
         <Intro />
         <About />
         <Gallery />
         <Event />
         <Registration />
         <Viewing />
         <FAQ />
         <Footer />
      </>
   )
}

export default Home