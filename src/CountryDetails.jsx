import React from "react"
import { useLocation } from "react-router-dom"
function CountryDetails(){
 var{state:details}=useLocation()
    console.log(details)
    return(
          <div className="mybox">
            <h1 style={{textAlign:'center'}}>{details.name.common}CountryDetails</h1>
            <div style={{display:"flex",justifyContent:'space-evenly'}}>
                <div style={{width:"200px"}}>
                    <img src={details.flags[0]} alt="" width="500px" height="300px"/>
                </div>
                <div style={{width:"200px"}}>
                   <h1>{details.name.common}</h1>
                   <h2>Population:{details.population}</h2>
                   <h2>Capital:{details.capital}</h2>
               </div>
            </div>
        </div>
        
    )
}
export default CountryDetails
