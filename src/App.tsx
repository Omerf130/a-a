import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import About from './pages/About/About'
import MainPage from './pages/MainPage/MainPage'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Accessability from './pages/accessability/Accessability'
import Privacy from './pages/privacy/Privacy'
import Article from './pages/Article/Article'

function App() {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/accessability" element={<Accessability />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/article" element={<Article />} />
        </Routes>
        <Contact/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App