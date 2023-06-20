import { useContext, useEffect, useState } from "react"
// contexts
import { UserContext } from "../../contexts/UserContext"
import { Link } from "react-router-dom"
import { Logo } from "../../assets/Logo"
import "./header.css"

import { useNavigate } from "react-router-dom"

export const Header = () => {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  // endpoint that keep user info in browser and logged in session
  useEffect(() => {
    const fetchData = async () => {
      const data = fetch(`${import.meta.env.VITE_BACKEND_API}/api/user/me`, {
        credentials: "include",
      }).then((response) => {
        response.json().then((userData) => setUser(userData))
        console.log("21", response)
      })
    }
    fetchData()
  }, [])

  function logoutUser() {
    fetch(`${import.meta.env.VITE_BACKEND_API}/api/user/auth/logout`, {
      credentials: "include",
      method: "post",
    })
    setUser(null)
    console.log("34: logged out succesfull")
  }

  // console.log(userData)
  const username = user?.username
  console.log(username)
  console.log(user.username)

  return (
    <header className="header">
      <Link className="container-link_home" to="/">
        <Logo height="35px" />
      </Link>
      {username && (
        <>
          <div className="auth-ctn">
            <Link className="auth-link" to="/create-memory">
              <span>Créer un nouveau souvenir</span>
            </Link>
            <Link onClick={logoutUser} className="auth-link">
              <span>Se déconnecter</span>
            </Link>
          </div>
        </>
      )}
      {!username && (
        <>
          <div className="auth-ctn">
            <Link className="auth-link" to="/login">
              <span>Se connecter</span>
            </Link>
            <Link className="auth-link" to="/signup">
              <span>S'inscrire</span>
            </Link>
          </div>
        </>
      )}
    </header>
  )
}
