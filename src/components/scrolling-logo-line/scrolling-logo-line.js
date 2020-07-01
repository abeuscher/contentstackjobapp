import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Flickity from "react-flickity-component"

import "./scrolling-logo-line.scss"




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
    const flickityOptions = {
        wrapAround: true,
        pageDots: false,
        autoPlay: 1500
    }
    return (
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
        >
            {data.csHomepage.logo_garden.logos.map((logo, idx) => {
                if (logo.black_and_white_logo) {
                    return (
                        <div key={"logo-thumb-"+idx} className="thumb" style={{ "backgroundImage": "url('" + logo.black_and_white_logo.url + "')" }} title={logo.title}></div>
                    )
                }
                return null
            })}
        </Flickity>
    )
}