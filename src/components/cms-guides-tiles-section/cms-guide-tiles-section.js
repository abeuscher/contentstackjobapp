import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./cms-guides-tile-section.scss"

export default function CmsGuidesMainTiles() {
  const data = useStaticQuery(graphql`
    query cmsGuidesMainTilesQuery {
        allCsEvergreenDetailPages {
            edges {
              node {
                title
                url
                tile_data {
                  cta_text
                  short_description
                  thumb {
                    url
                  }
                }
            }
        }
    }
}
  `)

  return (
    <div className="blog-roll">
      <div class="max-width">
        {data.allCsEvergreenDetailPages.edges.map((post, idx) => {
          return (
            <a key={"cms-guide-" + idx} href={post.node.url}>{post.node.title}</a>
          )
        })}
      </div>
    </div>
  )
}
