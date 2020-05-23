import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import "./home-animated-tabs.scss"

export default function HomeAnimatedTabs() {
    const data = useStaticQuery(graphql`
    query AnimatedTabsQuery {
      homepage {
        acf {
            animated_tabs {
                more_features_text,
                more_features_target,
                tabs {
                  tab_label
                  tab_header
                  tab_content
                  tab_image_static
                  tab_image_animated
                }
            }
        }
      }
    }
  `)
    return (
        <div className="home-animated-tabs">
            <Tabs tabs={data.homepage.acf.animated_tabs.tabs} extraLink={(<a href={data.homepage.acf.animated_tabs.more_features_target}>{data.homepage.acf.animated_tabs.more_features_text}</a>)} />
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
                <div className="tabs">
                    {this.props.tabs.map((tab, idx) => (
                        <label key={"tab-label-" + idx} htmlFor={"anim-panel-" + idx}>{tab.tab_label}</label>
                    ))}
                    {this.props.extraLink}
                </div>
                <div className="panels">
                    {this.props.tabs.map((tab, idx) => (<Panel key={"panel-"+idx} tab={tab} idx={idx} selected={this.state.currentTab===idx} swapTab={this.swapTab} />))}
                </div>
            </div>
        )
    }
}
class Panel extends Component {
    render() {
        return (
            <div className="anim-tab-panel">
                <input type="radio" name="home-anim-tabs" id={"anim-panel-" + this.props.idx} data-idx={this.props.idx} onChange={this.props.swapTab} checked={this.props.selected} />
                <div className="inner">
                    <div className="panel-text">
                        <h2>{this.props.tab.tab_header}</h2>
                        <p>{this.props.tab.tab_content}</p>
                    </div>
                    <div className="panel-image">
                        <div className="static" style={{ backgroundImage: "url('" + this.props.tab.tab_image_static + "')" }}></div>
                        <div className="animated" style={{ backgroundImage: "url('" + this.props.tab.tab_image_animated + "')" }}></div>
                    </div>
                </div>
            </div>
        )
    }
}