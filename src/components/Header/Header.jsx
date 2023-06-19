import React from "react"
import { Link } from "react-router-dom"
import { Logo } from "../../assets/Logo"
import "./header.css"

export const Header = () => {
  return (
    <header className="header">
      <Link className="container-link_home" to="/">
        <Logo height="35px" />
      </Link>
      <div className="auth-ctn">
        <Link className="auth-link" to="/login">
          <span>Se connecter</span>
        </Link>
        <Link className="auth-link" to="/signup">
          S'inscrire
        </Link>
      </div>
    </header>
  )
}
