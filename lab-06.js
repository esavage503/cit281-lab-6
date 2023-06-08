//book class
class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }

  // Create a book
const catInTheHat = new Book("Cat in the Hat", "Dr.Suess", "4/7/2003", "53211234");
console.log(catInTheHat);


//Library class 

class Library {
    
    constructor(name) {
      this._name = name;
      this._books = [];
      
    }

    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }


    get count() {
      return this._books.length;
    }



    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = ""} = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn };
        this._books.push(newBook);
      }
    }



    // listBooks() {
    //   for (const book of this._books) {
    //     const {title, author, pubDate, isbn} = book;
    //     console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`)
    //   }
    // }
    listBooks() {
        if (Array.isArray(this._books)) {
          for (const book of this._books) {
            const { title, author, pubDate, isbn } = book;
            console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`);
          }
        } else {
          console.log("No books found in the library.");
        }
      }
      



    // deleteBook(isbn="") {
    //     let tempBooks = [];
    //     for (const book of this._books){
    //         if(book.isbn !== isbn){
    //             tempBooks.push(book)
    //         }
    //     }
    //     this._books = tempBooks
    //     this._books = tempBooks.filter
    // }
    deleteBook(isbn){
        this._books = this._books.filter(book => 
            book.isbn !== isbn)
    }
  }



  // Create library object
const library = new Library("New York Times Best Seller List");

// Create a book
const newBook1 = new Book("book1", "eli Savage", "10/16/2018", "1234567890");
const newBook2 = new Book("book2", "eli Savage", "10/16/2018", "09876543210");


const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
console.log(atomicHabits);


const theHillWeClimb = new Book("The Hill We Climb", "David Baldacci", "03/30/2021", "059346527X");
console.log(theHillWeClimb);


const oceanPrey = new Book("Ocean Prey", "John Sandford", "04/13/2021", "1398505501");
console.log(oceanPrey);


// Add book to library and output library count and books
// library.addBook(newBook1);
// library.addBook(newBook2);

library.addBook(atomicHabits);
library.addBook(theHillWeClimb);
library.addBook(oceanPrey);
library.addBook(newBook1);
library.addBook(newBook2);

console.log(`Book count: ${library.count}`);

library.listBooks();


console.log("* Library after delete *");
library.deleteBook("059346527X");
library.listBooks();


console.log(`Book count: ${library.count}`);
library.listBooks();