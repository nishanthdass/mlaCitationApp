import React, { useState } from 'react';
import ResultText from './textarea'
import './App.css'


export default function IsbnForm(props) {
  const [authorVal, setAuthor] = useState('');
  const [bookVal, setBook] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/api/people')
    .then((response) => response.json())
    .then((data) => show(data));

    // console.log({bookVal})
    // console.log({authorVal})
    const author = JSON.stringify(authorVal)
    const book = JSON.stringify(bookVal)
    console.log(typeof book, book)
    function show(data){
      console.log(data)
      document.getElementById('resultTextarea').innerHTML += "FrontEnd Says: The book you want to cite is " + book + " and the author is " + author + ". BackEnd Says: " + data[0].name

    }

    setAuthor('')
    setBook('')
  }

  return (
        <form onSubmit={handleSubmit}>
        <label>Author Name Request:</label>
        <br />
        <input 
          name='authorVal' 
          type='text'
          value={authorVal}
          onChange={e => setAuthor(e.target.value)}
        />
        <br/>
        <label>Book Name Request:</label>
        <br />
        <input 
          name='bookVal' 
          type='text' 
          value={bookVal}
          onChange={e => setBook(e.target.value)}
        />
        <br />
        <button> Cite </button>
      </form>
      );
  };
  