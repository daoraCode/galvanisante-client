import React, { useState } from "react"
import "./creatememory.css"
import { useFormik } from "formik"

export const CreateMemory = () => {
  const formik = useFormik({})
  return (
    <main className="main-creatememory-ctn">
      <h1>Souvenirs</h1>
      <div className="main-su-form">
        <h3 className="su-heading-text-form">CRÉER VOTRE SOUVENIRS DE FILMS</h3>
        <form className="su-form">
          <div className="su-usrn-ctn">
            <label className="su-form-label" htmlFor="username">
              Thème
            </label>
            <input
              placeholder="Écrivez le thème de votre souvenir-de-scène"
              className="scn-input"
              id="theme"
              name="theme"
              type="text"
            />
          </div>
          <button type="submit">Créer</button>
        </form>
        <div></div>
      </div>
    </main>
  )
}
