import React, { useState } from 'react';
import './App.css'


export function Citation(props) {

    return (
      <>
      <div className='button-wrap'>
      <br></br>
      <button onClick={() => {console.log(props.selectedMedia, props.selectedData, props.selectedPage, props.selectedFormat )}} type="button">Cite</button>
      </div>
      </>
      )
  }


export const HandleSearchData = (clickdata) => {
  // let data = new Citation(this.props.clickdata)
  console.log(clickdata)
}


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
  
  