import React from 'react'
import "./Pays_Details.css"
import { useLocation, useNavigate } from "react-router-dom";
const Pays_Details = ({darkMode}) => {
  const location = useLocation();
  console.log(location);
  const pays = location.state.pays;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  const valeur = (e) =>{
    console.log(e.target.value);
  }
  const borderClick = (border) => {
    fetch(`https://restcountries.com/v2/alpha/${border}`)
      .then(response => response.json())
      .then(data => {
        navigate(`/pays-details/${border}`, { state: { pays: data } });
      })
      .catch(error => console.log(error));
  };
  return (
    
    <div className='Pays_details'>
      <button className={`back ${darkMode ? 'darkmode' : ""}`} onClick={handleClick}>
        <p>Go back</p>
      </button>
      <div className='Pays_details_body'>
        <div className="img_container">
        <img src={pays.flag} />
        </div>
        <div className={`info ${darkMode ? 'darkmode' : ""}`}>
          <h2>{pays.name}</h2>
          <div className='info_container'>
            <div className='left_info'>
              <p>Native Name : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}></span>{pays.nativeName}</p>
              <p>Population : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>{pays.population}</span></p>
              <p>Région : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>{pays.region}</span></p>
              <p>Sub région : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>{pays.subregion}</span></p>
            </div>
            <div className='right_info'>
            <p>Capital : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>{pays.capital}</span></p>
              <p>top-level Domain : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>{pays.topLevelDomain}</span></p>
              <p>Currencies : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>   {pays.currencies.map((currency, index) => (
        <span key={index}>{currency.name} ({currency.code})</span>
      ))}</span></p>
              <p>Languages : {""}
              <span className={`values ${darkMode ? 'darkmode' : ""}`}>{pays.languages.map((language, index) => (
        <span key={index}>{language.name}</span>
      ))}</span></p>
            </div>
          </div>
          border Countries : 
          {pays.borders && pays.borders.length > 0 ? (
  <div className={`border-Pays-Container ${darkMode ? 'darkmode' : ""}`}>
    {pays.borders.map((border) => (
      <div key={border} className={`border-Pays ${darkMode ? 'darkmode' : ""}`} onClick={() =>{
        borderClick(border)
      }}>{border}</div>
    ))}
  </div>
) : (
  <div className={`border-Pays ${darkMode ? 'darkmode' : ""}`}>
    <p>No borders found</p>
  </div>
)}
        </div>
      </div>
    </div>
  )
}

export default Pays_Details