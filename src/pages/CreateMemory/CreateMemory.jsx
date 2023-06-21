import { useState } from "react"
import { useFormik } from "formik"
import "./creatememory.css"

// formulaire de création de souvenir basée sur un endpoint

export const CreateMemory = () => {
  // const formik = useFormik({})

  const [memory, setMemory] = useState({
    theme: "",
    presention: "",
    content: "",
  })

  return (
    <main className="main-c-memory-ctn">
      <h1 className="heading-c-memory">Souvenirs</h1>
      <div className="ctn">
        {/* <h3>CRÉER VOTRE SOUVENIRS DE FILMS</h3> */}
        <form onSubmit={}>
          <div className="ctn-c-memory-theme">
            <label className="label-theme">
              Thème de votre souvenir de film / scène préférée ⚡️
            </label>
            <input
              className="input-theme"
              placeholder="Le thème / le titre de votre souvenir..."
              id="theme"
              name="theme"
              type="text"
            />
          </div>

          <div className="ctn-c-memory-presentation">
            <label className="label-presentation">
              Insérer une image de présentation de votre souvenir 🌈
            </label>
            <input
              className="input-presentation"
              placeholder="Image de souvenir..."
              id="souvenir"
              name="souvenir"
              type="text"
            />
          </div>

          <div className="ctn-c-memory-content">
            <label className="label-content">
              Décrivez votre souvenir à partager ✍🏼
            </label>
            <input
              className="input-content"
              placeholder="Mon souvenir..."
              id="content"
              name="content"
              type="text"
            />
          </div>

          <button type="submit">Créer</button>
        </form>
      </div>
    </main>
  )
}
