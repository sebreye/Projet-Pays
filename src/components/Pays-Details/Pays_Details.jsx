import React from 'react'
import "./Pays_Details.css"
const Pays_Details = ({darkMode}) => {
  return (
    
    <div className='Pays_details'>
      <button className={`back ${darkMode ? 'darkmode' : ""}`}>
        <p>Go back</p>
      </button>
      <div className='Pays_details_body'>
        <div className="img_container">
        <img src="https://flagcdn.com/fr.svg" alt="" />
        </div>
        <div className={`info ${darkMode ? 'darkmode' : ""}`}>
          <h2>Name</h2>
          <div className='info_container'>
            <div className='left_info'>
              <p>Native Name : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>Test</span></p>
              <p>Population : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>Test</span></p>
              <p>Région : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>Test</span></p>
              <p>Sub région : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>Test</span></p>
            </div>
            <div className='right_info'>
            <p>Capital : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>Test</span></p>
              <p>top-level Domain : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>Test</span></p>
              <p>Currencies : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>Test</span></p>
              <p>Languages : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>Test</span></p>
            </div>
          </div>
          border Countries : 
          <div className={`border-Pays ${darkMode ? 'darkmode' : ""}`}>
            <p>Test</p>
          </div>
          <div className={`border-Pays ${darkMode ? 'darkmode' : ""}`}>
            <p>Test</p>
          </div>
          <div className={`border-Pays ${darkMode ? 'darkmode' : ""}`}>
            <p>Test</p>
          </div>
          <div className={`border-Pays ${darkMode ? 'darkmode' : ""}`}>
            <p>Test</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pays_Details