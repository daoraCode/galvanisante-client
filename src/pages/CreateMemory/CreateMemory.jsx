import { useState } from "react"
import { useFormik } from "formik"
import { getTokenFromCookie } from "../../helpers/cookies"
import "./creatememory.css"

// form to create a memory

export const CreateMemory = () => {
  // endpoint create a memory comiing from backend API
  const urlMemory = `${
    import.meta.env.VITE_BACKEND_API
  }/api/memories/memory/create`
  const token = getTokenFromCookie() // <-- retreive token user from helpers universal-cookie that help us to link memory to user

  const formik = useFormik({
    initialValues: {
      theme: "",
      presention: null,
      content: "",
    },
    // validate,
    onSubmit: async (values) => {
      console.log(values)
      const fetchedCreateMemory = await fetch(urlMemory, {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`, // <-- user's token from cookie session related to the actual logged user.
        }, // token is needed in order to perform own memorie
        body: JSON.stringify({
          theme: values.theme,
          presentation: values.presentation,
          content: values.content,
        }),
      })
    },
  })

  return (
    <main className="main-c-memory-ctn">
      <h1 className="heading-c-memory">Souvenirs</h1>
      <div className="ctn">
        {/* <h3>CRÉER VOTRE SOUVENIRS DE FILMS</h3> */}
        <form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
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
              Insérer un mot une phrase de culte d'une série ou film de votre
              souvenir 🌈
            </label>
            <input
              className="input-presentation"
              placeholder="Image de souvenir..."
              id="presentation"
              name="presentation"
              type="file"
              onChange={formik.handleChange}
              // onChange={(e) => {
              //   setFieldValue("image", event.currentTarget.files[0])
              // }}
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

          <button className="cr-mry-btn" type="submit">
            Créer
          </button>
        </form>
      </div>
    </main>
  )
}
