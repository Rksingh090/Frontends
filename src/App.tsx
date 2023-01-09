import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
// context 
import { ThemeContext } from './Context';
// routes
import Home from './pages/Home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Terminal from './Terminal';


const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector('html')?.setAttribute("data-theme", theme)
    document.querySelector('html')?.setAttribute("class", theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
      }}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/terminal' element={<Terminal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
  )
}
export default App
