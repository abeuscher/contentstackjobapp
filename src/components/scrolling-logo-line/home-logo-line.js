import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import LogoLine from "./logo-line"

export default function Header() {
    const data = useStaticQuery(graphql`
    query homeLogoQuery {
      csHomepage {
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
        <LogoLine logos={data.csHomepage.logo_garden.logos}/>
    )
}