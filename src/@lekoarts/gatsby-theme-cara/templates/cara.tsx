import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Navigation from "../components/navigation"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <Navigation />
    <Parallax pages={4}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2} />
      {/* <About offset={3} factor={1} /> */}
      <Contact offset={3} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
