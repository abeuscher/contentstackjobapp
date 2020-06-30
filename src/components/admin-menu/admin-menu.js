import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"

import "./admin-menu.scss"

export default function AdminMenu() {
    const data = useStaticQuery(graphql`
    query adminMenuQuery {
        csAdminMenu {
            links {
                text
                link
                classname
            }
        }
    }
  `)
    return (
        <ul className="admin-menu">
            {data.csAdminMenu.links.map((link, idx) => {
                return (<li key={"admin-link-" + idx}>
                    <Link to={link.link} className={link.classname}>{link.text}</Link>
                </li>)
            })}
        </ul>
    )
}