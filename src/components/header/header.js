import { useStaticQuery, graphql, Link } from "gatsby"
import React, { Component } from "react"

import "./header.scss"

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      csHeader {
          logo {
            url
          }
          items {
            title
            link
            dropdown {
              left_text
              left_image {
                url
              }
              left_cta {
                text
                link
                classname
              }
              links {
                text
                link
                classname
              }
            }
          }          
          demo_button {
            text
            link
            classname
          }
        }
    }
  `)
  return (
    <header className="page-header max-width">
      <div className="logo">
        <Link to="/">
          <img src={data.csHeader.logo.url} alt='' />
        </Link>
      </div>
      <button className="mobile-menu-toggle"></button>
      <nav>
        <button className="btn-close"></button>
        <ul>
          {data.csHeader.items.map((item, idx) => (
            <li key={"header-list-item-" + idx}>
              <button>{item.title}</button>
              <DropMenu menuData={item.dropdown[0]} />
            </li>
          ))}
          <li><Link className={"demo-button "+data.csHeader.demo_button.classname} to={data.csHeader.demo_button.link}>{data.csHeader.demo_button.text}</Link></li>
        </ul>
      </nav>
    </header>
  )
}
class DropMenu extends Component {
  render() {
    let leftCol = this.props.menuData.left_text ? <LeftColumn text={this.props.menuData.left_text} image={this.props.menuData.left_image} cta={this.props.menuData.left_cta} /> : null
    return (
      <div className={"dropdown " + (leftCol ? "has-left" : "")}>
        {leftCol}
        <div class="col-right">
          <ul>
            {this.props.menuData.links.map((link, linkIndex) => {
              return (<li key={"drop-" + linkIndex}>
                <Link to={link.link}>{link.text}</Link>
              </li>)
            })}
          </ul>
        </div>
      </div>
    )
  }
}
class LeftColumn extends Component {
  render() {
    if (this.props.text && this.props.image && this.props.cta) {
      return (
        <div className="col-left">
          <div className="thumb" style={{ "backgroundImage": "url('" + this.props.image.url + "')" }}></div>
          <p>{this.props.text}</p>
          <Link to={this.props.cta.link} className={this.props.cta.classname}>
            {this.props.cta.text}
          </Link>
        </div>
      )
    }
    else {
      return null
    }
  }
}