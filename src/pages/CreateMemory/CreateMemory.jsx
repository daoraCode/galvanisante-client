import { useState } from 'react'
import { getTokenFromCookie } from '../../helpers/cookies'
import './creatememory.css'
import { useNavigate } from 'react-router-dom'

export const CreateMemory = () => {
  const navigate = useNavigate()

  const [theme, setTheme] = useState('')
  const [cover, setCover] = useState('')
  const [content, setContent] = useState('')

  const url = `${import.meta.env.VITE_BACKEND_API}/memories/memory/create`
  const token = getTokenFromCookie()

  const createNewMemory = async (e) => {
    let formData = new FormData()
    formData.set('theme', theme)
    formData.set('cover', cover[0])
    formData.set('content', content)
    e.preventDefault()
    const response = await fetch(url, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
      body: formData,
    })
    if (response.ok) {
      navigate('/')
    }
  }

  return (
    <main className="main-c-memory-ctn">
      <h1 className="heading-c-memory">Souvenirs</h1>
      <div className="ctn">
        <form onSubmit={createNewMemory}>
          <div className="ctn-c-memory-theme">
            <label className="label-theme">
              Thème de votre souvenir de film / scène préférée ⚡️
            </label>
            <input
              className="input-theme"
              placeholder="Le thème / le titre de souvenir..."
              id="theme"
              name="theme"
              type="text"
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>

          <div className="ctn-c-memory-cover">
            <label className="label-cover">
              Insérer un mot une phrase de culte d'une série ou film de votre
              souvenir 🌈
            </label>
            <input
              className="input-cover"
              placeholder="Image du souvenir..."
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
              placeholder="Mon souvenir à décrire..."
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
