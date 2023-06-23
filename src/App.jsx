import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserContextProvider } from './contexts/UserContext'
import { MemoryContextProvider } from './contexts/MemoryContext'

import { SignUp } from './pages/signup/SignUp'
import { Login } from './pages/login/Login'
import { CreateMemory } from './pages/creatememory/CreateMemory'
import { Home } from './pages/home/Home'

import { Header } from './components/Header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <MemoryContextProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
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
