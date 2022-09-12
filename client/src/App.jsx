import React from 'react'
import ReactDOM from 'react-dom/client'
import FetchedSearchList from './components/searchlist'
import ResultText from './components/textarea'
import FormatBtn from './components/formatbtn'
import MediaType from './components/mediatype'
import TitleText from './components/title'
import PageInput from './components/pagenumber'
import ChapterInput from './components/chapterinput'
import EditorInput from './components/editorname'
import {CitationButton} from './handledata'
import { BrowserRouter as Router } from "react-router-dom"
// import './index.css'
import './App.css'
import { useState } from 'react'



function App() {
  const [selectedMedia, setMedia] = useState("Print")
  const [selectedData, setSelectedData] = useState("")
  const [selectedPage, setPage] = useState("")
  const [selectedFormat, setFormat] = useState("MLA")
  const [selectedChapter, setChapter] = useState("")
  const [selectedEditor, setEditor] = useState("")
  const [citeString, setCiteString] = useState('')
  // console.log(citeString)

  return (
    <div className='root-wrap'>
    <TitleText />
    <div className='tool-bar'>
      <MediaType setMedia={setMedia}/>
      <FetchedSearchList setSelectedData={setSelectedData}/>
      <FormatBtn setFormat={setFormat}/>
      <ChapterInput setChapter={setChapter}/>
      <EditorInput setEditor={setEditor} />
      <PageInput setPage={setPage}/>
      <CitationButton setCiteString={setCiteString} selectedMedia={selectedMedia} selectedData={selectedData} selectedPage={selectedPage} selectedFormat={selectedFormat} selectedChapter={selectedChapter} selectedEditor={selectedEditor} />
    </div>
    <ResultText citeString={citeString} />
    </div>
  )
}

export default App
