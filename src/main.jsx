import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (import.meta.env.VITE_BACKEND_API === 'production') disableReactDevTools()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
