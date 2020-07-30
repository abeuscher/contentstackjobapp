/*

  Blog Post Layout

*/
import React from "react"

import Layout from "../components/layout/layout"
import BlogHero from "../components/blog-hero/blog-hero"
import BlogContent from "../components/blog-content/blog-content"

const Blog = ({ pageContext }) => {
    const HeroData = {
        "header": pageContext.title,
        "header_bg": pageContext.image,
        "author":pageContext.author,
        "date":pageContext.date
    }
    return (
        <Layout>
            <BlogHero data={HeroData} />
            <BlogContent content={pageContext.body} />
        </Layout>
    )
}

export default Blog