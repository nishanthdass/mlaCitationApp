import React from 'react';
import './App.css'


export default function TitleText(props) {
  return (
    <>
    <div className='title'>
        Citation Formatter
    </div>
    <div className='header-labels'>
    <label htmlFor="search-ele">Search Books API:</label>
    <label htmlFor="select-format-id">Choose Format:</label>
    </div>
    </>
    );
  };
  