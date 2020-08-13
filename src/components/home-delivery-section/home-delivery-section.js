import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import "./home-deliver-section.scss"

export default function HomeDeliver() {
    const data = useStaticQuery(graphql`
    query HomeDeliverQuery {
      csHomepage {
        three_screen_section {
            icons {
                url
            }
            tabs {
                header
                copy
            }
            string_try_it
            string_cancel
            string_confirm
            bg_image_selector_title
            background_images {
                url
            }
        }
      }
    }
  `)
    return (<DeliveryFlipper tabs={data.csHomepage.three_screen_section.tabs} icons={data.csHomepage.three_screen_section.icons} />)
}
class DeliveryFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTabIndex: 0,
            templateHeader: this.props.tabs[0].header,
            templateCopy: this.props.tabs[0].copy,
            formHeader: this.props.tabs[0].header,
            formCopy: this.props.tabs[0].copy
        }
    }
    swapTab = e => {
        e.preventDefault()
        let idx = e.target.getAttribute("data-idx")
        this.setState({
            currentTabIndex: idx,
            templateHeader: this.props.tabs[idx].header,
            templateCopy: this.props.tabs[idx].copy,
            formHeader: this.props.tabs[idx].header,
            formCopy: this.props.tabs[idx].copy
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
                <div className="max-width">
                    <div className="left-pane header">
                        <h2 className="small-header">{this.props.tabs[this.state.currentTabIndex].header}</h2>
                    </div>
                    <div className="right-pane header">
                        {this.props.icons.map((icon, idx) => (
                            <img key={"hd-icon-" + idx} src={icon.url} alt='' />
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
                            <button className="button hover-orange" onClick={this.publishText}>Publish</button>
                        </form>
                    </div>
                    <div className="right-pane view-pane">
                        <div className="view desktop">
                            <h2 className="small-header">{this.state.templateHeader}</h2>
                            <p>{this.state.templateCopy}</p>
                        </div>
                        <div className="view tablet">
                            <h2 className="small-header">{this.state.templateHeader}</h2>
                            <p>{this.state.templateCopy}</p>
                        </div>
                        <div className="view mobile">
                            <h2 className="small-header">{this.state.templateHeader}</h2>
                            <p>{this.state.templateCopy}</p>
                        </div>
                    </div>
                    <nav>
                        {this.props.tabs.map((tab, idx) => (
                            <button className={idx===parseInt(this.state.currentTabIndex)?"active":""}key={"hd-button-" + idx} onClick={this.swapTab} data-idx={idx}>{tab.header}</button>
                        ))}
                    </nav>
                </div>
            </div>
        )
    }
}