import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getTokenFromCookie } from "../../helpers/cookies"
import { UserContext } from '../../contexts/UserContext'
import './memory.css'

export const Memory = () => {
  const { getUser } = useContext(UserContext)
  // const { user, setUser, logOut } = useContext(UserContext)
  const { id } = useParams()
  const token = getTokenFromCookie()
  const navigate = useNavigate()
  const [memoryInfo, setMemoryInfo] = useState([])
  const [userInfo, setUserInfo] = useState({})

  const urlDelete = `${
    import.meta.env.VITE_BACKEND_API
  }/api/memories/memory/delete/${id}`

  useEffect(() => {
    const url = `${import.meta.env.VITE_BACKEND_API}/api/memories/memory/${id}`
    const fetchMemory = async () => {
      try {
        const res = await fetch(url, {
          credentials: 'include',
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        const json = await res.json()
        setMemoryInfo(json.memory)
      } catch (err) {
        console.log('error', err)
      }
    }
    fetchMemory()
  }, [])

  // console.log('39', user)

  const deleteMemory = async () => {
    await fetch(urlDelete, {
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

  return (
    <div className="mry-dtl-ctn">
      <div className="mry-dlt-img-ctn">
        <h2 className="mry-dlt-heading">{memoryInfo.theme}</h2>
        <img
          className="mry-dtl-img"
          src={`${import.meta.env.VITE_BACKEND_API}/${memoryInfo.cover}`}
        />
      </div>
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
