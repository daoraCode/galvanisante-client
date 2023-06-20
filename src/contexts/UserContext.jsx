// import axios from "axios"
import { createContext, useEffect, useState } from "react"
// react-router-dom
import { useNavigate } from "react-router-dom"

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState({})

  const signUp = async (values) => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/user/auth/signup`,
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

    // if (newSubscriber.error) {
    //   console.log("hello")
    //   alert(newSubscriber.error)
    //   return
    // } else {
    //   navigate("/memories")
    //   console.log("Congrats, you've been registered!")
    // }
    // if (res.status !== 200) {
    //   alert("registration failed")
    // } else {
    //   alert("registration succesful")
    // }
  }

  const logIn = async (values) => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/user/auth/login`,
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

    if (res.status >= 400) {
      throw res.statusText
    }

    const data = await res.json()
    return data
  }

  // const logOut = async () => {
  //   const res = await fetch(
  //     `${import.meta.env.VITE_BACKEND_API}/api/user/auth/logout`,
  //     {
  //       method: "post",
  //     }
  //   )

  //   const data = res.json()
  //   return data
  // }

  const getUser = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/user/me`, {
      credentials: "include",
    })
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
    // logOut,
    // getUser,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }
