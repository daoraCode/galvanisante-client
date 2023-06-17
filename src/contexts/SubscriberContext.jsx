import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const SubscriberContext = createContext({})

const SubscriberContextProvider = ({ children }) => {
  const navigate = useNavigate()

  const [subscriber, setSubscriber] = useState({})
  const [user, setUser] = useState(null)

  const signup = async (values) => {
    const res = await fetch("http://localhost:4004/api/user/auth/signup", {
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
    })

    const subscriber = await res.json()

    if (subscriber.error) {
      alert(subscriber.error)
      return
    }

    const loginRes = await fetch("http://localhost:4004/api/user/auth/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: subscriber.email,
        password: subscriber.password,
      }),
    })

    const loginData = await loginRes.json()

    if (loginRes.status >= 400) {
      alert(loginRes.statusText)
    } else {
      console.log(loginRes)
      navigate("/movie")
    }

    setSubscriber(loginData)
  }

  const value = {
    subscriber,
    setSubscriber,
    user,
    setUser,
    // getUser,
  }

  return (
    <SubscriberContext.Provider value={value}>
      {children}
    </SubscriberContext.Provider>
  )
}

export { SubscriberContext, SubscriberContextProvider }
