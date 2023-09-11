import React from 'react'
import './App.css'


import { Routes, Route } from 'react-router-dom'

import { UserContextProvider } from './contexts/UserContext'
import { MemoryContextProvider } from './contexts/MemoryContext'

import { Header } from './components/Header/Header'

import { Home } from './pages/home/Home'
import { SignUp } from './pages/signup/SignUp'
import { Login } from './pages/login/Login'
import { Memory } from './pages/memory/Memory'
import { CreateMemory } from './pages/createMemory/CreateMemory'


const App = () => {
  return (
    <MemoryContextProvider>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/memory/:id' element={<Memory />} />
          <Route path='/create-memory' element={<CreateMemory />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </UserContextProvider>
    </MemoryContextProvider>
  )
}

export default App














