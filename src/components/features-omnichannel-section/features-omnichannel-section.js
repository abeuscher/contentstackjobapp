import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import LazyThumb from "../helpers/lazy-thumb"
import Flickity from "react-flickity-component"

import "./features-omnichannel-section.scss"

export default function FeaturesOmnichannelSection() {
    const data = useStaticQuery(graphql`
    query FeaturesOmnichannelQuery {
      csFeaturesMain {
        omnichannel_section {
            header
            copy
            tabs {
                header
                copy
                thumb {
                    url
                }
            }
        }
      }
    }
  `)

    let MainCarouselObj = null
    const flickityOptions = {
        wrapAround: true,
        lazyLoad: true,
        pageDots: false,
        prevNextButtons: false,
        autoPlay: false
    }
    const tabClick = e => {
        e.preventDefault();
        MainCarouselObj.select(e.target.getAttribute("data-idx"))
    }
    return (
        <div className="features-section omnichannel">
            <div className="anim-tab-block max-width">
                <h2>{data.csFeaturesMain.omnichannel_section.header}</h2>
                <p>{data.csFeaturesMain.omnichannel_section.copy}</p>
                <div className="tabs">
                    {data.csFeaturesMain.omnichannel_section.tabs.map((tab, idx) => (
                        <button key={"tab-label-" + idx} onClick={tabClick} data-idx={idx}>{tab.header}</button>
                    ))}
                </div>
                <div className="panels">
                    <Flickity id="animated-tabs" options={flickityOptions} flickityRef={c => MainCarouselObj = c}>
                        {data.csFeaturesMain.omnichannel_section.tabs.map((tab, idx) => (<Panel key={"panel-" + idx} tab={tab} />))}
                    </Flickity>
                </div>
            </div>
        </div>
    )
}
class Panel extends Component {
    render() {
        return (
            <div className="anim-tab-panel">
                <div className="inner">
                    <div className="panel-text">
                        <h2>{this.props.tab.header}</h2>
                        <p>{this.props.tab.copy}</p>
                    </div>
                    <div className="panel-image">
                        <LazyThumb classname="animated" src={this.props.tab.thumb.url} />
                    </div>
                </div>
            </div>
        )
    }
}