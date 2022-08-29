import React from 'react'
import ReactDOM from 'react-dom/client'
import FetchedSearchList from './searchlist'
import ResultText from './textarea'
import FormatBtn from './formatbtn'
import MediaType from './mediatype'
import TitleText from './title'
import PageInput from './pagenumber'
import {HandleSearchData, Citation} from './handledata'
import { BrowserRouter as Router } from "react-router-dom"
// import './index.css'
import './App.css'
import { useState } from 'react'



function App() {
  const [selectedMedia, setMedia] = useState("Print")
  const [selectedData, setSelectedData] = useState("")
  const [selectedPage, setPage] = useState("")
  const [selectedFormat, setFormat] = useState("MLA")

  return (
    <div className='root-wrap'>
    <TitleText />
    <div className='tool-bar'>
      <MediaType setMedia={setMedia}/>
      <FetchedSearchList setSelectedData={setSelectedData}/>
      <PageInput setPage={setPage}/>
      <FormatBtn setFormat={setFormat}/>
      <Citation selectedMedia={selectedMedia} selectedData={selectedData} selectedPage={selectedPage} selectedFormat={selectedFormat}/>
    </div>
    <ResultText />
    </div>
  )
}

export default App
