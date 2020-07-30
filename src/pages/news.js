/*

  News Main Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"
import NewsMainMeta from "../components/template-meta-blocks/news-main-meta"
import NewsMainHero from "../components/hero-inner/news-main-hero"
import NewsRoll from "../components/news-roll/news-roll"

const NewsMainPage = () => (
  <Layout>
    <NewsMainMeta/>
    <NewsMainHero/>
    <NewsRoll/>
  </Layout>
)


export default NewsMainPage
