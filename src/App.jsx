import React from 'react'
import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <HashRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/coin/:coinId' element={<Coin/>}/>
          </Routes>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App
