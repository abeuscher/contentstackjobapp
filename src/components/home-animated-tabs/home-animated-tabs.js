import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import LazyThumb from "../helpers/lazy-thumb"
import Flickity from "react-flickity-component"

import "./home-animated-tabs.scss"

export default function HomeAnimatedTabs() {
    const data = useStaticQuery(graphql`
    query AnimatedTabsQuery {
      csHomepage {
        tab_section {
            more_tab_text
            more_tab_link
            tabs {
                header
                copy
                animated_image {
                    url
                }
            }
        }
      }
    }
  `)
    return (
        <div className="home-animated-tabs">
            <Tabs data={data.csHomepage.tab_section} />
        </div>
    )
}
class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carousel: {}
        }
    }
    flickityOptions = {
        wrapAround: true,
        lazyLoad: true,
        pageDots: false,
        prevNextButtons: false,
        autoPlay: false
    }
    tabClick = e => {
        e.preventDefault();
        this.state.carousel.select(e.target.getAttribute("data-idx"))
    }
    render() {
        return (
            <div className="anim-tab-block">
                <div className="max-width">
                    <div className="tabs">
                        {this.props.data.tabs.map((tab, idx) => (
                            <button key={"tab-label-" + idx} onClick={this.tabClick} data-idx={idx}>{tab.header}</button>
                        ))}
                        <a href={this.props.data.more_tab_link}>{this.props.data.more_tab_text}</a>
                    </div>
                    <div className="panels">
                        {typeof window !== 'undefined' ?
                            <Flickity id="animated-tabs" options={this.flickityOptions} flickityRef={c => this.setState({ carousel: c })}>
                                {this.props.data.tabs.map((tab, idx) => (<Panel key={"panel-" + idx} tab={tab} />))}
                            </Flickity>
                            : ""}
                    </div>
                </div>
            </div>
        )
    }
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
                        <LazyThumb classname="animated" src={this.props.tab.animated_image.url} />
                    </div>
                </div>
            </div>
        )
    }
}