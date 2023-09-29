import React ,{ useEffect,useState}from 'react';
import axios from 'axios';
import{ Link} from 'react-router-dom'

function Countries(){
    var[countries,setCountries]=useState([])
    useEffect(()=>{
    axios.get("https://restcountries.com/v3/all").then((res)=>{
        setCountries([...res.data])
    })
   },[])
    return(
        <div className='mybox'>
            <h1>Countries</h1>
            <ul id='Countries'>
              {
                countries.length>0 &&countries.map((country)=>{
                  return <li>
                        <h4> {country.name.common}</h4>
                        <img src={country.flags[0]} width="100%" height="150px" alt="ani"/>&nbsp;
                        <Link to={"/countrydetails/"+country.name.common} state={country}>Read More</Link>
                  </li>
                
                })
              }
              </ul>
        </div>
    )
}
export default Countries