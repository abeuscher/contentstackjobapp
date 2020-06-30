import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
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
          <img src={data.header.entry.logo} alt='' />
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