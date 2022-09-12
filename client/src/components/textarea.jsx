import React, { useState, useRef, useEffect} from 'react';
import '../App.css'
import FetchedSearchList from './searchlist';


export default function ResultText(props) {
  console.log(props);
  console.log(typeof props.citeString)
  const [citationArray, setCitationArray] = useState([])
  // const [text, setText] = useState('')
  
  useEffect(() => {
    setCitationArray(citationArray => [...citationArray, props.citeString])
  }, [props.citeString])
  // let texts = ["hi", "bye", "yes", "no"]
  console.log(citationArray)
  // defaultValue={ texts.map(data => data+'\r') }

  
  // setText("Jibberish")
  // textAreaEl.current.value = "The is the story of your life. You are an human being, and you're on a website about React Hooks";
  return (
    <>
    <div>
    <textarea className='resultTextarea' defaultValue={citationArray.map(data => data).join('\n')}>
    </textarea>
    </div>
    </>
    );
  };
  