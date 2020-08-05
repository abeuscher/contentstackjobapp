import React, { Component } from "react"

import "./integrations-setup-section.scss"

export default class IntegrationsSetupSection extends Component {
    render() {
        const desktopBg = this.props.data.bg_desktop ? { "backgroundImage": "url('" + this.props.data.bg_desktop.url + "')" } : {}
        const mobileBg = this.props.data.bg_mobile ? { "backgroundImage": "url('" + this.props.data.bg_mobile.url + "')" } : {}
        return (
            <div className="integrations-setup-section" style={desktopBg}>
                <div className="bg-mobile" style={mobileBg}></div>
                <div className="max-width flex">
                    <div className="col-full"><h2>{this.props.data.header}</h2></div>
                    <div className="col-half"><h3>{this.props.data.subhead}</h3></div>
                    <div className="col-half">
                        <div className="copy-setup" dangerouslySetInnerHTML={{ __html: this.props.data.copy }}></div>
                    </div>
                </div>
            </div>
        )
    }
}