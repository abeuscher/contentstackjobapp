import React, { Component } from "react"
import { Controller, Scene } from 'react-scrollmagic';
import { anchorate } from 'anchorate'

import "./sub-nav.scss"

export default class SubNav extends Component {
    componentDidMount() {
        anchorate()
    }
    render() {
        return (
            <Controller>
                <Scene triggerElement={"#sub-nav"} triggerHook={-100} pin classToggle="pinned">
                    <nav className="sub-nav" id="sub-nav">
                        <div className="max-width">
                            <ul>
                                {this.props.links.map((link, idx) => (<li key={"sub-nav-li-" + idx}><a href={link.link_target}>{link.link_label}</a></li>))}
                            </ul>
                        </div>
                    </nav>
                </Scene>
            </Controller>
        )
    }
}