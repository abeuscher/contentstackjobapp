import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SubNav from "./sub-nav"

export default function FeaturesSubNav() {
  const data = useStaticQuery(graphql`
    query featuresSubnavQuery {
      csFeaturesMain {
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
    <SubNav links={data.csFeaturesMain.sub_nav.links}/>
  )
}
