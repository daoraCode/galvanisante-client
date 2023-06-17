import React from "react"
// import { Header } from "./components/Header/Header" 
// router
import { BrowserRouter, Routes, Route } from "react-router-dom"
// context
import { SubscriberContextProvider } from "./contexts/SubscriberContext"
// pages
import { Signup } from "./pages/Signup/Signup"
import { Movie } from "./pages/Movie/Movie"
import { Weekly } from "./pages/Weekly/Weekly"

// components
// import { Footer } from "./components/Footer/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <SubscriberContextProvider>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </SubscriberContextProvider>
    </BrowserRouter>
  );
}

export default App
