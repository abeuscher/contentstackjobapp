import React, { Component} from "react"

export default class MarketoForm extends Component {
    constructor(props) {
        this.state = {
            form:{}
        }
    }
    componentDidMount() {
        MktoForms2.loadForm("//app-ab04.marketo.com", "362-RJN-040", this.props.id)
    }
    render() {
        return(<div class="marketo-form-wrapper"></div>)
    }
}