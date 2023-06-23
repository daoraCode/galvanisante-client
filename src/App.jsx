import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserContextProvider } from './contexts/UserContext'
import { MemoryContextProvider } from './contexts/MemoryContext'

import { Register } from './pages/register/Register'
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
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-memory" element={<CreateMemory />} />
          </Routes>
        </MemoryContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
