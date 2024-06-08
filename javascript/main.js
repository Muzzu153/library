let addBook = document.getElementById("add-book");
let modal = document.querySelector(".modal");
let confirmBtn = document.getElementById("confirm-btn");
let cancelBtn = document
  .getElementById("cancel-btn")
  .addEventListener("click", () => {
    modal.close();
  });

// let slider = document.querySelector(".slider");
// console.log(slider.style.getPropertyValue("background-color"));
// let changeReadStatus = document.getElementById("change-read-status");

// changeReadStatus.addEventListener("change", function () {
//   if (newReadStatus.checked === true) {
//     return "on";
//   } else {
//     return "off";
//   }
// });

let newTitle = document.getElementById("new-title");
let newAuthor = document.getElementById("new-author");
let newPages = document.getElementById("new-pages");
let newReadStatus = document.getElementById("new-read-status");
let search = document.getElementById("search");
let searchBtn = document.getElementById("search-btn");

const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  // if (
  //   !(newTitle.value === "") &&
  //   !(newAuthor.value === "") &&
  //   !(newPages.value === "")
  // ) {
  myLibrary.push(newBook);
  console.log("book pushed");
  // }

  // for (let books of myLibrary) {
  //   console.log(books);
  // }
  // newTitle.value = "";
  // newAuthor.value = "";
  // newPages.value = "";
  // modal.close();
}

function getNewReadStatusInArray() {
  if (newReadStatus.checked === true) {
    // newReadStatus.checked = true;
     "on";
  } else {
    // newReadStatus.checked = false;
    return "off";
  }
}

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(
    newTitle.value,
    newAuthor.value,
    newPages.value,
    getNewReadStatusInArray()
  );
  console.log("value submitted");
  newTitle.value = "";
  newAuthor.value = "";
  newPages.value = "";
  newReadStatus.checked = false;
  displayBook(myLibrary);
  modal.close();
  // createBook();
});

let dialog = document.querySelector(".modal");

dialog.addEventListener("click", (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});

addBook.addEventListener("click", (e) => {
  e.preventDefault();
  modal.showModal();
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(search.value);
});

function addBookInDOM() {}

function iterateLibrary(arr) {
  for (let books of arr) {
    //if (key === "title") {
    for (let key in books) console.log(books[key]);
  }
}
//}

let bookList = document.getElementById("book-list");
function displayBook(library) {
  while (bookList.hasChildNodes()) {
    bookList.removeChild(bookList.firstChild);
  }
  console.log(myLibrary[myLibrary.length - 1]);

  library.forEach((book) => {
    console.log("book iterated");
    const singleBook = createBook(book);
    bookList.appendChild(singleBook);
  });
}



function createBook(book) {
  // let builtInBook = document.querySelector(".single-books");

  // bookList.has

  // book.title

  // myLibrary.forEach((book) =>{
  let singleBook = document.createElement("div");
  // bookList.appendChild(singleBook);
  singleBook.classList.add("single-books");

  // builtInBook.insertAdjacentElement(singleBook);

  let titleDiv = document.createElement("div");
  titleDiv.classList.add("card");
  singleBook.appendChild(titleDiv);

  let authorDiv = document.createElement("div");
  authorDiv.classList.add("card");
  titleDiv.insertAdjacentElement("afterend", authorDiv);

  let pagesDiv = document.createElement("div");
  pagesDiv.classList.add("card");
  authorDiv.insertAdjacentElement("afterend", pagesDiv);

  let readStatusDiv = document.createElement("div");
  readStatusDiv.id = "read-status";
  readStatusDiv.classList.add("card");
  pagesDiv.insertAdjacentElement("afterend", readStatusDiv);

  let titleKey = document.createElement("p");
  titleKey.classList.add("keys");
  titleDiv.appendChild(titleKey);

  let authorKey = document.createElement("p");
  authorKey.classList.add("keys");
  authorDiv.appendChild(authorKey);

  let pagesKey = document.createElement("p");
  pagesKey.classList.add("keys");
  pagesDiv.appendChild(pagesKey);

  let readStatusText = document.createElement("p");
  readStatusDiv.appendChild(readStatusText);
  readStatusText.textContent = "Read Status";

  let toggleSwitch = document.createElement("div");
  let notRead = document.createElement("div");
  notRead.textContent = "No";

  let isRead = document.createElement("div");
  isRead.textContent = "Yes";

  let switchLabel = document.createElement("label");

  let switchInput = document.createElement("input");
  switchLabel.appendChild(switchInput);
  switchInput.type = "checkbox";

  
  let switchSpan = document.createElement("span");
  switchSpan.classList.add("slider");
  switchInput.insertAdjacentElement("afterend", switchSpan);
  

  console.log('if statement below')

  function sliderBgColor(){
    if(newReadStatus.checked === true){
      switchInput.checked = true;
      console.log('book read')
      return switchSpan.style.backGroundColor = "blue"
    }
    else{
      switchInput.checked = false;
      return switchSpan.style.backGroundColor = "red"
    }
  }

  sliderBgColor();

  console.log('if statement above')

  toggleSwitch.appendChild(notRead);
  notRead.insertAdjacentElement("afterend", switchLabel);
  switchLabel.insertAdjacentElement("afterend", isRead);
  switchLabel.classList.add("switch");
  readStatusText.insertAdjacentElement("afterend", toggleSwitch);
  toggleSwitch.classList.add("toggle-switch");

  // builtInBook.insertAdjacentElement("afterend", singleBook);

  let titleValue = document.createElement("p");
  let authorValue = document.createElement("p");
  let pagesValue = document.createElement("p");

  titleValue.classList.add("values");
  authorValue.classList.add("values");
  pagesValue.classList.add("values");

  titleKey.insertAdjacentElement("afterend", titleValue);
  authorKey.insertAdjacentElement("afterend", authorValue);
  pagesKey.insertAdjacentElement("afterend", pagesValue);

  titleValue.textContent = book.title;
  authorValue.textContent = book.author;
  pagesValue.textContent = book.pages;

  titleKey.textContent = "Title:";
  authorKey.textContent = "Author:";
  pagesKey.textContent = "Pages:";

  singleBook.append(titleDiv, authorDiv, pagesDiv, readStatusDiv);

  return singleBook;
}



addBookToLibrary(
  "Men are from mars, Women are from venus",
  "John Gray",
  286,
  "on"
);

// addBookToLibrary()

// createBook(myLibrary);
displayBook(myLibrary);
