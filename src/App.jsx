import React from "react"


// router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// context
import { UserContextProvider } from "./contexts/UserContext"
import { MemoryContextProvider } from "./contexts/MemoryContext"

// pages
import { SignUp } from "./pages/SignUp/SignUp"
import { Login } from "./pages/Login/Login"
import { CreateMemory } from "./pages/CreateMemory/CreateMemory"
import { Home } from "./pages/Home/Home"
// import { Movie } from "./pages/Movie/Movie"
// import { Memory } from "./pages/Memory/Memory"

// components
import { Header } from "./components/Header/Header"

// import { Layout } from "./layouts/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <MemoryContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-memory" element={<CreateMemory />} />
          </Routes>
        </MemoryContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
