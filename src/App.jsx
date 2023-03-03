import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Pays from './components/Pays/Pays'
import Pays_Details from './components/Pays-Details/Pays_Details'
import { Routes, Route } from 'react-router-dom'

function App() {
  const[darkMode, setDarkMode] = useState(false)
  
  const switchMode = () =>{
    setDarkMode((prevState) => !prevState);
  }

  
  return (
    <div className={`App ${darkMode ? 'darkmode' : ""}`}>
      <Header onClick={switchMode} darkMode={darkMode}/>
      

      <Routes>
        <Route path='/' element={<Pays darkMode={darkMode}/>} />
        <Route path='/Pays-details' element={<Pays_Details darkMode={darkMode}/>}/>
      </Routes>
      
    </div>
  )
}

export default App
