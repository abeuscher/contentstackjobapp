import React, { Component } from "react"

import "./blog-roll.scss"

export default class BlogRoll extends Component {
  render() {
    const stripHTML = /(<([^>]+)>)/ig
    const pubDate = date => {
      const thisDate = new Date(date)
      const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
      return dateTimeFormat.format(thisDate)
    }
    return (
      <div className="blog-roll">
        <div className="max-width">
          {this.props.posts.map((post, idx) => {
            let thumbStyle = post.node.image ? { "backgroundImage": "url('" + post.node.image.url + "')" } : {}
            return (
              <a className="blog-roll-entry" key={"blog-entry-" + idx} href={post.node.url}>
                <div className="post-thumb" style={thumbStyle}></div>
                <div className="post-info">
                  <h3>{post.node.title}</h3>
                  <cite>
                    <span className="date">{pubDate(post.node.date) + ", "}</span>
                    <span className="author">{post.node.author[0].title}</span>
                  </cite>
                  <div className="excerpt">{post.node.body.replace(stripHTML, "").substring(0, 180) + "..."}
                  <span className="read-link">Read More</span></div>
                </div>
              </a>
            )
          })}
          <Pagination limit={this.props.limit} skip={this.props.skip} numPages={this.props.numPages} currentPage={this.props.currentPage} />
        </div>
      </div>
    )
  }
}

class Pagination extends Component {
  render() {
    return (<nav className="blog-pagination">
      <ul>
        {Array.from({ length: this.props.numPages }).map((_, pageNum) => {
          if (pageNum === 0) {
            return (<li key={"blog-page-link-" + pageNum}><a href={"/blog/"}>{(pageNum + 1)}</a></li>)
          }
          else {
            return (<li key={"blog-page-link-" + pageNum} className={pageNum === this.props.currentPage - 1 ? "active" : ""}><a href={"/blog/entries/" + (pageNum + 1)}>{(pageNum + 1)}</a></li>)
          }

        })}
      </ul>
    </nav>)
  }
}