import React, { useRef, useState, useEffect } from 'react';
import {HandleSearchData} from './handledata';
import './App.css'



export default function FetchedSearchList({setSelectedData}) {
  const [searchVal, setSearch] = useState('');
  const [resultsVal, setResults] = useState([])
  const [isSelected, setIsSelected] = useState(false)
  const [selectedVal, setSelected] = useState([])

  const wrapperref = useRef()

  useEffect(() => {
    async function fetchData() {
      const searchterm = JSON.stringify(searchVal)
      await fetch('http://localhost:3001/api/people',  {
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

  useEffect(() => {
    HandleSearchData(selectedVal)
    // <HandleSearchData mydata = {selectedVal} />
  }, [selectedVal]);


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
  
























//   import React, { useRef, useState, useEffect } from 'react';
// import ResultText from './textarea'
// import './App.css'


// export default function FetchedSearchList() {
//   const [searchVal, setSearch] = useState('');
//   let dataCollection = {}

//   useEffect(() => {
//     const dataSelectTemplate = document.querySelector('[data-selection]')
//     const dataSelectStackTemplate = document.querySelector('[data-selection-stack]')
//     const dataSelect = document.querySelector('[data-select]')

//     async function fetchData() {
//     dataSelectStackTemplate.innerHTML = "";
//     if (searchVal.length > 2)  {
//       const searchterm = JSON.stringify(searchVal)

//       await fetch('http://localhost:3001/api/people',  {
//         method: 'post',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//           "searchterm" : searchterm
//         }),
//       })
//       .then(res => res.json())
//       .then(data => data.map(element => {
//         // console.log(element)
//         let elementObj = JSON.stringify(element)
//         const selectCell = dataSelectTemplate.content.cloneNode(true).children[0]
//         const headerCell = selectCell.children[0]
//         const bodyCell = selectCell.children[1]
//         headerCell.textContent = element.title
//         bodyCell.textContent = element.bookId
//         dataCollection[element.bookId] = elementObj
//         console.log(element.bookId)
//         // selectCell.setAttribute("data-select", element.bookId);
//         const stackLength = dataSelectStackTemplate.children.length;
//         if (stackLength > 9 ){
//           dataSelectStackTemplate.innerHTML = "";
//         }
//         dataSelectStackTemplate.prepend(selectCell)
//       })
//     )
//     }
//   }
//     fetchData();
//   });

//   function Selected() {
//     // const [selectedVal, setSelected] = useState()
//     // const selector = document.querySelectorAll('.selection')
//     // console.log(selector)
 
//   }

//   return (
//     <>
//     <div className='search-wrap'>
//     <label htmlFor="search-ele">Search Books API:</label>
//     <div className='input-search-wrap'>
//       <input 
//         id="search-ele"
//         type='search' 
//         placeholder='Book or Author name'
//         value={searchVal}
//         onChange={e => setSearch(e.target.value)}
//         />
//     </div>
//     <div onClick={() => Selected()} className='selection-stack' data-selection-stack></div>
//     <div className='selection-window'>
//       <template data-selection
//           dangerouslySetInnerHTML={{
//             __html: "<div class='selection' id='select-option' data-select><div class='div-header' data-header>header</div> <div class='div-body' data-body>body</div></div>"
//           }}
//       />
//     </div>
//     </div>

//     </>
//     );
//   };
  