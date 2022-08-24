import React from 'react'
import ReactDOM from 'react-dom/client'
import FetchedSearchList from './searchlist'
import ResultText from './textarea'
import FormatBtn from './formatbtn'
import MediaType from './mediatype'
import TitleText from './title'
import PageInput from './pagenumber'
import { BrowserRouter as Router } from "react-router-dom"
// import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <div className='root-wrap'>
    <TitleText />
    <div className='tool-bar'>
      <FetchedSearchList />
      <PageInput />
      <FormatBtn />
      <MediaType />
    </div>
    <ResultText />
    </div>
  </Router>
)
