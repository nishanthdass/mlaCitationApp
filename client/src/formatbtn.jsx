import React, { useState } from 'react';
import './App.css'


export default function FormatBtn(props) {
  return (
    <>
    <div className='select-format'>
    <label htmlFor="select-format-id">Format:</label>
    <select id="select-format-id"> 
    <option value="mla">MLA</option>
    <option value="apa">APA</option>
    <option value="chicago">Chicago</option>
    </select>
    </div>
    </>
    );
  };
  