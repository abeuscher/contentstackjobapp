import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"

import "./cms-guide-menu.scss"

export default function CmsGuideMenu() {
    const data = useStaticQuery(graphql`
    query CmsGuideMenuQuery {
      csCmsGuideMenu {
        nav_sections {
            header
            links {
                title
                url
            }
        }
      }
    }
  `)
    return (
        <CmsNav data={data.csCmsGuideMenu} />
    )
}
class CmsNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSection:null
        }
    }
    changeSection = e => {
        e.preventDefault()
        this.setState({
            currentSection:parseInt(e.target.getAttribute("data-idx"))
        })
    }
    render() {
        return (
            <nav className="cms-guide-menu">
                {this.props.data.nav_sections.map((section, idx) => (
                    <div className={"section " + (idx === this.state.currentSection ? "active" : "")} key={"nev-section-" + idx}>
                        <button onClick={this.changeSection} data-idx={idx}>{section.header}</button>
                        <div className="links">
                            {section.links.map((link, link_idx) => (
                                <a key={"left-nav-link" + idx + "-" + link_idx} href={link.url}>{link.title}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>
        )
    }
}