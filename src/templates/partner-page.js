/*

  Partner Page Layout

*/
import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/template-meta-blocks/seo"
import PartnerPagecontent from "../components/partner-page-content/partner-page-content"

const PartnerPage = ({ pageContext }) => {

  return (
    <Layout>
      <SEO pageMeta={pageContext.metadata} url={pageContext.url} />
      <PartnerPagecontent previewData={pageContext.find_partners_preview_section} companyData={pageContext.company_section} contactData={pageContext.contact_section}/>
    </Layout>
  )
}

export default PartnerPage