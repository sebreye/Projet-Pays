import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import "./Pays.css"
const Pays = ({darkMode}) => {
    const[pays, setPays] = useState([])
    const paysInputRef = useRef()
    useEffect(() =>{
        try{
            fetchData();
        } catch(error){
            console.log(error);
        }
        });
    
        const fetchData = async () =>{
        const response = await fetch("https:/restcountries.com/v2/all")
        const data = await response.json();
    
        setPays(data)
        }

        const searchPays = () =>{
            const searchValue = paysInputRef.current.value;
            if (searchValue.trim()) {
                const fetchSearch = async () => {
                    const response = await fetch(`https:/restcountries.com/v2/name/${searchValue}`)
                    const data = await response.json();
                    setPays(data)
                }

            try{
                fetchSearch()
            } catch (error){
                console.log(error);
            } 
            } else {
                fetchData()
            }
        }
return (
    <> <div className='app_body'>
    <div className='inputs'>
        <div className={`search_inputs ${darkMode ? 'darkmode' : ""}`}>
        <input type="text" placeholder='search for a country' ref={paysInputRef} onChange={searchPays} />
        </div>
        <div className={`select_region ${darkMode ? 'darkmode' : ""}`}>
        <select name="" id="" className={`select ${darkMode ? 'darkmode' : ""}`}>
            <option value="">All</option>
            <option value="">Africa</option>
            <option value="">Americas</option>
            <option value="">Asia</option>
            <option value="">Europa</option>
            <option value="">Oceania</option>
        </select>
        </div>
    </div>
    </div>
        <div className="Payss">
        {pays.map(pays =>(
            <div key={pays.alpha3Code} className={`Pays ${darkMode ? 'darkmode' : ""}`} >
            <div className="flag_container">
                <img src={pays.flag} alt="" />
            </div>
            <div className='details'>
                <h3 className='Name'>{pays.name}</h3>
                <p>Population:{""}
                <span className={`values ${darkMode ? 'darkmode' : ""}`}>{pays.population}</span>
                </p>

                <p>Région:{""} 
                <span className={`values ${darkMode ? 'darkmode' : ""}`}>{pays.region}</span>
                </p>

                <p>capital:{""} 
                <span className={`values ${darkMode ? 'darkmode' : ""}`}>{pays.capital}</span>
                </p>
            </div>
        </div>
        ))}
        
    </div>
    </>
    
    )
}

export default Pays