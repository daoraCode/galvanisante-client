import React, { useContext } from "react"
import { useFormik } from "formik"

// context
import { SubscriberContext } from "../../contexts/SubscriberContext"

// styles
import "./signup.css"

// a custom valisation function.
const validate = (values) => {
  const errors = {}
  let passwordRegex = /(?=.*[0-9])/

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

  if (!values.password) {
    errors.password = "Champs requis. Veuillez définir un mot de passe."
  } else if (values.password.length < 4) {
    errors.password = "Min. 8 caractères pour définir un mot passe."
  } else if (values.password.length > 9) {
    errors.password = "Max. 9 caractères pour définir un mot passe."
  } else if (!passwordRegex.test(values.password)) {
    errors.password = "Le mot doit contenir au moins un chiffre."
  }

  // const validateConfirmPassword = (pass, value) => {

  //   let error = "";
  //   if (pass && value) {
  //     if (pass !== value) {
  //       error = "Password not matched";
  //     }
  // }

  return errors
}

export const Signup = (props) => {
  const { user, signup } = useContext(SubscriberContext)

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      signup(values), console.log(values)
      // alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className="main-su-form">
      <h3 className="heading-text-su-form">AUTHENTIFICATION</h3>
      <form className="su-form" onSubmit={formik.handleSubmit}>
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
          placeholder="jonsnow@hbo.com"
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

        <label className="su-form-label" htmlFor="password">
          Mot de passe
        </label>
        <input
          placeholder="************"
          className="input-su-form"
          id="password"
          name="password"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="su-form-error-alert">{formik.errors.password}</div>
        ) : null}

        <button className="su-form-btn" type="submit">
          S'inscrire
        </button>
      </form>
      <div className="su-form-footer"></div>
    </div>
  )
}
