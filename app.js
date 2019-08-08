let myLibrary = [];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary (e){
    const {title,author,pages,read} = getInput();
    let newBook = new Book(title,author,pages,read);
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
        let html = `<div class ="book"><span class="title"> ${title} </span> <span class="author"> ${author} </span> <span class="pages"> ${pages} </span> <span class="read"> ${read} </div>`;
        box.insertAdjacentHTML('beforeend', html);
    })

    // let html = '';
    // myLibrary.forEach((item)=>{
    //     html += `<span>${item.title}|${item.author}|${item.pages}|${item.read}</span>`
    // })
    // lib.insertAdjacentHTML("beforeend", html);
}

document.querySelector('.add_to_library').addEventListener('click', addBookToLibrary)