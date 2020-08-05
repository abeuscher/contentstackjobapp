import React, { Component } from "react"

import "./integrations-use-cases.scss"

export default class IntegrationsUseCases extends Component {
    render() {
        const desktopBg = this.props.data.bg_desktop ? { "backgroundImage": "url('" + this.props.data.bg_desktop.url + "')" } : {}
        const mobileBg = this.props.data.bg_mobile ? { "backgroundImage": "url('" + this.props.data.bg_mobile.url + "')" } : {}
        return (
            <div className="integrations-use-cases" style={desktopBg}>
                <div classNAme="page-anchor" id="use-cases"></div>
                <div className="bg-mobile" style={mobileBg}></div>
                <div className="max-width">
                    <h2>{this.props.data.header}</h2>
                    <h3>{this.props.data.subhead}</h3>
                    <div className="buckets">
                        {this.props.data.buckets.map((bucket, idx) => (
                            <div key={"integrations-use-case-bucket-" + idx} className="bucket">
                                <div className="content">
                                    <h2>{bucket.header}</h2>
                                    <p>{bucket.copy}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}