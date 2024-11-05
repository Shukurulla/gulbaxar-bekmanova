import BlogSection from "../components/BlogSection"
import Hero from "../components/Hero"
import MySuccesses from "../components/MySuccesses"
import Docs from "./Docs"

const Home = () => {
  return (
    <>
        <Hero />
        <Docs />
        <BlogSection />
        <MySuccesses />
    </>
  )
}

export default Home