import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
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
            <Tabs tabs={data.csHomepage.tab_section.tabs} extraLink={(<a href={data.csHomepage.tab_section.more_tab_link}>{data.csHomepage.tab_section.more_tab_text}</a>)} />
        </div>
    )
}
class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 0
        }
    }
    swapTab = e => {
        this.setState({ currentTab: parseInt(e.target.getAttribute("data-idx")) })
    }
    render() {
        return (
            <div className="anim-tab-block">
                <div className="max-width">
                    <div className="tabs">
                        {this.props.tabs.map((tab, idx) => (
                            <label className={idx===this.state.currentTab?"active":""} key={"tab-label-" + idx} htmlFor={"anim-panel-" + idx}>{tab.header}</label>
                        ))}
                        {this.props.extraLink}
                    </div>
                    <div className="panels">
                        {this.props.tabs.map((tab, idx) => (<Panel key={"panel-" + idx} tab={tab} idx={idx} selected={this.state.currentTab === idx} swapTab={this.swapTab} />))}
                    </div>
                </div>
            </div>
        )
    }
}
class Panel extends Component {
    render() {
        let bgStyle = this.props.selected ? { backgroundImage: "url('" + this.props.tab.animated_image.url + "')" } : {}
        return (
            <div className="anim-tab-panel">
                <input type="radio" name="home-anim-tabs" id={"anim-panel-" + this.props.idx} data-idx={this.props.idx} onChange={this.props.swapTab} checked={this.props.selected} />
                <div className="inner">
                    <div className="panel-text">
                        <h2>{this.props.tab.header}</h2>
                        <p>{this.props.tab.copy}</p>
                    </div>
                    <div className="panel-image">
                        <div className="animated" style={bgStyle}></div>
                    </div>
                </div>
            </div>
        )
    }
}