import React, { useState } from 'react';
import './App.css'


export default function MediaType(props) {
  const [selectedOption, setSelectedOption] = useState(["Print", "Web", "DVD"])
  // console.log(selectedOption)
  // let option = selectedOption.map( option => option)
  // console.log(option)
  function handleSelectOption(e){
    console.log(selectedOption[e.target.value])

  }
  return (
    <>
    <div className='select-media'>
    <label htmlFor="select-media-id">Media:</label>
    <select id="select-media-id" onChange={e => handleSelectOption(e)}> 
    {
        selectedOption.map((address, key) => <option key={key}value={key}>{address}</option>)
      }
    </select>
    </div>
    </>
    );
  };
  