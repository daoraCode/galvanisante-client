import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import './login.css'

export const Login = () => {
  const notify = () => {
    toast('Default Notification !')

    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_CENTER,
    })

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
  }

  const validate = (values) => {
    const errors = {}
    let passwordRegex = /(?=.*[0-9])/

    // email regex pattern
    if (!values.email) {
      errors.email = 'Champs requis. Veuillez insérer votre adresse e-mail.'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Adresse e-mail invalide.'
    }

    if (!values.password) {
      errors.password = 'Champs requis. Veuillez entrer votre mot de passe.'
    } else if (values.password.length < 4) {
      errors.password = 'Min. 8 caractères pour entrer un mot passe.'
    } else if (values.password.length > 9) {
      errors.password = 'Max. 9 caractères pour entrer un mot passe.'
    } else if (!passwordRegex.test(values.password)) {
      errors.password = 'Le mot de passe entré ne contient pas de chiffre.'
    }

    return errors
  }

  const navigate = useNavigate()
  const { logIn, setUser } = useContext(UserContext)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (values, { setFieldError }) => {
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
