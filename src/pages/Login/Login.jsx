import React from "react"
import "./login.css"

export const Login = () => {
  return (
    <div className="main-si-form">
      <h3 className="si-heading-text-form">INSCRIPTION</h3>
      <form className="si-form" onSubmit={formik.handleSubmit}>
        <label className="si-form-label" htmlFor="email">
          Adresse e-mail
        </label>
        <input
          placeholder="jonsnow@hbo.com"
          className="input-si-form"
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

        <button className="si-form-btn" type="submit">
          S'inscrire
        </button>
      </form>
      <div className="si-form-footer"></div>
    </div>
  )
}
