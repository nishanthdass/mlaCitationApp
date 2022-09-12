import React, { useState } from 'react';
import '../App.css'


export default function MediaType({setMedia}) {
  const [selectedMediaOptions, setSelectedOptions] = useState(["Print", "Web", "DVD"])
  // console.log(selectedOption)
  // let option = selectedOption.map( option => option)
  // console.log(option)
  function handleSelectOption(e){
    console.log(selectedMediaOptions[e.target.value])

  }
  return (
    <>
    <div className='select-media'>
    <div className='media-label'><label htmlFor="select-media-id">Media:</label></div>
    <select id="select-media-id" onChange={(e)=> setMedia(selectedMediaOptions[e.target.value])}> 
    {
        selectedMediaOptions.map((address, key) => <option key={key}value={key}>{address}</option>)
      }
    </select>
    </div>
    </>
    );
  };
  