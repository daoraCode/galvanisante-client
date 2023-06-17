import React from "react"
import { useFormik } from "formik"
import "./signupform.css"

// a custom valisation function.
const validate = (values) => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = "Champs requis. Veuillez insérer votre prénom."
  } else if (values.firstName.length > 15) {
    errors.firstName = "Maximum 15 caractères ou moins est requis."
  }

  if (!values.username) {
    errors.username = "Champs requis. Veuillez insérer un surnom."
  } else if (values.username.length > 10) {
    errors.username = "Maximum 10 caractères ou moins est requis."
  }

  // email regex pattern
  if (!values.email) {
    errors.email = "Champs requis. Veuillez insérer une adresse e-mail."
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Adresse e-mail invalide."
  }

  return errors
}

export const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: "",
      username: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <div className="container-form">
      <h3 className="heading-text-su-form">AUTHENTIFICATION</h3>
      <form className="form" onSubmit={formik.handleSubmit}>
        <label className=".su-form-label" htmlFor="firstName">
          Prénom
        </label>
        <input
          className="input-su-form"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

        <label className=".su-form-label" htmlFor="username">
          Surnom
        </label>
        <input
          className="input-su-form"
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}

        <label className=".su-form-label" htmlFor="email">
          Adresse e-mail
        </label>
        <input
          className="input-su-form"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <button className="btn-su-form" type="submit">
          S'inscrire
        </button>
      </form>
    </div>
  )
}
