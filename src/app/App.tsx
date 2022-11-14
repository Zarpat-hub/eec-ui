import './App.scss'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { HomePage } from './pages/HomePage/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
