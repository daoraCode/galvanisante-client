import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getTokenFromCookie } from "../../helpers/cookies"
// import { MemoryContext } from '../../contexts/MemoryContext'
import { UserContext } from '../../contexts/UserContext'
import './memory.css'

export const Memory = () => {
  const { user } = useContext(UserContext)
  const { id } = useParams()
  const token = getTokenFromCookie()
  const navigate = useNavigate()
  const [memoryInfo, setMemoryInfo] = useState([])

  const urlGetMemory = `${
    import.meta.env.VITE_BACKEND_API
  }/api/memories/memory/${id}`

  const urlRemoveMemory = `${
    import.meta.env.VITE_BACKEND_API
  }/api/memories/memory/delete/${id}`

  useEffect(() => {
    const fetchMemory = async () => {
      try {
        const res = await fetch(urlGetMemory, {
          credentials: 'include',
          headers: { Authorization: `Bearer ${token}` },
        })
        const json = await res.json()
        setMemoryInfo(json.memory)
      } catch (err) {
        console.log('error', err)
      }
    }
    fetchMemory()
  }, [])

  const deleteMemory = async () => {
    await fetch(urlRemoveMemory, {
      method: 'delete',
      credentials: 'include',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    navigate('/')
    window.location.reload()
  }

  if (memoryInfo == null) return ''

  return (
    <div className="mry-dtl-ctn">
      <div className="mry-dlt-img-ctn">
        <h2 className="mry-dlt-heading">{memoryInfo.theme}</h2>
        <img
          className="mry-dtl-img"
          src={`${import.meta.env.VITE_BACKEND_API}/${memoryInfo.cover}`}
        />
      </div>
      {userId.id}
      <div className="mry-ftr-ctn">
        <div className="mry-dlt-content">{memoryInfo.content}</div>
        <button className="mry-dlt-btn" onClick={deleteMemory}>
          Supprimer
        </button>
        {/* {user.id === id && <p>Hello</p>} */}
      </div>
    </div>
  )
}
