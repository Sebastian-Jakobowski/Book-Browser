# BookBrowser - Coding Assignment

# Open Library 
Browser exercise for GOFORE recruitment. 

## Your resources 
Open Library offers an API where you can get information on books and other documents. The full API documentation can be found at: https://openlibrary.org/developers/api 

You can do searches using GET requests such as: 
http://openlibrary.org/search.json?title=<BOOK TITLE> 

In the response, you will find an array of "docs". Most docs contain a "cover_i" attribute, an id for the book cover. 

You can then fetch the covers with calls such as:
http://covers.openlibrary.org/b/id/<COVER ID>-S.jpg - for thumbnails
http://covers.openlibrary.org/b/id/<COVER ID>-L.jpg - for large images 

## Your task 

    Your task is to develop a book browser that complies with the following requirements: 
    It should contain a search box where the user can input a book title, in full or partially.
    It should display a scrollable *grid* of the first 100 books, with the book cover thumbnail, book title, and author.
    The book browser layout should be responsive, and fully usable on both in desktop and mobile.
    When the user clicks on a thumbnail, the application should open the full-sized cover image in a modal. The user should then be able to return to the grid.
    Pagination of results showing either 10, 20, or 50 entries per page, to be chosen by the user.
    A switch that allows the user to toggle between the *grid view* and a detailed *list view*. The list should then display the book cover thumbnail, book title, author, first publication year, and ISBN (first value in the array). 


## Evaluation 
You'll be evaluated on: 

    usability
    responsiveness
    performance
    code readability
    project structure
