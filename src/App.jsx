import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'
import NavBar from './components/NavBar'
import SearchResult from './components/SearchResult'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
  <>
  <AuthContextProvider>
  <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" 
      element={<ProtectedRoute>
        <Profile />
      </ProtectedRoute>} />
      <Route path="/search/:searchTerm" element={<SearchResult />} />
    </Routes>
    </AuthContextProvider>
  </>
  )
}

export default App