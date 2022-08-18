exports.formatbook = function(bookId, booknameObj, authorObj, publisherObj, publishedDateObj){
    // make json/object here and return object to index.js to send to frontend
    const text = bookId + " " + booknameObj + " " +  authorObj + " " +  publisherObj + " " +  publishedDateObj
    const bookSelectObj = {value: bookId, text: text }
    return bookSelectObj
 }