import { useState } from "react"
import { useFormik } from "formik"
import "./creatememory.css"

// form to create a memory

export const CreateMemory = () => {
  // endpoint create a memory comiing from backend API
  const urlMemory = "http://localhost:4004/api/memories/memory/create"
  const token = sessionStorage.setItem("token")
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTI4MGUzM2ViNmM2NjU1ZjNiNDhiYSIsImlhdCI6MTY4NzMzOTA3MCwiZXhwIjoxNjg3MzQwNDcwfQ.5WpiGaoaxZnYoLU4lLGv_jvghQhBgbuhctGPbL9ktaw"

  const formik = useFormik({
    initialValues: {
      theme: "",
      presention: "",
      content: "",
    },
    // validate,
    onSubmit: async (values) => {
      console.log(values)
      const fetchedCreateMemory = await fetch(urlMemory, {
        method: "post",

        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`, // <-- user's token from cookie his session
        },
        body: JSON.stringify({
          theme: values.theme,
          presentation: values.presentation,
          content: values.content,
        }),
      })
    },
  })

  // const [memory, setMemory] = useState({
  // })

  return (
    <main className="main-c-memory-ctn">
      <h1 className="heading-c-memory">Souvenirs</h1>
      <div className="ctn">
        {/* <h3>CRÉER VOTRE SOUVENIRS DE FILMS</h3> */}
        <form onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
            />
          </div>

          <div className="ctn-c-memory-presentation">
            <label className="label-presentation">
              Insérer une image de présentation de votre souvenir 🌈
            </label>
            <input
              className="input-presentation"
              placeholder="Image de souvenir..."
              id="presentation"
              name="presentation"
              type="text"
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
            />
          </div>

          <button type="submit">Créer</button>
        </form>
      </div>
    </main>
  )
}
