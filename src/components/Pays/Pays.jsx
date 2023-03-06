import React from 'react'
import { useState, useEffect } from 'react'
import "./Pays.css"
import Pays_Details from '../Pays-Details/Pays_Details'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Pays = ({darkMode}) => {
    const [pays, setPays] = useState([])
    const [selectedRegion, setSelectedRegion] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate ()
    useEffect(() => {
        fetchData();
    }, [setSelectedRegion,setPays]);

    const fetchData = async () =>{
        try {
            const response = await fetch("https:/restcountries.com/v2/all")
            const data = await response.json();
            setPays(data)
        } catch(error) {
            console.log(error);
        }
    }

    const filterPaysByRegion = (region) => {
        setSelectedRegion(region);
        if (region === '') {
            fetchData();
        } else {
            const fetchRegion = async () => {
                try {
                    const response = await fetch(
                        `https://restcountries.com/v2/region/${region}`
                    );
                    const data = await response.json();
                    setPays(data);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchRegion();
        }
    };

    const filterPaysBySearchTerm = (term) => {
        setSearchTerm(term);
        if (term === '') {
            fetchData();
        } else {
            const fetchSearch = async () => {
                try {
                    const response = await fetch(
                        `https://restcountries.com/v2/name/${term}`
                    );
                    const data = await response.json();
                    setPays(data);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchSearch();
        }
    };

    const filteredPays = pays.filter((pays) =>
        pays.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const detailsPaysClick = (pays) => {
        navigate(`/pays-details/${pays.alpha3Code}`, { state: { pays } });
        }
return (
    <> <div className='app_body'>
    <div className='inputs'>
        <div className={`search_inputs ${darkMode ? 'darkmode' : ""}`}>
        <input type="text" placeholder='search for a country' value={searchTerm} onChange = {(e) => filterPaysBySearchTerm(e.target.value)} />
        </div>
        <div className={`select_region ${darkMode ? 'darkmode' : ""}`}>
        <select name="" id="" className={`select ${darkMode ? 'darkmode' : ""}`} value={selectedRegion} onChange={(e) => filterPaysByRegion(e.target.value)}>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceania</option>
        </select>
        </div>
    </div>
    </div>
        <div className="Payss">
        {filteredPays.map((pays)=>(
            <div key={pays.alpha3Code} className={`Pays ${darkMode ? 'darkmode' : ""}`} onClick={() => detailsPaysClick(pays)} >
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