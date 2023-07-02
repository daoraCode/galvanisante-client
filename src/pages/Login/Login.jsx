import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import * as Yup from 'yup'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import './login.css'

export const Login = () => {
  // const notify = () => {
  //   toast('Default Notification !')
  //   toast.success('Success Notification !', {
  //     position: toast.POSITION.TOP_CENTER,
  //   })
  // toast.error('Error Notification !', {
  //   position: toast.POSITION.TOP_LEFT,
  // })
  // toast.warn('Warning Notification !', {
  //   position: toast.POSITION.BOTTOM_LEFT,
  // })
  // toast.info('Info Notification !', {
  //   position: toast.POSITION.BOTTOM_CENTER,
  // })
  // toast('Custom Style Notification with css class!', {
  //   position: toast.POSITION.BOTTOM_RIGHT,
  //   className: 'foo-bar',
  // })

  const navigate = useNavigate()
  const { logIn, setUser } = useContext(UserContext)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Adresse e-mail invalide.')
        .required('Adresse-email requise pour se connecter.'),
      password: Yup.string()
        .min(8, 'Le mot de passe défini est trop court.')
        .max(13, 'Le mot de passe défini est trop long.')
        .required('Mot de passe requis pour se connecter.'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await logIn(values)
        setUser(response)
        navigate('/')
        window.location.reload()
      } catch (e) {
        setFieldError('submit', 'Mot de passe ou surnom incorrect')
      }
    },
  })

  return (
    <div className="main-si-form">
      <form className="si-form" onSubmit={formik.handleSubmit}>
        <h3 className="si-heading-text-form">CONNEXION</h3>
        <div className="si-em-ctn">
          <label className="si-form-label" htmlFor="email">
            Adresse e-mail
          </label>
          <input
            placeholder="jonsnow@hbo.co"
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
        </div>

        <div className="si-pswd-ctn">
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
        </div>

        <button className="si-btn-form" type="submit">
          Se connecter
        </button>
      </form>
      <div className="si-form-footer"></div>
    </div>
  )
}
