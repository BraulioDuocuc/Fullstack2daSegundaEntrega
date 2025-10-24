import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Productos from './pages/Productos'
import Footer from './components/Footer'
import Mantenedor from './pages/Mantenedor'
import Cart from './pages/Cart'
import Categorias from './pages/Categorias'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogin = (userData) => {
    setIsLoggedIn(true)
    setUser(userData)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <CartProvider>
      <div className="app-container bg-dark text-light d-flex flex-column min-vh-100">
        <Navbar isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} onLogin={handleLogin} />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/mantenedor" element={<Mantenedor />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/categorias" element={<Categorias />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App