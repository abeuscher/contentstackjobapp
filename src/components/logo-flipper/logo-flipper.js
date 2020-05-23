import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import "./logo-flipper.scss"

export default function LogoFlipper() {
    const data = useStaticQuery(graphql`
    query LogoFlipperQuery {
      homepage {
        acf {
            logo_line {
                logo
                }
        }
      }
    }
  `)
    let thumbPairs = []
    for (let i=0;i<data.homepage.acf.logo_line.length;i=i+2) {
        thumbPairs.push(data.homepage.acf.logo_line.slice(i,i+2))
    }
    return (
        <div className="logo-flipper">
            {thumbPairs.map((pair,idx) => (
                <LogoBlock key={"logo-block-"+idx} logo_one={pair[0].logo} logo_two={pair[1].logo} />
            ))}
        </div>
    )
}

class LogoBlock extends Component {
    render() {
        return (
            <div className="flipper-wrapper">
                <div key="slot-1" className="logo-thumb" style={{ backgroundImage: "url('" + this.props.logo_one + "')" }}></div>
                <div key="slot-2" className="logo-thumb flipped" style={{ backgroundImage: "url('" + this.props.logo_two + "')" }}></div>
            </div>
        )
    }
}