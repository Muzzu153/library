const myLibrary = [];

function Book(title, author, pages, read) {
    
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

let addBook = document.getElementById("add-book")
let modal = document.querySelector(".modal")

addBook.addEventListener('click', ()=>{
  console.log("addbook")
  modal.showModal()
})