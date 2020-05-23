import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import Hero from "../components/home-hero/home-hero"
import LogoFlipper from "../components/logo-flipper/logo-flipper"
import WhySection from "../components/home-why-section/home-why-section"
import SilhouetteSection from "../components/home-silhouette-section/home-silhouette-section"
import HomeAnimatedTabs from "../components/home-animated-tabs/home-animated-tabs"
import HomeDeliverSection from "../components/home-delivery-section/home-deliver-section"

export const result = graphql`
  query hp {
    homepage {
      acf {
        recommended_resources {
          ebook_image,
          ebook_title,
          ebook_description,
          gartner_image,
          gartner_title,
          gartner_category_text,
          ebook_category_text,
          blog_image,
          blog_category_text,
          blog_title,
          blog_description,
          blog_link 
        },
        bottom_cta {
          header,
          top_cta_text,
          top_cta_target,
          bottom_cta_text,
          bottom_cta_target 
        },
        footer {
          logo,
          columns {
            column_header_text
            column_header_target
            links {
              text
              link
              class              
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <LogoFlipper />
    <WhySection/>
    <SilhouetteSection />
    <HomeAnimatedTabs />
    <HomeDeliverSection />
    <p>{JSON.stringify(data)}</p>
  </Layout>
)


export default IndexPage
