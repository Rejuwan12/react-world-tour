
import { useState } from 'react';
import './Ciuntry.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags }) => {
    const {name, flags, population , area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const hnadleVisit= ()=>{
        setVisited(!visited);
    }
  
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'tomato' : 'black'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={hnadleVisit}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'i have visited this country' : 'i went to visit'}
        </div>
    );
};

export default Country;