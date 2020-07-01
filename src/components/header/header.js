import { useStaticQuery, graphql, Link } from "gatsby"
import React, { Component } from "react"
import AdminMenu from "../admin-menu/admin-menu"

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
    <header className="page-header">
      <div className="logo">
        <Link to="/">
          <img src={data.csHeader.logo.url} alt='' />
        </Link>
      </div>
      <MainMenu data={data.csHeader} />
    </header>
  )
}
class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "menu": "closed"
    }
  }
  toggleMenu = e => {
    e.preventDefault();
    document.body.classList.toggle("menu-open")
    this.setState({ "menu": this.state.menu === "closed" ? "is-active" : "closed" })
  }
  render() {
    return (
      <div className="nav-box">
        <button id="menu-toggle" className={"mobile-menu-toggle " + this.state.menu} onClick={this.toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <nav>
          <AdminMenu />
          <ul>
            {this.props.data.items.map((item, idx) => (
              <li key={"header-list-item-" + idx}>
                <button>{item.title}</button>
                <DropMenu menuData={item.dropdown[0]} />
              </li>
            ))}
            <li><Link className={"demo-button " + this.props.data.demo_button.classname} to={this.props.data.demo_button.link}>{this.props.data.demo_button.text}</Link></li>
          </ul>    
        </nav>
      </div>)
  }
}

class DropMenu extends Component {
  render() {
    let leftCol = this.props.menuData.left_text ? <LeftColumn text={this.props.menuData.left_text} image={this.props.menuData.left_image} cta={this.props.menuData.left_cta} /> : null
    return (
      <div className={"dropdown " + (leftCol ? "has-left" : "")}>
        {leftCol}
        <div className="col-right">
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
}