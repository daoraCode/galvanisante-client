import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/Signup/Signup"
// import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Signup />} />
        {/* <Route path="*" element={<Not Found />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
