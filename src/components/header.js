import React from "react"
import Img from "../images/ico_me.png"

const Header = () => {
  return (
    <header className="header" role="banner">
      <h1><img src={Img} alt="ピートロのアイコン" /><span>p_toro</span></h1>
    </header>
  )
}

export default Header
