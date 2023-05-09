
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar';
import Indonesia from './pages/indonesia';
import Covid19 from './pages/covid-19';
import Programming from './pages/programming';

function App() {

  return (
    <>
    <div>
    <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Indonesia />} />
        <Route path="/covid-19" element={<Covid19 />} />
        <Route path="/programming" element={<Programming />} />
        </Routes>

      </Router>
    </div>

    </>
  )
}

export default App
