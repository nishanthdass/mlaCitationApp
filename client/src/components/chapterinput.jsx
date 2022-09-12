import React, { useState } from 'react';
import '../App.css'


export default function ChapterInput({setChapter}) {
  // const [pageVal, setPage] = useState('')
  // console.log(pageVal)
  return (
    <>
    <div className='chapter-wrap'>
    <div className='chapter-label'><label htmlFor="chapter-input">Chapter:</label></div>
    <input className='chapter-input' type='text' onChange = {e=> setChapter(e.target.value)}id="chapter-input-id"/> 
    </div>
    </>
    );
  };
  