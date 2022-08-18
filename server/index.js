const axios = require('axios');
const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const app = express()

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.post('/api/people', (req, res) => {
  console.log(req.body)
  const author = req.body.author
  const book = req.body.book
  const bookreq = 'https://www.googleapis.com/books/v1/volumes?q=' + book + '+inauthor:' + author + '&key=AIzaSyBlnP16EnK-N_iacoF9rURiFht-C2mls2o'

  axios.get(bookreq).then(function (response) {
  if (response.data.items !== undefined){
    const data = response.data.items;
    for (const element of data) {
      console.log(element.volumeInfo.title);
    }
  }
  res.end()
  });
})

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })