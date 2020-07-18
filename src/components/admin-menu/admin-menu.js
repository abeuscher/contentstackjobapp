import { useStaticQuery, graphql } from "gatsby"
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
                    <a href={link.link} className={link.classname}>{link.text}</a>
                </li>)
            })}
        </ul>
    )
}