import { createContext, useEffect, useState } from "react"
import { getTokenFromCookie } from "../helpers/cookies"

const MemoryContext = createContext({})

const MemoryContextProvider = ({ children }) => {
  const token = getTokenFromCookie()

  const [memories, setMemories] = useState([])
  // const [memory, setMemory] = useState(null)

  const fetchMemoriesFeed = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/memories/memory`,
      {
        credentials: 'include',
        headers: {
          // "Content-type": "application/json",
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const data = await res.json()
    setMemories(data.memoriesList)
  }

  // const fetchMemory = async (id) => {
  //   const res = fetch(
  //     `${import.meta.env.VITE_BACKEND_API}/api/memories/memory/${id}`,
  //     {
  //       credentials: 'include',
  //       headers: {
  //         // 'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   )
  //   // console.log(res)
  //   const data = await res.json()
  //   return data
  //   // setMemory(data.memory)
  // }

  useEffect(() => {
    fetchMemoriesFeed()
    // fetchMemory()
  }, [])

  const value = {
    memories,
    setMemories,
    fetchMemoriesFeed,
    // memory,
    // setMemory,
    // fetchMemory,
  }

  return (
    <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>
  )
}

export { MemoryContext, MemoryContextProvider }
