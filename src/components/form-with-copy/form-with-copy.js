import React, { Component } from "react"

import MarketoForm from "../marketo-embedded-form/marketo-embedded-form"

import "./form-with-copy.scss"

export default class FormWithCopy extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showform: true
        }
    }
    formSubmitted = form => {
        this.setState({
            showForm: false
        })
    }


    render() {
        return (
            <section className="form-with-copy light-section">
                <div class="max-width flex">
                    <div class="col-half">
                        <h2>{this.props.data.left_panel.header}</h2>
                        <p>{this.props.data.left_panel.copy}</p>
                    </div>
                    <div class="col-half">
                        <MarketoForm formId={this.props.data.form_panel.form_id} className={this.props.className} onSuccess={this.formSubmitted} />
                    </div>
                </div>
            </section>
        )
    }
}