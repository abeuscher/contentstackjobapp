import React, { Component } from "react"

import "./integrations-bottom-section.scss"

export default class IntegrationsBottomSection extends Component {
    render() {
        const bgStyle = this.props.data.bg_image ? { "backgroundImage": "url('" + this.props.data.bg_image.url + "')" } : {}
        return (
            <div className="integrations-bottom">
                <div className="max-width">
                    <div className="bg-thumb" style={bgStyle}></div>
                    <h2>{this.props.data.header}</h2>
                    <p>{this.props.data.copy}</p>
                </div>
            </div>
        )
    }
}