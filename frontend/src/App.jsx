import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Blog from './pages/BlogPage'
import ViewAll from './pages/ViewAll'
import './App.css'
import WelcomePage from './pages/WelcomePage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/view-all" element={<ViewAll />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
