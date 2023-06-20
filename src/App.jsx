import React from "react"
// import { Header } from "./components/Header/Header" 
// router
import { Routes, Route } from "react-router-dom"
// context
import { UserContextProvider } from "./contexts/UserContext"
// pages
import { SignUp } from "./pages/SignUp/SignUp"
import { Movie } from "./pages/Movie/Movie"
import { Memory } from "./pages/Memory/Memory"
import { Login } from "./pages/Login/Login"
import { Home } from "./pages/Home/Home"

// outlet layouts
import { Layout } from "./layouts/Layout"

// components
// import { Footer } from "./components/Footer/Footer"

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/memories" element={<Memory />} />
          <Route path="/movies" element={<Movie />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
