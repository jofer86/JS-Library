let myLibrary = [];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary (){

}

document.querySelector('.add_to_library').addEventListener('click', addBookToLibrary)