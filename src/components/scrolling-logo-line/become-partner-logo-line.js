import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import LogoLine from "./logo-line"


export default function PartnerLogoLine() {
    const data = useStaticQuery(graphql`
    query BecomePartnerLogoQuery {
      csBecomeAPartner {
            logo_garden {
                header
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
        <section class="become-partner-logo-garden">
            <div class="max-width">
                <h2>{data.csBecomeAPartner.logo_garden.header}</h2>
            </div>
            <LogoLine logos={data.csBecomeAPartner.logo_garden.logos}/>
        </section>
        
    )
}