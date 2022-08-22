import React from 'react'
import ReactDOM from 'react-dom/client'
import IsbnForm from './forms'
import ResultText from './textarea'
import FormatBtn from './formatbtn'
import TitleText from './title'
import { BrowserRouter as Router } from "react-router-dom"
// import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <div className='root-wrap'>
    <TitleText />
    <div className='tool-bar'>
      <IsbnForm />
      <FormatBtn />
    </div>
    <ResultText />
    </div>
  </Router>
)
