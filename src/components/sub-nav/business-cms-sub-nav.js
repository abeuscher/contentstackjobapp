import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SubNav from "./sub-nav"

export default function BusinessSubNav() {
  const data = useStaticQuery(graphql`
    query dBizSubnavQuery {
      csBusinessCms {
        sub_nav {
            links {
                link_label
                link_target
            }
        }      
      }
    }
  `)

  return (
    <SubNav links={data.csBusinessCms.sub_nav.links}/>
  )
}
