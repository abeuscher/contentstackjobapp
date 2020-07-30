import React, {Component} from "react"

export default class IntegrationsPageHero extends Component {
    render() {
        const desktopBg = this.props.data.header_image ? {"backgroundImage":"url('"+this.props.data.header_image.url+"')"}:{}
        const mobileBg = this.props.data.header_image_mobile ? {"backgroundImage":"url('"+this.props.data.header_image_mobile.url+"')"}:{}
        const logoStyle = this.props.data.image.logo.color_logo ? {"backgroundImage":"url('"+this.props.data.logo.color_logo.url+"')"}:{}
        return(
            <div class="hero-integrations">
                <div className="bg-desktop" style={desktopBg}></div>
                <div className="bg-mobile" style={mobileBg}></div>
                <nav><ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#use-cases">Use Cases</a></li>
                    <li><a href="#setup">Setup</a></li>
                    <li><a href="/integrations">Back to All Integrations</a></li>
                    </ul></nav>
                    <div class="hero-content">
                        <div class="about-logo" style={logoStyle}></div>
                        <p>{this.props.data.copy}</p>
                    </div>
            </div>
        )
    }
}