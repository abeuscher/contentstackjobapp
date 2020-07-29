import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import "../../common-sass/icons.scss"
import "./footer.scss"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      csFooter {
        logo {
          url
        }
        columns {
          title
          links {
            text
            link
            classname
          }
        }
        social_links {
          text
          link
          classname
        }
        bottom_links {
          text
          link
          classname
        }
      }
    }
  `)
  return (
    <footer className="page-footer">
      <div className="inner max-width">
        <div className="column logo">
          <img src={data.csFooter.logo.url} alt='' />
          <SocialMenu links={data.csFooter.social_links} />
        </div>
        {data.csFooter.columns.map((column, idx) => (
          <Column key={"footer-nav-col-" + idx} columnData={column} />
        ))}
      </div>
      <div className="inner max-width bottom">
        <ul className="bottom-utility-links">
          {data.csFooter.bottom_links.map((link, idx) => (
            <li key={"bottom-util-link-" + idx}>
              <a href={link.link}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
class SocialMenu extends Component {

  render() {
    return (
      <ul className="social-menu">
        {this.props.links.map((link, idx) => (
          <li key={"social-link-" + idx}>
            <a href={link.link} title={link.text}><span className={link.classname}></span></a>
          </li>
        ))}
      </ul>
    )
  }
}

class Column extends Component {
  render() {
    return (
      <div className="column">
        <h2>{this.props.columnData.title}</h2>
        {this.props.columnData.links.map((column, idx) => (
          <a key={"footer-link-" + idx} className={column.class} href={column.link}>{column.text}</a>
        ))}
      </div>
    )
  }
}