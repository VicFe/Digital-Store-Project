import React from 'react'
import logoFooter from "../assets/logo-footer.svg"
import logoHeader from "../assets/logo-header.svg"

const Logo = ({isHeader, className }) => {
    const logo = isHeader === "header" ? logoHeader : logoFooter;
  return (
    <img
    width={253}
    height={44}
    alt="Logo da Digital store"
    src={logo}
    className = {className}

    />
  )
}

export default Logo
