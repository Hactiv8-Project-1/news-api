import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import Saved from './pages/saved'
import { News } from './pages/News'
import './App.css'
import React from 'react'

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<News title='Indonesia News' params='/top-headlines?country=id' />} />
        <Route path='/covid-19' element={<News title='Covid-19 News' params='/everything?q=covid-19' />} />
        <Route path='/programming' element={<News title='Programming News' params='/everything?q=programming' />} />
        <Route path='/saved' element={<Saved />} />
      </Routes>
    </Router>
  )
}
