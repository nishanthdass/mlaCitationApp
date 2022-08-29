import React, { useState } from 'react';
import './App.css'


export default function FormatBtn({setFormat}) {
  const [selectedFormatOptions, setSelectedFormatOptions] = useState(["MLA", "APA", "Chicago"])

  return (
    <>
    <div className='select-format'>
    <label htmlFor="select-format-id">Format:</label>
    <select id="select-format-id" onChange={e => setFormat(selectedFormatOptions[e.target.value])}> 
    {selectedFormatOptions.map((address, key) => <option key={key} value={key}>{address}</option>)}
    </select>
    </div>
    </>
    );
  };
  