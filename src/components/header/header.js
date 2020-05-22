import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"


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
    <header>
      <div className="logo">
        <img src={data.homepage.acf.top_nav.logo} alt='' />
      </div>
      <nav>
        <ul>
          {data.homepage.acf.top_nav.menu_items.map(item => (
            <li>
              <Link to={item.target} className={item.class}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}