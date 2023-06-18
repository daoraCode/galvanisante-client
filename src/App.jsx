import React from "react"
// import { Header } from "./components/Header/Header" 
// router
import { BrowserRouter, Routes, Route } from "react-router-dom"
// context
import { SubscriberContextProvider } from "./contexts/SubscriberContext"
// pages
import { Signup } from "./pages/Signup/Signup"
import { Movie } from "./pages/Movie/Movie"
import { Memory } from "./pages/Memory/Memory"
import { Login } from "./pages/Login/Login"

// components
// import { Footer } from "./components/Footer/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <SubscriberContextProvider>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </SubscriberContextProvider>
    </BrowserRouter>
  )
}

export default App
