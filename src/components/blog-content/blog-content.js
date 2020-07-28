import React, { Component } from "react"

import "./blog-content.scss"

export default class BlogContent extends Component {
    render() {
        return (<article class="blog-article">
            <div class="max-width blog-content" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
        </article>)
    }
}