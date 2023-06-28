import { createContext, useEffect, useState } from "react"
import { getTokenFromCookie } from "../helpers/cookies"
import { useParams } from 'react-router-dom'

export const MemoryContext = createContext({})

export const MemoryContextProvider = ({ children }) => {
  const [memories, setMemories] = useState([])
  const token = getTokenFromCookie()
  const urlMemories = `${import.meta.env.VITE_BACKEND_API}/api/memories/memory`

  useEffect(() => {
    fetchMemoriesFeed()
    // fetchMemory()
  }, [])

  const fetchMemoriesFeed = async () => {
    const res = await fetch(urlMemories, {
      credentials: 'include',
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
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