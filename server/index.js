
  
const {formatbook} = require("./helper");
const axios = require('axios');
const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router();
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.post('/api/gbooksapi', asyncHandler(async (req, res, next) => {
  // Search by author and book using a single request with two arguments
  // const author = req.body.author
  // const book = req.body.book
  // const bookreq = 'https://www.googleapis.com/books/v1/volumes?q=' + book + '+inauthor:' + author + '&key=AIzaSyBlnP16EnK-N_iacoF9rURiFht-C2mls2o'
  const bookArray = []

  // Search by author or book using a single request with one argument
  const searchterm = req.body.searchterm
  // const bookreq = 'https://www.googleapis.com/books/v1/volumes?q=' + searchterm + '&key=AIzaSyBlnP16EnK-N_iacoF9rURiFht-C2mls2o'
  const bookreq = 'https://www.googleapis.com/books/v1/volumes?q=' + searchterm + '&maxResults=25'

  const sendGetRequest = async () => {
    try {
        const resp = await axios.get(bookreq);
        if (resp.data.items !== undefined){
          const data = resp.data.items;
          // console.log(data.length)
          for (const element of data) {
            // console.log(element)
            let hasIsbn = false
            let isbn13 = ""
            let isbn10 = ""
            if (element.volumeInfo.industryIdentifiers){
              let isbnObj = element.volumeInfo.industryIdentifiers
              if (isbnObj[0] && isbnObj[0].type === "ISBN_13"){
                hasIsbn = true
                isbn13 = element.volumeInfo.industryIdentifiers[0].identifier
              }
              if (isbnObj[0] && isbnObj[0].type === "ISBN_10"){
                hasIsbn = true
                isbn10 = element.volumeInfo.industryIdentifiers[0].identifier
              }
              if (isbnObj[1] && isbnObj[1].type === "ISBN_13"){
                hasIsbn = true
                isbn13 = element.volumeInfo.industryIdentifiers[1].identifier
              }
              if (isbnObj[1] && isbnObj[1].type === "ISBN_10"){
                hasIsbn = true
                isbn10 = element.volumeInfo.industryIdentifiers[1].identifier
              }
            }
            const bookId = element.id
            const title = element.volumeInfo.title
            const author = element.volumeInfo.authors
            const publisher = element.volumeInfo.publisher
            const publishDate = element.volumeInfo.publishedDate
            if (hasIsbn){
              bookArray.push({bookId: bookId, title: title, author: author, publisher: publisher, publishDate: publishDate, isbn10: isbn10, isbn13:isbn13})
            }
          }
        }
    } catch (err) {
        console.error(err);
    }
  };
  await sendGetRequest()
  res.send(bookArray)
}));

app.post('/api/openlibraryapi', asyncHandler(async (req, res, next) => { 
  const searchterm = JSON.parse(req.body.searchterm)
  // console.log(searchterm)
  // const bookreq = 'https://www.googleapis.com/books/v1/volumes?q=' + searchterm + '&key=AIzaSyBlnP16EnK-N_iacoF9rURiFht-C2mls2o'
  const openLibBookReq = 'https://openlibrary.org/api/books?bibkeys=ISBN:' + searchterm + '&jscmd=data&format=json'
  // console.log(openLibBookReq)
  const sendGetRequest = async () => {
    try {
        const resp = await axios.get(openLibBookReq);
        // console.log(resp)
        if (resp.data !== undefined){
          const data = resp.data
          console.log(data)
          res.send(data)
        }
        else {
          console.log("no data")
        }

    } catch (err) {
        console.error(err);
    }
  };
  await sendGetRequest()
}))

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })