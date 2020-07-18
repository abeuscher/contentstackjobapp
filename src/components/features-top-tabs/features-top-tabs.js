import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"

import "./features-top-tabs.scss"

export default function FeaturesTopTabs() {
    const data = useStaticQuery(graphql`
    query FeatureTabQuery {
      csFeaturesMain {
        collaboration_section {
            header
            copy
            feature_list {
                tab_label
                copy
                thumb {
                    url
                }
            }
        }
      }
    }
  `)


    return (
        <div className="features-section collaboration max-width">
            <h2>{data.csFeaturesMain.collaboration_section.header}</h2>
            <p>{data.csFeaturesMain.collaboration_section.copy}</p>
            <DesktopTabs features={data.csFeaturesMain.collaboration_section.feature_list} />
            <MobileTabs features={data.csFeaturesMain.collaboration_section.feature_list} />
        </div>
    )
}
class DesktopTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            lastSlide: 0,
            clickedSlide: 0
        }
    }

    showTab = e => {
        e.preventDefault();
        this.setState({
            lastSlide: e.target.getAttribute("data-slide-idx"),
            currentSlide: e.target.getAttribute("data-slide-idx"),
            clickedSlide: e.target.getAttribute("data-slide-idx")
        })

    }
    hoverOnTab = e => {
        e.preventDefault();
        this.setState({
            lastSlide: this.state.currentSlide,
            currentSlide: e.target.getAttribute("data-slide-idx")
        })
    }
    hoverOffTab = e => {
        e.preventDefault();
        this.setState({
            lastSlide: this.state.lastSlide,
            currentSlide: this.state.clickedSlide
        })
    }

    render() {
        const thumbStyle = { "backgroundImage": "url('" + this.props.features[this.state.currentSlide].thumb.url + "')" }
        return (
            <div className="features-top-tabs desktop">
                <div className="feature-tabs">
                    {this.props.features.map((feature, idx) => {
                        return (<button
                            key={"feature-top-tab-=" + idx}
                            onClick={this.showTab} onMouseEnter={this.hoverOnTab}
                            onMouseLeave={this.hoverOffTab}
                            className={idx === parseInt(this.state.currentSlide) ? "active" : ""}
                            data-slide-idx={idx}>{feature.tab_label}</button>)
                    })}
                </div>
                <div className="view-pane">
                    <div className="thumb" style={thumbStyle}></div>
                    <div className="copy">
                        <h2>{this.props.features[this.state.currentSlide].tab_label}</h2>
                        <p>{this.props.features[this.state.currentSlide].copy}</p></div>
                </div>
            </div>
        )
    }
}
class MobileTabs extends Component {
    render() {
        return (
            <div className="features-top-tabs mobile">
                {this.props.features.map((feature, idx) => {
                    return (<section key={"feature-top-tab-mobile-=" + idx}><h3>{feature.tab_label}</h3><img src={feature.thumb.url} alt={feature.tab_label} /><p>{feature.copy}</p></section>)
                })}
            </div>
        )
    }
}