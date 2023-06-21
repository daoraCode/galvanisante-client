import { createContext, useEffect, useState } from "react"
import { getTokenFromCookie } from "../helpers/cookies"

const MemoryContext = createContext({})

const MemoryContextProvider = ({ children }) => {
  const token = getTokenFromCookie()
  const [memories, setMemories] = useState([])

  const fetchMemoryFeed = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/memories/memory`,
      {
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const data = await res.json()
    setMemories(data.memoryList)
  }

  useEffect(() => {
    fetchMemoryFeed()
  }, [])

  const value = {
    memories,
    setMemories,
    fetchMemoryFeed,
  }

  return (
    <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>
  )
}

export { MemoryContext, MemoryContextProvider }
