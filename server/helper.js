exports.formatbook = function(bookId, booknameObj, authorObj, publisherObj, publishedDateObj){
    // make json/object here and return object to index.js to send to frontend
    // const text = bookId + " '" + booknameObj + "', " +  authorObj + ", " +  publisherObj + ", " +  publishedDateObj
    const text = booknameObj

    const bookSelectObj = {id: bookId, text: text }
    // console.log(bookSelectObj)
    return bookSelectObj
 }