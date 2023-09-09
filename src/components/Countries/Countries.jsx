import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags , setVisitedFlags]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

     const handleVisitedCountry =(country)=>{
        console.log('add your data for countries');
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)

     }
     const handleVisitedFlags =(flag)=>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
     }
    return (
        <div >
             <h3>Countries:{countries.length}</h3>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }

            </div>
            <div className="flag-container">
               {
                visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
               }
            </div>
           <div className="countries">
           {
                countries.map(country => 
                <Country key={country.cca3}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
                 country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;