// import axios from "axios"
import { useContext } from "react"
import { useFormik } from "formik"

// contexts
import { SubscriberContext } from "../../contexts/SubscriberContext"

// styles
import "./login.css"

export const Login = () => {
  const validate = (values) => {
    const errors = {}
    let passwordRegex = /(?=.*[0-9])/

    // email regex pattern
    if (!values.email) {
      errors.email = "Champs requis. Veuillez insérer une adresse e-mail."
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
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

    return errors
  }

  const { user, signup } = useContext(SubscriberContext)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      await signup(values)
      console.log(values.email)
    },
  })

  return (
    <div className="main-si-form">
      <h3 className="si-heading-text-form">CONNEXION</h3>
      <form className="si-form" onSubmit={formik.handleSubmit}>
        <label className="si-form-label" htmlFor="email">
          Adresse e-mail
        </label>
        <input
          placeholder="jonsnow@hbo.com"
          className="si-input-form"
          id="email"
          name="email"
          type="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="si-form-error-alert">{formik.errors.email}</div>
        ) : null}

        <label className="si-form-label" htmlFor="password">
          Mot de passe
        </label>
        <input
          placeholder="************"
          className="si-input-form"
          id="password"
          name="password"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="si-form-error-alert">{formik.errors.password}</div>
        ) : null}

        <button className="si-btn-form" type="submit">
          Se connecter
        </button>
      </form>
      <div className="si-form-footer"></div>
    </div>
  )
}
