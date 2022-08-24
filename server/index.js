
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

app.post('/api/people', asyncHandler(async (req, res, next) => {
  // Search by author and book using a single request with two arguments
  // const author = req.body.author
  // const book = req.body.book
  // const bookreq = 'https://www.googleapis.com/books/v1/volumes?q=' + book + '+inauthor:' + author + '&key=AIzaSyBlnP16EnK-N_iacoF9rURiFht-C2mls2o'
  const bookArray = []

  // Search by author or book using a single request with one argument
  const searchterm = req.body.searchterm
  // const bookreq = 'https://www.googleapis.com/books/v1/volumes?q=' + searchterm + '&key=AIzaSyBlnP16EnK-N_iacoF9rURiFht-C2mls2o'
  const bookreq = 'https://www.googleapis.com/books/v1/volumes?q=' + searchterm

  const sendGetRequest = async () => {
    try {
        const resp = await axios.get(bookreq);
        if (resp.data.items !== undefined){
          const data = resp.data.items;
          for (const element of data) {
            // console.log(element.title)
            const bookId = element.id
            const title = element.volumeInfo.title
            const author = element.volumeInfo.authors
            const publisher = element.volumeInfo.publisher
            const publishDate = element.volumeInfo.publishedDate
            bookArray.push({bookId: bookId, title: title, author: author, publisher: publisher, publishDate: publishDate})
          }
        }
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  };
  await sendGetRequest()
  // console.log(bookArray)
  console.log(bookArray.length)
  res.send(bookArray)
}));

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })