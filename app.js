const myLibrary = [
    new Book('book 1','author 1',145,"1"),
    new Book('book 2','author 2',145,"2"),
    new Book('book 3','author 3',145,"1")
];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = (index) => {
    
    if (myLibrary[index].read == "2"){
        myLibrary[index].read = "1";
    } else {
        myLibrary[index].read = "2";
    }    
}

function isDuplicated(hole,part){
    return hole.some((e)=>e.title==part.title && e.author ==part.author && e.pages == part.pages && e.read == part.read)
}

function addBookToLibrary (){
    const {title,author,pages,read} = getInput();
    const newBook = new Book(title,author,pages,read);
    if (isDuplicated(myLibrary,newBook)) {
        alert(" book already exists");
        return;
    }  
    myLibrary.push(newBook);    
    refresh();
}

function getInput(){
    const title = document.querySelector(".add_title").value;
    const author = document.querySelector(".add_author").value;
    const pages = document.querySelector(".add_pages").value;
    const read = document.querySelector(".add_read").value;
    return {"title": title,"author": author,"pages":pages, "read": read}
}

function getDOM(){
    return {
        title: document.querySelector('.add_title'),
        author: document.querySelector('.add_author'),
        pages: document.querySelector('.add_pages'),
        read: document.querySelector('.add_read'),
        click: document.querySelector('.click_to_add'),
        removeBtn: document.querySelector('.removeBtn'),
        inputs: document.querySelector('.inputs'),
        add: document.querySelector('.add_to_library'),
        statusBtn: document.querySelector('.statusBtn')
    }
}

function refresh(){
    const lib = document.querySelector(".library");
    const main = document.querySelector(".main")
    const libHTML = '<section class="library"></div>';
    lib.remove();
    main.insertAdjacentHTML('beforeend', libHTML);

    return myLibrary.forEach(function (book, i){
        const {title, author, pages, read} = book;
        const box = document.querySelector(".library");
        const status = (read == "1" ? "Read" : "Not Read")
        const stBtn = (read == "1" ? "read" : "not_read")
        const html = `<div class ="book"><div class="leftB"><span class="title">Title: ${title} </span> <span class="author"> Author: ${author} </span> <span class="pages"> Pages Count: ${pages} </span> </div><div class="rightB"><button class="removeBtn" onclick="removeBook(${i})">Remove Book</button><button class="statusBtn ${stBtn}" onclick="changeStatus(${i})">${status}</button></div></div>`;
        box.insertAdjacentHTML('beforeend', html);
        
});
}


function removeBook(index){
    myLibrary.splice(index, 1);
    refresh();
    }
    
function changeStatus(index){
    const {statusBtn: chng} = getDOM();     
    myLibrary[index].toggleRead(index);    
    refresh();
}

function Appear(){
    const {title, author, pages, click,read,add} = getDOM();
    title.classList.add('appear');
    author.classList.add('appear');
    pages.classList.add('appear');
    click.classList.add('dissapear');
    add.classList.add('appear');
    read.classList.add('appear');
}



document.querySelector('.add_to_library').addEventListener('click', addBookToLibrary);
document.querySelector('.click_to_add').addEventListener('click', Appear);
window.addEventListener('load',refresh);



