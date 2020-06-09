import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main className="main" role="main">
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout
