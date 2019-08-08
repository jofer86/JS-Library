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
    let read = document.querySelector(".RStatus").value;
    //console.log(read)
    return {"title": title,"author": author,"pages":pages,"read": read}
}

function getDOM(){
    return {
        title: document.querySelector('.add_title'),
        author: document.querySelector('.add_author'),
        pages: document.querySelector('.add_pages'),
        read: document.querySelector('.RStatus'),
        click: document.querySelector('.click_to_add'),
        removeBtn: document.querySelector('.removeBtn'),
        inputs: document.querySelector('.inputs'),
        add: document.querySelector('.add_to_library'),
        statusBtn: document.querySelector('.statusBtn')
    }
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
        let status = (read == "1" ? "Read" : "Not Read")
        
    let html = `<div class ="book"><span class="title"> ${title} </span> <span class="author"> ${author} </span> <span class="pages"> ${pages} </span> <button class="removeBtn" onclick="removeBook(${i})">Remove Book</button><button class="statusBtn" onclick="changeStatus(${i})">${status}</button></div>`;
        box.insertAdjacentHTML('beforeend', html);
    })
}

function removeBook(index){
    myLibrary.splice(index, 1);
    refresh();
}

function changeStatus(index){
    let chng = document.getElementsByClassName("statusBtn")[0]; 
    if (myLibrary[index].read == 2){
        myLibrary[index].read = 1;
        chng.classList.add('readed');
    } else {
        myLibrary[index].read = 2;
        chng.classList.remove('readed')
    }
    //console.log(myLibrary[index]);
    
    refresh();
}

function Appear(){
    const {title, author, pages, read, click,add} = getDOM();
    title.classList.add('appear');
    author.classList.add('appear');
    pages.classList.add('appear');
    read.classList.add('appear');    
    click.classList.add('dissapear');
    add.classList.add('appear');
}

document.querySelector('.add_to_library').addEventListener('click', addBookToLibrary)
document.querySelector('.click_to_add').addEventListener('click', Appear)
