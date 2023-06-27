import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getTokenFromCookie } from "../../helpers/cookies"
import "./memory.css"

export const Memory = () => {
  const token = getTokenFromCookie()
  const navigate = useNavigate()
  const { memoryId } = useParams()
  const [memoryInfo, setMemoryInfo] = useState([])

  const urlDelete = `${
    import.meta.env.VITE_BACKEND_API
  }/api/memories/memory/delete/${memoryId}`

  useEffect(() => {
    const url = `${
      import.meta.env.VITE_BACKEND_API
    }/api/memories/memory/${memoryId}`

    const fetchMemory = async () => {
      try {
        const res = await fetch(url, {
          credentials: "include",
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        const json = await res.json()
        setMemoryInfo(json.memory)
      } catch (err) {
        console.log("error", err)
      }
    }
    fetchMemory()
  }, [])

  const deleteMemory = async () => {
    await fetch(urlDelete, {
      method: "delete",
      credentials: "include",
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    navigate("/")
    window.location.reload()
  }

  return (
    <div className="mry-dtl-ctn">
      <h2 className="mry-dlt-heading">{memoryInfo.theme}</h2>
      <div className="mry-dlt-img-ctn">
        <img
          className="mry-dtl-img"
          src={`${import.meta.env.VITE_BACKEND_API}/${memoryInfo.cover}`}
        />
      </div>
      <div className="mry-dlt-content">{memoryInfo.content}</div>
      <div className="mry-flex-flex">
        <button className="mry-dlt-btn" onClick={deleteMemory}>
          Supprimer
        </button>
      </div>
    </div>
  )
}