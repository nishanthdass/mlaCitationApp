import React, { useRef, useState, useEffect } from 'react';
import ResultText from './textarea'
import './App.css'


export default function IsbnForm() {
  const [searchVal, setSearch] = useState('');
  const [options, setOptions] = useState([])
  const results = []

  
  useEffect(() => {
    const dataSelectTemplate = document.querySelector('[data-selection]')
    const dataSelectStackTemplate = document.querySelector('[data-selection-stack]')
    const dataHeader = document.querySelector('[data-header]')
  
    async function fetchData() {
    dataSelectStackTemplate.innerHTML = "";
    if (searchVal.length > 2)  {
      const searchterm = JSON.stringify(searchVal)

      await fetch('http://localhost:3001/api/people',  {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "searchterm" : searchterm
        }),
      })
      .then(res => res.json())
      .then(data => data.forEach(element => {
        const selectCell = dataSelectTemplate.content.cloneNode(true).children[0]
        const headerCell = selectCell.children[0]
        const bodyCell = selectCell.children[1]
  
        headerCell.textContent = element.text
        bodyCell.textContent = element.id
        const stackLength = dataSelectStackTemplate.children.length;

        if (stackLength > 9 ){
          dataSelectStackTemplate.innerHTML = "";
        }
        dataSelectStackTemplate.prepend(selectCell)
      }
      ))
    }
    setOptions(
      results, {key: 'Select a book', value: ''}
    )
  }
    fetchData();
  }, [searchVal]);

  return (
    <>
    <div className='search-wrap'>
    <div className='input-search-wrap'>
      <input 
        id="search-ele"
        type='search' 
        placeholder='Book or Author name'
        value={searchVal}
        onChange={e => setSearch(e.target.value)}
        />
    </div>
    <div className='selection-stack' data-selection-stack></div>
    <div className='selection-window'>
      <template data-selection
          dangerouslySetInnerHTML={{
            __html: "<div class='selection'><div class='div-header' data-header>header</div> <div class='div-body' data-body>body</div></div>"
          }}
      />
    </div>
    </div>
    </>
    );
  };
  