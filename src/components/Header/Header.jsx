import React from 'react'
import "./Header.css"
const Header = ({onClick, darkMode}) => {
  return (
    <div className={`header ${darkMode ? 'darkmode' : ""}`}>
        <div className="header_container">
            <h2 className="logo">Where in the world?</h2>
            <div className='switch_mode' onClick={onClick}>
                <h3>Dark mode</h3>
            </div>
        </div>
        
    </div>
  )
}

export default Header