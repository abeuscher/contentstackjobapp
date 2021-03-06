import React, { Component } from "react"

import "./video-section.scss"

export default class VideoSection extends Component {
    render() {
        if (this.props.video_id) {
            let bgStyle = this.props.bg_image ? {"backgroundImage":"url('"+this.props.bg_image.url+"')"} : {}
            return (
                <div className="video-section" style={bgStyle}>
                    <div className="max-width">
                        {this.props.header ? <h2>{this.props.header}</h2> : ""}
                        <div class="inner">
                            <div className="wrapper-video">
                                <iframe
                                    width="560"
                                    height="315"
                                    src={"https://www.youtube.com/embed/" + this.props.video_id + "?rel=0"}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media;"
                                    allowFullScreen
                                    title="vplayer"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else return null
    }
}