import React from 'react'
import ReactDOM from 'react-dom/client'
import IsbnForm from './forms'
import ResultText from './textarea'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsbnForm />
    <ResultText />
  </React.StrictMode>
)
