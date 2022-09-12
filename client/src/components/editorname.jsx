import React, { useState } from 'react';
import '../App.css'


export default function EditorInput({setEditor}) {
  // const [pageVal, setPage] = useState('')
  // console.log(pageVal)
  return (
    <>
    <div className='editor-wrap'>
    <div className='editor-label'><label htmlFor="editor-input">Editor name:</label></div>
    <input className='editor-input' type='text' onChange = {e=> setEditor(e.target.value)}id="editor-input-id"/> 
    </div>
    </>
    );
  };
  