import React, {Component} from "react"

import MarketoForm from "../marketo-embedded-form/marketo-embedded-form"

import "./resource-gate-content.scss"

export default class ResourceGateContent extends Component {
    render() {
        const logoStyle = this.props.data.form_section.header_image ? {"backgroundImage":"url('"+this.props.data.form_section.header_image.url+"')"} : {}
        return(
        <div className="resource-gate-content light-section">
            <div className="max-width flex">
                <div className="resource-gate-left col-two-third">
                    <div className="inner">
                        <h2>{this.props.data.page_content.header}</h2>
                        <div className="content" dangerouslySetInnerHTML={{ __html: this.props.data.page_content.copy }}></div>
                    </div>
                </div>
                <div className="resource-gate-left col-third">
                    <div className="inner">
                        <div className="form-header-image" style={logoStyle}></div>
                        <MarketoForm formId={this.props.data.form_section.form_id}/>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}