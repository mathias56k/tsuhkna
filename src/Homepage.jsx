import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Featured from "./Featured"
import FAQ from "./FAQ"
import Footer from "./Footer"

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex items-center justify-center py-10 lg:my-12 xl:hidden bg-[#CFC0AE]"><hr className="border-4 rounded border-[#141414] w-[90%] max-w-[900px]" /></div>
      <About />
      <Featured />
      <FAQ />
      <Footer />
    </>
  )
}

export default Homepage
