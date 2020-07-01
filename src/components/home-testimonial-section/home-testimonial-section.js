import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import "./home-testimonial-section.scss"

export default function HomeTestimonialSection() {
    const data = useStaticQuery(graphql`
    query TestimonialQuery {
      csHomepage {
        quote_carousel {
            left_panel {
                header
                copy
                cta {
                    text
                    link
                    classname
                }
            }
            slides {
                logo {
                    black_and_white_logo {
                        url
                    }
                }
                quote
                speaker_name
                speaker_job_title
                company_name
            }
        }
      }
    }
  `)
    return (
        <div className="home-animated-tabs testimonial">
            <Tabs
                tabs={data.csHomepage.quote_carousel.slides}
                leftPanel={data.csHomepage.quote_carousel.left_panel} />
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
            <div className="testimonial-tab-block">
                <div className="max-width">
                    <div className="panels">
                        <div className="left-pane">
                            <h2>{this.props.leftPanel.header}</h2>
                            <p>{this.props.leftPanel.copy}</p>
                            <a className={this.props.leftPanel.cta.classname} href={this.props.leftPanel.cta.link}>{this.props.leftPanel.cta.text}</a>
                        </div>
                        <div className="right-pane">
                            {this.props.tabs.map((tab, idx) => (<Panel key={"panel-" + idx} tab={tab} idx={idx} selected={this.state.currentTab === idx} swapTab={this.swapTab} />))}
                        </div>
                    </div>
                    <div className="tabs">
                        {this.props.tabs.map((tab, idx) => (
                            <label className={idx === parseInt(this.state.currentTab) ? "active" : ""} key={"test-label-" + idx} htmlFor={"test-panel-" + idx} style={{ backgroundImage: "url('" + tab.logo[0].black_and_white_logo.url + "'" }}></label>
                        ))}
                        {this.props.extraLink}
                    </div>
                </div>
            </div>
        )
    }
}
class Panel extends Component {
    render() {
        return (
            <div className="testimonial-tab-panel">
                <input type="radio" name="home-test-tabs" id={"test-panel-" + this.props.idx} data-idx={this.props.idx} onChange={this.props.swapTab} checked={this.props.selected} />
                <div className="inner">
                    <p>{this.props.tab.quote}</p>
                    <cite>{this.props.tab.speaker}{this.props.tab.company_name}</cite>
                </div>
            </div>
        )
    }
}