import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import AdminMenu from "../admin-menu/admin-menu"

import "./notification-bar.scss"

export default function NotificationBar() {
    const data = useStaticQuery(graphql`
    query ctaQuery {
        csNotificationBar {
            title
            cta {
                text
                link
                classname
            }
        }
    }
  `)
    return (
        <div className="notification-bar">
            <div className="cta">{data.csNotificationBar.title}</div>
            <Link to={data.csNotificationBar.cta.link} className={data.csNotificationBar.cta.classname}>{data.csNotificationBar.cta.text}
                <span className="arrow"></span>
            </Link>
            <AdminMenu />
        </div>
    )
}