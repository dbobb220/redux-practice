import React from 'react';

function CityDropDown(props) {
  return (
      <div>
        CurrentCity: 
        <select onChange={
          (e)=>{
           
          }
        }>
          <option value="Austin">Austin</option>
          <option value="New York">New York</option>
          <option value="New Olreans">New Orleans</option>
          <option value="Las Vegas">Las Vegas</option>
          <option value="Seattle">Seattle</option>
          <option value="San Fransisco">San Fransisco</option>
          <option value="Washington D.C.">Washington D.C.</option>
        </select>
      </div>
  );
}
export default CityDropDown;
