import React, { useState } from 'react';
import './App.css'


export default function PageInput(props) {
  const [pageVal, setPage] = useState('')
  // console.log(pageVal)
  return (
    <>
    <div className='page-number-wrap'>
    <label htmlFor="page-input">page num:</label>
    <input className='page-input' type='text' value={pageVal} onChange = {e=> setPage(e.target.value)}id="page-input-id"/> 
    </div>
    </>
    );
  };
  