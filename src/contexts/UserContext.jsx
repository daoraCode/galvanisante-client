import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null) // <- initialized at null since it coulb be called (async)
  const navigate = useNavigate()

  useEffect(() => {
    getMe()
  }, [])

  const getMe = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/users/auth/me`,
      {
        credentials: 'include',
      }
    )
    const data = await res.json()
    setUser(data.profile)
  }

  const signUp = async (values) => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/users/auth/signup`,
      {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          password: values.password,
        }),
      }
    )

    const data = await res.json()
    return data
  }

  const logIn = async (values) => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/users/auth/login`,
      {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      }
    )

    const data = await res.json()
    return data
  }

  const logOut = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/users/auth/logout`,
      {
        credentials: 'include',
        method: 'post',
      }
    )
    const data = res.json()
    return data
  }

  const value = {
    user,
    setUser,
    signUp,
    logIn,
    logOut,
    getMe,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}