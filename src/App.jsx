import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { Saved } from './pages/Saved'
import { News } from './pages/News'
import { getDate } from './utils/getDate'
import './App.css'

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<News title='Indonesia' params='/top-headlines?country=id' />} />
        <Route path='/*' element={<News title='Indonesia' params='/top-headlines?country=id' />} />
        <Route path='/covid-19' element={<News title='Covid-19' params={`/everything?q=covid-19&from=${getDate().from}&to=${getDate().to}`} />} />
        <Route path='/programming' element={<News title='Programming' params={`/everything?q=programming&from=${getDate().from}&to=${getDate().to}`} />} />
        <Route path='/saved' element={<Saved />} />
        <Route path='/search/:keySearch' element={<News title='' params='' />} />
      </Routes>
    </Router>
  )
}
