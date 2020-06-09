import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ico_me.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header className="header" role="banner">
      <h1><Img fixed={data.file.childImageSharp.fixed} /><span>p_toro</span></h1>
    </header>
  )
}

export default Header
