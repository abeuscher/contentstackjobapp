import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import "./home-testimonial-section.scss"

export default function HomeTestimonialSection() {
    const data = useStaticQuery(graphql`
    query TestimonialQuery {
      homepage {
        acf {
            testimonial_section {
                header
                copy
                cta_text
                cta_target
                testimonials {
                    logo
                    quote
                    speaker
                    company_name
                }
              }
        }
      }
    }
  `)
    return (
        <div className="home-animated-tabs testimonial">
            <Tabs
                tabs={data.homepage.acf.testimonial_section.testimonials}
                text={{
                    header: data.homepage.acf.testimonial_section.header,
                    copy: data.homepage.acf.testimonial_section.header,
                    ctaTarget: data.homepage.acf.testimonial_section.cta_target,
                    ctaText: data.homepage.acf.testimonial_section.cta_text
                }} />
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
                <div class="max-width">
                    <div className="panels">
                        <div className="left-pane">
                            <h2>{this.props.text.header}</h2>
                            <p>{this.props.text.copy}</p>
                            <a className="button" href={this.props.text.ctaTarget}>{this.props.text.ctaText}</a>
                        </div>
                        <div className="right-pane">
                            {this.props.tabs.map((tab, idx) => (<Panel key={"panel-" + idx} tab={tab} idx={idx} selected={this.state.currentTab === idx} swapTab={this.swapTab} />))}
                        </div>
                    </div>
                    <div className="tabs">
                        {this.props.tabs.map((tab, idx) => (
                            <label className={idx === parseInt(this.state.currentTab) ? "active" : ""} key={"test-label-" + idx} htmlFor={"test-panel-" + idx} style={{ backgroundImage: "url('" + tab.logo + "'" }}>{tab.tab_label}</label>
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