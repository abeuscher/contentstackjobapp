import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./blog-roll.scss"

export default function BlogRoll() {
  const data = useStaticQuery(graphql`
    query blogRollQuery {
        allCsBlogPost(limit: 200, sort: {fields: date, order: DESC}) {
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
    <div className="blog-roll">
      <div class="max-width">
        {data.allCsBlogPost.edges.map((post, idx) => {
          return (
            <a key={"blog-entry-" + idx} href={post.node.url}>{post.node.title}</a>
          )
        })}
      </div>
    </div>
  )
}
