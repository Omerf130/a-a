import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import About from './pages/About/About'
import MainPage from './pages/MainPage/MainPage'

function App() {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes below as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App