import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import BigHero from "./big-hero"

export default function CustomerSuccessHero() {
  const data = useStaticQuery(graphql`
    query CustomerSuccessHeroQuery {
      csCustomerSuccess {
        hero {
            page_title
            header
            copy
            bg_image {
                url
            }
            primary_cta {
                text
                link
                classname
            }
        }      
      }
    }
  `)

  return (
    <BigHero data={data.csCustomerSuccess.hero} />
  )
}
