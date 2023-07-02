import { useState } from 'react'
import { getTokenFromCookie } from '../../helpers/cookies'
import { useNavigate } from 'react-router-dom'
import './creatememory.css'

export const CreateMemory = () => {
  const navigate = useNavigate()

  const [theme, setTheme] = useState('')
  const [cover, setCover] = useState('')
  const [content, setContent] = useState('')

  const url = `${import.meta.env.VITE_BACKEND_API}/api/memories/memory/create`
  const token = getTokenFromCookie()

  const createNewMemory = async (e) => {
    let formData = new FormData()
    formData.set('theme', theme)
    formData.set('cover', cover[0])
    formData.set('content', content)
    e.preventDefault()
    const response = await fetch(url, {
      method: 'post',
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
    if (response.ok) {
      navigate('/')
    }
  }

  return (
    <main className="main-c-memory-ctn">
      <h3 className="heading-c-memory">CRÉATION DU SOUVENIR</h3>
      <div className="ctn">
        <form onSubmit={createNewMemory}>
          <div className="ctn-c-memory-theme">
            <label className="label-theme">
              Thème de votre souvenir d'une scène préférée ⚡️
            </label>
            <input
              className="input-theme"
              placeholder="Thème du souvenir..."
              id="theme"
              name="theme"
              type="text"
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
          <div className="ctn-c-memory-cover">
            <label className="label-cover">
              Insérer une <i>cover</i> représentative de votre souvenir 🌈
            </label>
            <input
              className="input-cover"
              placeholder="Photo du souvenir..."
              id="cover"
              name="cover"
              type="file"
              onChange={(e) => setCover(e.target.files)}
            />
          </div>
          <div className="ctn-c-memory-content">
            <label className="label-content">
              Décrivez votre souvenir à partager ✍🏼
            </label>
            <input
              className="input-content"
              placeholder="Souvenir à décrire..."
              id="content"
              name="content"
              type="text"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <button className="cr-mry-btn" type="submit">
            Créer
          </button>
        </form>
      </div>
    </main>
  )
}
