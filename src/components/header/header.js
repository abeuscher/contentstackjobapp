import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./header.scss"

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      homepage {
        acf {
          top_nav {
            logo
            menu_items {
              label
              target
              class
            }
          }
        }
      }
    }
  `)
  return (
    <header className="page-header">
      <div className="logo">
        <img src={data.homepage.acf.top_nav.logo} alt='' />
      </div>
      <nav>
        <ul>
          {data.homepage.acf.top_nav.menu_items.map((item,idx) => (
            <li key={"header-list-item-"+idx}>
              <a key={"header-link-"+idx} href={item.target} className={item.class}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}