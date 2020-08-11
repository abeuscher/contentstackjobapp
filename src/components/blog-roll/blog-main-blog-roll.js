import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import BlogRoll from "./blog-roll.js"

export default function BlogRollMain() {
  const data = useStaticQuery(graphql`
    query blogRollQuery {
        allCsBlogPost(limit: 10, sort: {fields: date, order: DESC}) {
            edges {
              node {
                id
                title
                url
                date
                image {
                  url
                  title
                }
                author {
                  title
                  uid
                }
                body
                category {
                  title
                }
              }
            }
            totalCount
        }
    }
  `)
  return (
    <BlogRoll posts={data.allCsBlogPost.edges} limit={10} skip={0} numPages={Math.ceil(data.allCsBlogPost.totalCount/10)} currentPage={1}/>
  )
}
