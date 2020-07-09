import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SubNav from "./sub-nav"

export default function DevSubNav() {
  const data = useStaticQuery(graphql`
    query devSubnavQuery {
      csDevelopersCms {
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
    <SubNav links={data.csDevelopersCms.sub_nav.links}/>
  )
}
