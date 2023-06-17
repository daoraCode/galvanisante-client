import React from "react"
import { useFormik } from "formik"
import "./signup.css"

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

export const Signup = () => {
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
    <div className="main-su-form">
      <h3 className="heading-text-su-form">AUTHENTIFICATION</h3>
      <form className="su-form" onSubmit={formik.handleSubmit}>
        <label className="su-form-label" htmlFor="firstName">
          Prénom
        </label>
        <input
          placeholder="Jon Snow"
          className="input-su-form"
          id="firstName"
          name="firstName"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="su-form-error-alert">{formik.errors.firstName}</div>
        ) : null}

        <label className="su-form-label" htmlFor="username">
          Surnom
        </label>
        <input
          placeholder="winterfell-son"
          className="input-su-form"
          id="username"
          name="username"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="su-form-error-alert">{formik.errors.username}</div>
        ) : null}

        <label className="su-form-label" htmlFor="email">
          Adresse e-mail
        </label>
        <input
          placeholder="jonsnow@got.com"
          className="input-su-form"
          id="email"
          name="email"
          type="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="su-form-error-alert">{formik.errors.email}</div>
        ) : null}

        <button className="su-form-btn" type="submit">
          S'inscrire
        </button>
      </form>
      <div className="su-form-footer"></div>
    </div>
  )
}
