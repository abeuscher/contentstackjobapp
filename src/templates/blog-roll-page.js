/*

  Blog Roll Layout

*/
import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/template-meta-blocks/seo"
import BlogRollHeader from "../components/blog-roll-header/blog-roll-header"
import BlogRoll from "../components/blog-roll/blog-roll"


const BlogRollPage = ({ pageContext }) => {
    const pageMeta = {
        "page_title": "Blog Results Page " + pageContext.currentPage,
        "page_description": "Blog Results Page " + pageContext.currentPage
    }
    return (
        <Layout>
            <SEO pageMeta={pageMeta} url={pageContext.url} />
            <BlogRollHeader limit={pageContext.limit} skip={pageContext.skip} numPages={pageContext.numPages} currentPage={pageContext.currentPage} />
            <BlogRoll posts={pageContext.data} limit={pageContext.limit} skip={pageContext.skip} numPages={pageContext.numPages} currentPage={pageContext.currentPage} />
        </Layout>
    )
}

export default BlogRollPage