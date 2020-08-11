/*

  Blog Main Page Layout

*/


import React from "react"

import Layout from "../components/layout/layout.js"

import BlogMainMeta from "../components/template-meta-blocks/blog-main-meta"
import BlogMainHero from "../components/hero-inner/blog-main-hero"
import BlogRoll from "../components/blog-roll/blog-main-blog-roll"

const BlogMainPage = () => (
  <Layout>
    <BlogMainMeta/>
    <BlogMainHero/>
    <BlogRoll/>
  </Layout>
)


export default BlogMainPage
