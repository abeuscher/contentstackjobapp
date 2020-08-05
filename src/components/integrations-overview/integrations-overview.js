import React, { Component } from "react"

import "./integrations-overview.scss"

export default class IntegrationsOverview extends Component {
    render() {
        const thumbStyle = this.props.data.thumb ? { "backgroundImage": "url('" + this.props.data.thumb.url + "')" } : {}
        return (
            <section className="integrations-overview">
                <div className="max-width flex">
                    <div className="col-full"><h2>{this.props.data.header}</h2></div>
                    <div className="col-half"><div className="overview-thumb" style={thumbStyle}></div></div>
                    <div className="col-half">
                        <div className="integrations-overview-copy wysiwyg" dangerouslySetInnerHTML={{ __html: this.props.data.copy }}></div>
                    </div>
                </div>
            </section>
        )
    }
}