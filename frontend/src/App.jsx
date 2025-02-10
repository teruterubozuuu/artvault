import { useState } from 'react'
import Header from './layout/Header'
import { BrowserRouter as Router, Routes,Route } from 'react-router'

function App() {
  return (
    <Router>
     <Header/>
     <Routes>
      <Route></Route>
     </Routes>
    </Router>
  )
}

export default App
