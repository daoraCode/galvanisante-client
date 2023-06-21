import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState({})

  const signUp = async (values) => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/users/auth/signup`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
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
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
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
        credentials: "include",
        method: "post",
      }
    )
    const data = res.json()
    return data
  }

  const getUser = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/users/me`,
      {
        credentials: "include",
      }
    )
    const data = await res.json()
    setUser(data)
  }

  // useEffect(() => {
  //   getUser()
  // }, [])

  const value = {
    user,
    setUser,
    signUp,
    logIn,
    logOut,
    // getUser,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }
