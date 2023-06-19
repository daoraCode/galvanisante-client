import { useContext, useEffect, useState } from "react"
// contexts
import { SubscriberContext } from "../../contexts/SubscriberContext"
import { Link } from "react-router-dom"
import { Logo } from "../../assets/Logo"
import "./header.css"

import { useNavigate } from "react-router-dom"

export const Header = () => {
  const { logout, user } = useContext(SubscriberContext)
  const navigate = useNavigate()
  const [userData, setUserData] = useState(user)

  // profile call endpoint to keep user info in browser and still get logged in
  useEffect(() => {
    setUserData(user)
  }, [user])

  const logoutUserSession = async () => {
    await logout()
    navigate("/login")
    setUserData(null)
  }

  return (
    <header className="header">
      <Link className="container-link_home" to="/">
        <Logo height="35px" />
      </Link>
      <div className="auth-ctn">
        {/* CONDITIONAL RENDERING */}
        {userData && (
          <>
            <Link className="auth-link" to="/create-memory">
              <span>Créer un nouveau souvenir</span>
            </Link>
            <Link
              onClick={logoutUserSession}
              className="auth-link"
              to="/logout"
            >
              <span>Se déconnecter</span>
            </Link>
          </>
        )}
        {!userData && (
          <>
            <Link className="auth-link" to="/login">
              <span>Se connecter</span>
            </Link>
            <Link className="auth-link" to="/signup">
              <span>S'inscrire</span>
            </Link>
          </>
        )}
      </div>
    </header>
  )
}
