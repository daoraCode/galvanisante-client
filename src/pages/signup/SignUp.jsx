import { useContext, useRef } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import './signup.css'

export const SignUp = (props) => {
  const test = useRef(null)
  const { user, signUp } = useContext(UserContext)

  //   let passwordRegex = /(?=.*[0-9])/

  const navigate = useNavigate()

const formik = useFormik({
  initialValues: {
    username: '',
    email: '',
    password: ''
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, 'Min. 4 caractères pour définir un surnom.')
      .max(10, 'Min. 10 caractères pour définir un surnom.')
      .required('Champs requis. Veuillez définir votre surnom.'),
    email: Yup.string()
      .email('Adresse e-mail invalide.')
      .required('Champs requis. Veuillez définir votre adresse e-mail.'),
    password: Yup.string()
      .min(12, 'Min. 12 caractères pour définir votre mot passe.')
      .max(50, 'Min. 50 caractères pour définir votre mot passe.')
      .required('Champs requis. Veuillez définir un mot de passe')
    // .matches(/^'?\p{L}+(?:[' ]\p{L}+)*'?$/u)
  }),
  onSubmit: async values => {
    await signUp(values)
    navigate('/login')
  }
})



  return (
    <div className="main-su-form">
      <form className="su-form" onSubmit={formik.handleSubmit}>
        <h3 className="su-heading-text-form">INSCRIPTION</h3>
        <div className="su-usrn-ctn">
          <label className="su-form-label" htmlFor="username">
            Surnom
          </label>
          <input
placeholder = 'snow'

            className="su-input-form"
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
        </div>

        <div className="su-em-ctn">
          <label className="su-form-label" htmlFor="email">
            Adresse e-mail
          </label>
          <input
            placeholder="jonsnow@hbo.com"
            className="su-input-form"
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
        </div>

        <div className="su-pswd-ctn">
          <label className="su-form-label" htmlFor="password">
            Mot de passe
          </label>
          <input
            ref={test}
            placeholder="************"
            className="su-input-form"
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
        </div>

        <button className="su-btn-form" type="submit">
          S'inscrire
        </button>
      </form>
      <div className="su-form-footer"></div>
    </div>
  )
}
