import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import PreWedding from './pages/PreWedding'
import Album from './pages/Album'
import Film from './pages/Film'
import Event from './pages/Event'
import Services from './pages/Services'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lien-he" element={<About />} />
          <Route path="/prewedding/:type" element={<PreWedding />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="/film/:type" element={<Film />} />
          <Route path="/event/:type" element={<Event />} />
          <Route path="/dich-vu" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App