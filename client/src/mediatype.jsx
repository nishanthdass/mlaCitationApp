import React, { useState } from 'react';
import './App.css'


export default function MediaType(props) {
  return (
    <>
    <div className='select-media'>
    <label htmlFor="select-media-id">Media:</label>
    <select id="select-media-id"> 
    <option value="mla">Print</option>
    <option value="apa">Web</option>
    <option value="chicago">DVD</option>
    </select>
    </div>
    </>
    );
  };
  