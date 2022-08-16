import React, { useState } from 'react';
import ResultText from './textarea'


export default function IsbnForm(props) {
  const [authorVal, setAuthor] = useState('');
  const [bookVal, setBook] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    ResultText({bookVal}, {authorVal})

    // console.log({bookVal})
    // console.log({authorVal})
    const author = JSON.stringify(authorVal)
    const book = JSON.stringify(bookVal)
    console.log(typeof book, book)
    document.getElementById('resultTextarea').innerHTML += "The book you want to cite is " + book + " and the author is " + author + "."
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
  