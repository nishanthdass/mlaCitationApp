import React, { useState } from 'react';
import './App.css'


export default function PageInput(props) {
  return (
    <>
    <div className='page-number-wrap'>
    <label htmlFor="page-input">Page num:</label>
    <input className='page-input' type='text' id="page-input-id"/> 
    </div>

    </>
    );
  };
  