import React, { useRef, useState } from 'react';
import ResultText from './textarea'
import './App.css'


export default function IsbnForm(props) {
  const [authorVal, setAuthor] = useState('');
  const [bookVal, setBook] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const author = JSON.stringify(authorVal)
    const book = JSON.stringify(bookVal)
  if (author.length > 2 || book.length > 2) {
    console.log(author.length)
    fetch('http://localhost:3001/api/people',  {  
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "author" : author,
        "book" : book
      }),
  })
      // .then(res => res.json())
      // .then(data => console.log(data))
  }
    function show(data){
      // document.getElementById('resultTextarea').innerHTML += "FrontEnd Says: The book you want to cite is " + book + " and the author is " + author + ". BackEnd Says: The book you want to cite is " + data.book +  " and the author is " + data.author + "."
      document.getElementById('resultTextarea').innerHTML += data

    }
    // setAuthor('')
    // setBook('')
  }

  return (
        <form onChange={handleSubmit}>
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
  