import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  //signup
  const signup = async (values) => {
    const res = await fetch("http://localhost:4004/api/user/auth/signup", {
      method: "post",
      headers: {
        'Content-type': 'application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        username: value.username,
        email: value.email,
        password: value.password,
      })
    })
  }

  const value = {
    user,
    setUser,
    getUser,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }
