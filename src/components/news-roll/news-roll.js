import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import Uniq from "lodash/uniq"

import "./news-roll.scss"

export default function NewsRollSection() {
    const data = useStaticQuery(graphql`
    query NewsArticleQuery {
      allCsHomeCompanyNewsPost {
          edges {
              node {
                title
                date
                news_source
                link
                post
                open_in_a_new_tab
              }
          }        
      }
    }
  `)
    return (
        <div className="news-roll">
            <div className="max-width">
                <NewsArticlesWithNav articles={data.allCsHomeCompanyNewsPost.edges} />
            </div>
        </div>
    )
}

class NewsArticlesWithNav extends Component {
    constructor(props) {
        super(props)
        this.state = this.getYears(this.props.articles)
    }
    getYears = articles => {
        let years = Uniq(articles.map(article => {
            return article.node.date.split("-")[0]
        })).sort((a, b) => { return b - a })
        return {
            allYears: years,
            currentYear: years[0]
        }
    }
    changeYear = e => {
        e.preventDefault();
        this.setState({
            currentYear: e.target.innerHTML
        })
    }

    render() {
        return (
            <div className="news-grid">
                <div className="sub-nav">
                    <ul>
                        {this.state.allYears.map((year, idx) => (<li key={"year-link-" + idx}><button className={year === this.state.currentYear ? "active" : ""} onClick={this.changeYear}>{year}</button></li>))}
                    </ul>
                </div>
                <div className="article-list">
                    {this.props.articles.map((article, idx) => {
                        if (article.node.date.split("-")[0] === this.state.currentYear) {
                            return (<ArticleBlock key={"news-article-" + idx} article={article.node} />)
                        }
                        else {
                            return null
                        }
                    })}
                </div>
            </div>
        )
    }
}
class ArticleBlock extends Component {
    render() {
        return (
            <article className="news-article-summary">
                <h2>{this.props.article.title}</h2>
                <cite>{this.props.article.date + " " + this.props.article.news_source}</cite>
                <div className="post-body" dangerouslySetInnerHTML={{ __html: this.props.article.post }}></div>
                <a href={this.props.article.link} target={this.props.article.open_in_a_new_tab ? "_blank" : "_self"}>Read More</a>
            </article>
        )
    }
}