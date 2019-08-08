let myLibrary = [];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function isDuplicated(hole,part){
    return hole.some((e)=>e.title==part.title && e.author ==part.author && e.pages == part.pages && e.read == part.read)
}

function addBookToLibrary (e){
    const {title,author,pages,read} = getInput();
    let newBook = new Book(title,author,pages,read);
    if (isDuplicated(myLibrary,newBook)) {
        alert(" book already exists");
        return;
    }
    //console.log(newBook);
    myLibrary.push(newBook);
    //console.log(myLibrary);
    refresh();
}

function getInput(){
    let title = document.querySelector(".add_title").value;
    let author = document.querySelector(".add_author").value;
    let pages = document.querySelector(".add_pages").value;
    let read = document.querySelector("#RStatus").value;
    //console.log(read)
    return {"title": title,"author": author,"pages":pages,"read": read}
}

function refresh(){
    let lib = document.querySelector(".library");
    let main = document.querySelector(".main")
    let libHTML = '<section class="library"></div>';
    lib.remove();
    main.insertAdjacentHTML('beforeend', libHTML);

    return myLibrary.forEach(function (book, i){
        const {title, author, pages, read} = book;
        let box = document.querySelector(".library");
        let html = `<div class ="book"><span class="title"> ${title} </span> <span class="author"> ${author} </span> <span class="pages"> ${pages} </span> <span class="read"> ${read}</span><button class="removeBtn" onclick="removeBook(${i})">Remove Book</button> </div>`;
        box.insertAdjacentHTML('beforeend', html);
    })
}

function removeBook(index){
    myLibrary.splice(index,1);
    refresh();
}

document.querySelector('.add_to_library').addEventListener('click', addBookToLibrary)
