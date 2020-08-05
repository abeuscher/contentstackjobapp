import React, { Component } from "react"

import "./integrations-page-hero.scss"

export default class IntegrationsPageHero extends Component {
    render() {
        const desktopBg = this.props.data.header_image ? { "backgroundImage": "url('" + this.props.data.header_image.url + "')" } : {}
        const mobileBg = this.props.data.header_image_mobile ? { "backgroundImage": "url('" + this.props.data.header_image_mobile.url + "')" } : {}
        const logoStyle = this.props.data.logo[0].color_logo_with_text ? { "backgroundImage": "url('" + this.props.data.logo[0].color_logo_with_text.url + "')" } : {}
        return (
            <div className="hero-integrations light-section" style={desktopBg}>
                <div className="bg-mobile" style={mobileBg}></div>
                <div className="max-width">
                    <nav><ul>
                        <li className="active"><a href="#about">About</a></li>
                        <li><a href="#use-cases">Use Cases</a></li>
                        <li><a href="#setup">Setup</a></li>
                        <li><a href="/integrations">Back to All Integrations</a></li>
                    </ul></nav>
                    <div className="hero-content">
                        <div className="about-logo" style={logoStyle}></div>
                        <p>{this.props.data.copy}</p>
                    </div>
                </div>
            </div>
        )
    }
}