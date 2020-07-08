import React, { Component } from "react"

import "./features-icon-section.scss"

export default class FeaturesIconSection extends Component {
    render() {
        return (
            <div class="features-icon-section max-width">
                {this.props.header ? <h2 className="centered">{this.props.header}</h2> : ""}
                {this.props.copy ? <p className="centered">{this.props.copy}</p> : ""}
                <div class="buckets">
                    {this.props.buckets.map((bucket, idx) => {
                        return (<Bucket key={"features-optimization-bucket-" + idx} header={bucket.header} copy={bucket.copy} icon={bucket.icon.url} />)
                    })}
                </div>
            </div>
        )
    }
}
class Bucket extends Component {
    render() {
        let iconStyle = { "backgroundImage": "url('" + this.props.icon + "')" }
        return (
            <div class="bucket">
                <div class="inner">
                    <div class="icon" style={iconStyle}></div>
                    {this.props.header ? <h3>{this.props.header}</h3> : ""}
                    {this.props.copy ? <p>{this.props.copy}</p> : ""}
                </div>
            </div>
        )
    }
}