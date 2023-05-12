import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { Saved } from './pages/saved'
import { News } from './pages/News'
import { useSelector } from 'react-redux'
import './App.css'

export const App = () => {
  const keySearch = useSelector(state => state.news.keySearch)

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<News title='Indonesia' params='/top-headlines?country=id' />} />
        <Route path='/*' element={<News title='Indonesia' params='/top-headlines?country=id' />} />
        <Route path='/covid-19' element={<News title='Covid-19' params='/everything?q=covid-19' />} />
        <Route path='/programming' element={<News title='Programming' params='/everything?q=programming' />} />
        <Route path='/saved' element={<Saved />} />
        <Route path='/search/:keySearch' element={<News title={keySearch} params={`/everything?q=${keySearch}`} />} />
      </Routes>
    </Router>
  )
}
