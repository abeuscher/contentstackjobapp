import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import "./home-deliver-section.scss"

export default function HomeDeliver() {
    const data = useStaticQuery(graphql`
    query HomeDeliverQuery {
      homepage {
        acf {
            delivery_section {
                icon_line {
                  icon
                },
                sections {
                  section_label
                  section_header
                  section_description
                }
              }
        }
      }
    }
  `)
    return (<DeliveryFlipper tabs={data.homepage.acf.delivery_section.sections} icons={data.homepage.acf.delivery_section.icon_line} />)
}
class DeliveryFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTabIndex: 0,
            templateHeader: this.props.tabs[0].section_label,
            templateCopy: this.props.tabs[0].section_description,
            formHeader: this.props.tabs[0].section_label,
            formCopy: this.props.tabs[0].section_description
        }
    }
    swapTab = e => {
        e.preventDefault()
        let idx = e.target.getAttribute("data-idx")
        this.setState({
            currentTabIndex: idx,
            templateHeader: this.props.tabs[idx].section_label,
            templateCopy: this.props.tabs[idx].section_description,
            formHeader: this.props.tabs[idx].section_label,
            formCopy: this.props.tabs[idx].section_description
        })
    }
    changeText = e => {
        if (e.target.type === "textarea") {
            this.setState({ formCopy: e.target.value })
        }
        else {
            this.setState({ formHeader: e.target.value })
        }
    }
    publishText = e => {
        e.preventDefault()
        this.setState({
            templateHeader: this.state.formHeader,
            templateCopy: this.state.formCopy
        })
    }
    render() {
        return (
            <div className="home-delivery-section">
                <div class="max-width">
                    <div className="left-pane header">
                        <h2>{this.props.tabs[this.state.currentTabIndex].section_label}</h2>
                    </div>
                    <div className="right-pane header">
                        {this.props.icons.map((icon, idx) => (
                            <img key={"hd-icon-" + idx} src={icon.icon} alt='' />
                        ))}
                    </div>
                    <div className="left-pane">
                        <form>
                            <label>Title
                    <input type="text" value={this.state.formHeader} onChange={this.changeText} />
                            </label>
                            <label> Description
                    <textarea onChange={this.changeText} value={this.state.formCopy}></textarea>
                            </label>
                            <button className="button" onClick={this.publishText}>Publish</button>
                        </form>
                    </div>
                    <div className="right-pane view-pane">
                        <div className="view desktop">
                            <h2>{this.state.templateHeader}</h2>
                            <p>{this.state.templateCopy}</p>
                        </div>
                        <div className="view tablet">
                            <h2>{this.state.templateHeader}</h2>
                            <p>{this.state.templateCopy}</p>
                        </div>
                        <div className="view mobile">
                            <h2>{this.state.templateHeader}</h2>
                            <p>{this.state.templateCopy}</p>
                        </div>
                    </div>
                    <nav>
                        {this.props.tabs.map((tab, idx) => (
                            <button className={idx===parseInt(this.state.currentTabIndex)?"active":""}key={"hd-button-" + idx} onClick={this.swapTab} data-idx={idx}>{tab.section_label}</button>
                        ))}
                    </nav>
                </div>
            </div>
        )
    }
}