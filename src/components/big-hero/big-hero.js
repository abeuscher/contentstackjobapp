import React, { Component } from "react"

import "./big-hero.scss"

export default class BigHero extends Component {
    render() {
        let bgDiv = this.props.data.bg_image ? <div className="bg-image" style={{ "backgroundImage": "url('" + this.props.data.bg_image.url + "')" }}></div> : ""
        return (
            <div class="big-hero">
                {bgDiv}
                <div class="max-width">
                    {this.props.data.page_title ? <h2>{this.props.data.page_title}</h2> : ""}
                    {this.props.data.header ? <h1>{this.props.data.header}</h1> : ""}
                    {this.props.data.copy ? <p>{this.props.data.copy}</p> : ""}
                    {this.props.data.primary_cta.text ? <a className={"button " + this.props.data.primary_cta.classname} href={this.props.data.primary_cta.link}>{this.props.data.primary_cta.text}</a> : ""}
                </div>
            </div>
        )
    }
}