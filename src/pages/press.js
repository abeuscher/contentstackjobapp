/*

  Press Main Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"
import PressMainMeta from "../components/template-meta-blocks/press-main-meta"
import PressMainHero from "../components/hero-inner/press-main-hero"
import PressRoll from "../components/press-roll/press-roll"

const PressMainPage = () => (
  <Layout>
    <PressMainMeta />
    <PressMainHero />
    <PressRoll />
  </Layout>
)


export default PressMainPage
