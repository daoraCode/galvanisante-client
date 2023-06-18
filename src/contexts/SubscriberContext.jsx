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

    const subscriber = await res.json()

    if (subscriber.error) {
      console.log("hello")
      alert(subscriber.error)
      return
    } else {
      navigate("/memory")
    }

    // if (res.status !== 200) {
    //   alert("registration failed")
    // } else {
    //   alert("registration succesful")
    // }
  }

  const value = {
    subscriber,
    setSubscriber,
    user,
    setUser,
    signup,
    // getUser,
  }

  return (
    <SubscriberContext.Provider value={value}>
      {children}
    </SubscriberContext.Provider>
  )
}

export { SubscriberContext, SubscriberContextProvider }
