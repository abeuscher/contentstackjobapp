import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header.js"
import Footer from "../footer/footer.js"

import "./layout.css"


const Layout = ({ children }) => {
  return (
    <>
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
