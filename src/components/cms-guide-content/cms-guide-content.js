import React, { Component } from "react"
import CmsGuideMenu from "../cms-guide-menu/cms-guide-menu"

import "./cms-guide-content.scss"

export default class CmsGuideContent extends Component {
    render() {
        return (<article className="cms-guide">
            <div className="max-width flex">
                <div className="left-nav">
                    <CmsGuideMenu />
                </div>
                <div className="content">
                    <div className="cms-guide-content" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
                </div>
            </div>
        </article>)
    }
}