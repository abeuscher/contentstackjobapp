import React from "react"
import PropTypes from "prop-types"
import NotificationBar from "../notification-bar/notification-bar"
import Header from "../header/header.js"
import Footer from "../footer/footer.js"

import "normalize.css"
import "./layout.scss"


const Layout = ({ children }) => {
  return (
    <>
      <NotificationBar/>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
