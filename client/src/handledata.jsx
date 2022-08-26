import React, { useState } from 'react';
import './App.css'

const ResultsData = (props) => {
  console.log(props)
  return <h1></h1>
}

export default ResultsData

// export function HandleSearchData(data) {
//   // const [dataVal, setData] = useState([]);
//   let dataObj = {}
//   // setData(data)
//   dataObj[data.bookId] = data
//   // return dataVal
//   return dataObj
//   };

  
// export function AllDataState(HandleSearchData) {
//   const [pageVal, setPage] = useState('') 
//   console.log(HandleSearchData)
//   return (
//     <>
//     <div className='page-number-wrap'>
//     <label htmlFor="page-input">page num:</label>
//     <input className='page-input' type='text' value={pageVal} onChange = {e=> setPage(e.target.value)}id="page-input-id"/> 
//     </div>
//     </>
//     );
//   };
  
  