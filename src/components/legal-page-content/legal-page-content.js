import React, { Component } from "react"

import "./legal-page-content.scss"

export default class LegalPageContent extends Component {
    render() {
        return (<div className="legal-page-content">
            <div class="max-width">
                <div class="wysiwyg-content" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
            </div>
        </div>)
    }
}