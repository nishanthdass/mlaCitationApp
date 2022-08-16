# mlacitationapp

**<span style="text-decoration:underline;">Simple MLA Citation Chrome Extension</span>**

Vision components: 



* A Extension that uses a API that serves ISBN data
    * API Options:
        * Google Books API: [https://developers.google.com/books/](https://developers.google.com/books/)
        * Worldcat Search API : [https://www.oclc.org/developer/api/oclc-apis/worldcat-search-api.en.html](https://www.oclc.org/developer/api/oclc-apis/worldcat-search-api.en.html)
        * ISBNdb API: [https://isbndb.com/](https://isbndb.com/)
* Run Client(frontend) and Server(backend) together using concurrently:
    * https://medium.com/technology-hits/how-to-run-react-front-end-express-back-end-concurrently-22b9922e5df7
* Backend: Powered by Node.js and express to make to make http request to API
    * No need for relational or document database
        * Need to define Routes or Controllers?
    * Node.js will need a format to make request
        * Http request options:
            * Axios
            * Node-fetch
            * Ajax
    * Requests will be based on search queries from frontend
        * Requests will be either Get or Post
        * Request will send a array of book objects to frontend for selection in search/select dropdown menu
* Frontend: Powered by React.js to render components and trigger node.js requests
    * Render components:
        * Extension pop up using Chrome Extension. Develop without building/rebuilding using vite:
            * [https://dev.to/jacksteamdev/create-a-vite-react-chrome-extension-in-90-seconds-3df7](https://dev.to/jacksteamdev/create-a-vite-react-chrome-extension-in-90-seconds-3df7)
            * [https://blog.logrocket.com/creating-chrome-extension-react-typescript/](https://blog.logrocket.com/creating-chrome-extension-react-typescript/)
        * Extension pop up will include various search/select dropdown elements which will trigger Post request for either Author, Book name or ISBN number. Add button will exist to add MLA citation to the clipboard.
        * Extension popup will include clipboard window element which state will be controlled by react state
            * Clipboard window will allow: 
                * Reordering of cited book
                * Deletion of cited book
                * Copy button to copy clipboard
        * Potential Dom manipulations:
            * Allow users to add citations by typing author name and book name in the document element of the browser and using a shortcut key([ctrl + s]?)

Visual aid:


![mlacite](https://user-images.githubusercontent.com/19554568/184714525-d68a58a3-ce2e-494d-94cf-f306f4395414.png)

