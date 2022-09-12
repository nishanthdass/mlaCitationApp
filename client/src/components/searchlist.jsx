import React, { useRef, useState, useEffect } from 'react';
import {HandleSearchData} from '../handledata';
import '../App.css'



export default function FetchedSearchList({setSelectedData}) {
  const [searchVal, setSearch] = useState('');
  const [resultsVal, setResults] = useState([])
  const [isSelected, setIsSelected] = useState(false)
  const [selectedVal, setSelected] = useState([])

  const wrapperref = useRef()

  useEffect(() => {
    async function fetchData() {
      const searchterm = JSON.stringify(searchVal)
      await fetch('http://localhost:3001/api/gbooksapi',  {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "searchterm" : searchterm
        }),
      })
      .then(res => res.json())
      .then(data => setResults(data))
  } 
    fetchData();
    document.addEventListener("mousedown", (event) => {if (wrapperref.current && !wrapperref.current.contains(event.target)){setIsSelected(false)}});
  }, [searchVal]);

  // useEffect(() => {
  //   HandleSearchData(selectedVal)
  //   // <HandleSearchData mydata = {selectedVal} />
  // }, [selectedVal]);


  return (
    <>
    <div className='search-wrap' ref={wrapperref}>
    <label htmlFor="search-ele">Search Books API:</label>
    <div className='input-search-wrap'>
      <input
        id="search-ele"
        type='search' 
        placeholder='Book or Author name'
        autoComplete="off"
        value={searchVal}
        onChange={e => setSearch(e.target.value)}
        onClick={e => setIsSelected(true)}
        />
    </div>
    {isSelected &&
    <div className='selection-stack'>
    {Object.keys(resultsVal).map( (item, i) => <div onClick={() => {setSelectedData(resultsVal[item]), setIsSelected(false), setSearch(resultsVal[item].title)}} key={i} className="selection"><div className='div-header'>{resultsVal[item].title}</div><div className='div-body'>{resultsVal[item].bookId}, {resultsVal[item].author}</div></div>)}
    </div>}
    </div>
    </>
    );
  };
  




