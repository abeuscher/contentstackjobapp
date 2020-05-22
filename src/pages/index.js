import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import Hero from "../components/home-hero/home-hero"
import LogoFlipper from "../components/logo-flipper/logo-flipper"

export const result = graphql`
  query hp {
    homepage {
      acf {
        why_section {
          header,
          buckets {
            header
            content
            class
          },
        },
        silhouette_section {
          left_section_header,
          left_section_copy,
          left_section_cta_text,
          left_section_cta_target,
          right_section_header,
          right_section_copy,
          right_section_cta_text,
          right_section_cta_target 
        },
        animated_tabs {
          more_features_text,
          more_features_target,
          tabs {
            tab_label
            tab_header
            tab_content
            tab_image_static
            tab_image_animated
          },
        },
        delivery_section {
          header,
          icon_line {
            icon
          },
          sections {
            section_label
            section_header
            section_description
          }
        },
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
    <p>{JSON.stringify(data)}</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/blog/">Blog</Link>
  </Layout>
)


export default IndexPage
