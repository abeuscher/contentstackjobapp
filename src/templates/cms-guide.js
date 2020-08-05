/*

  CMS Guide Layout

*/
import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/template-meta-blocks/seo"
import HeroInner from "../components/hero-inner/hero-inner"
import CmsGuideContent from "../components/cms-guide-content/cms-guide-content"

const CmsGuide = ({ pageContext }) => {
    const heroObj = {
        header: pageContext.banner_section.title,
        copy: pageContext.banner_section.desc,
        header_bg: pageContext.banner_section.background_image,
    }
    return (
        <Layout>
            <SEO pageMeta={pageContext.metadata} url={pageContext.url} />
            <HeroInner data={heroObj} />
            <CmsGuideContent content={pageContext.content} />
        </Layout>
    )
}

export default CmsGuide