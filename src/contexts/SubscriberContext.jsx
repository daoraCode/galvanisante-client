// import axios from "axios"
import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const SubscriberContext = createContext({})

const SubscriberContextProvider = ({ children }) => {
  const navigate = useNavigate()

  const [subscriber, setSubscriber] = useState({})
  const [user, setUser] = useState(null)

  const signup = async (values) => {
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

    const newSubscriber = await res.json()

    if (newSubscriber.error) {
      console.log("hello")
      alert(newSubscriber.error)
      return
    } else {
      // navigate("/memories")
      console.log("Congrats, you've been registered!")
    }

    // if (res.status !== 200) {
    //   alert("registration failed")
    // } else {
    //   alert("registration succesful")
    // }
  }

  const login = async (values) => {
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

    const subscriber = await res.json()

    if (subscriber.error) {
      console.log("hello")
      alert(subscriber.error)
      return
    } else {
      // navigate("/memories")
      console.log("Congrats, you've been registered!")
    }

    if (res.status <= 400) {
      throw res.statusText
    } else {
      console.log("Congrats, you're connected!")
    }
  }

  const value = {
    subscriber,
    setSubscriber,
    user,
    setUser,
    signup,
    login,
    // getUser,
  }

  return (
    <SubscriberContext.Provider value={value}>
      {children}
    </SubscriberContext.Provider>
  )
}

export { SubscriberContext, SubscriberContextProvider }
