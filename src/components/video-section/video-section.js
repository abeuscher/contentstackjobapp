import React, { Component } from "react"

import "./video-section.scss"

export default class VideoSection extends Component {
    render() {
        if (this.props.video_id) {
            return (
                <div class="video-section">
                    <div class="max-width">
                        {this.props.header ? <h2>{this.props.header}</h2> : ""}
                        <div class="player-wrapper">
                            <iframe
                                width="560"
                                height="315"
                                src={"https://www.youtube.com/embed/"+this.props.video_id}
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media;"
                                allowfullscreen
                                title="vplayer"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )
        }
        else return null
    }
}