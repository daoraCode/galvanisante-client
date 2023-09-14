import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Logo } from "../../assets/Logo"
import { UserContext } from "../../contexts/UserContext"
import "./header.css"

export const Header = () => {
  const { user, setUser, logOut } = useContext(UserContext)
  const navigate = useNavigate()
  const urlProfile = `${import.meta.env.VITE_BACKEND_API}/api/users/auth/me`

  useEffect(() => {
    fetch(urlProfile, {
      credentials: 'include',
    }).then((res) => {
      res.json().then((userData) => {
        setUser(userData.username)
        console.log(userData)
      })
    })
  }, [])

  const logoutUser = async () => {
    await logOut()
    setUser(null)
    navigate('/login')
    window.location.reload()
  }

  // const username = user?.username

  return (
    <header className="header">
      <Link className="container-link_home" to="/">
        <Logo height="35px" />
      </Link>
      {user && (
        <>
          <div className="auth-ctn">
            <Link className="auth-link" to="/create-memory">
              <span>Créer un souvenir</span>
            </Link>
            <Link onClick={logoutUser} className="auth-link">
              <span>Se déconnecter</span>
            </Link>
          </div>
        </>
      )}
      {!user && (
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