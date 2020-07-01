import React, { Component } from "react"

export default class LazyThumb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {}
        }
    }
    componentDidMount() {
        this.setState({
            style: { backgroundImage: "url('" + this.props.src + "')" }
        })
    }
    render() {
        return (<div className={"thumb " + this.props.classname} style={this.state.style}></div>)
    }
}