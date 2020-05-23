import { useStaticQuery, graphql, Link } from "gatsby"
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
    <header className="page-header max-width">
      <div className="logo">
        <Link to="/">
          <img src={data.homepage.acf.top_nav.logo} alt='' />
        </Link>
      </div>
      <nav>
        <ul>
          {data.homepage.acf.top_nav.menu_items.map((item, idx) => (
            <li key={"header-list-item-" + idx}>
              <Link key={"header-link-" + idx} to={item.target} className={item.class}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}