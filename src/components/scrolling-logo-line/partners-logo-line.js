import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import LogoLine from "./logo-line"


export default function PartnerLogoLine() {
    const data = useStaticQuery(graphql`
    query partnersLogoQuery {
      csPartnersMain {
            logo_garden {
                logos {
                    title
                    black_and_white_logo {
                        url
                    }                        
                }
            }
        }
    }
  `)

    return (
        <LogoLine logos={data.csPartnersMain.logo_garden.logos}/>
    )
}