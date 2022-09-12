import React, { useState } from 'react';
import '../App.css'


export default function PageInput({setPage}) {
  // const [pageVal, setPage] = useState('')
  // console.log(pageVal)
  return (
    <>
    <div className='page-number-wrap'>
    <div className='page-label'><label htmlFor="page-input">Page num:</label></div>
    <input className='page-input' type='text' onChange = {e=> setPage(e.target.value)}id="page-input-id"/> 
    </div>
    </>
    );
  };
  