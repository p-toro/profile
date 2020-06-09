import React from "react"

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <p className="footer_copy"><small>&copy; {new Date().getFullYear()} p_toro All Rights Reserved.</small></p>
      <ul className="footer_note">
        <li>Gatsby</li>
        <li>Contentful</li>
        <li>Netlify</li>
      </ul>
    </footer>
  )
}

export default Footer
