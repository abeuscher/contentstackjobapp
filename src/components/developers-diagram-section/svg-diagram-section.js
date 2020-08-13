import React, { Component } from "react"

import "./svg-diagram-section.scss"

export default class SvgDiagram extends Component {
    render() {
        return (
            <div className="diagram-section max-width">
                <h2 className="small-header">{this.props.data.header}</h2>
                <p>{this.props.data.copy}</p>
                <div className="svg-diagram" dangerouslySetInnerHTML={{ __html: this.props.data.diagram_markup }}></div>
            </div>
        )
    }
}