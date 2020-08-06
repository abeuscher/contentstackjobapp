import React, { Component } from "react"

import "./features-icon-section.scss"

export default class FeaturesIconSection extends Component {
    render() {
        return (
            <div className={"features-icon-section " + this.props.className}>
                <div className="max-width">
                    {this.props.header ? <h2>{this.props.header}</h2> : ""}
                    {this.props.copy ? <p>{this.props.copy}</p> : ""}
                    <div className="buckets">
                        {this.props.buckets.map((bucket, idx) => {
                            return (
                                <Bucket
                                    key={"features-optimization-bucket-" + idx}
                                    className={"up-" + this.props.buckets.length}
                                    header={bucket.header} copy={bucket.copy}
                                    icon={bucket.icon} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
class Bucket extends Component {
    render() {
        let iconStyle = this.props.icon ? { "backgroundImage": "url('" + this.props.icon.url + "')" } : {}
        return (
            <div className={"bucket " + this.props.className}>
                <div className="inner">
                    <div className="icon" style={iconStyle}></div>
                    <div className="text">
                        {this.props.header ? <h3>{this.props.header}</h3> : ""}
                        {this.props.copy ? <p>{this.props.copy}</p> : ""}
                    </div>
                </div>
            </div>
        )
    }
}