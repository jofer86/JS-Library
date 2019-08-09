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

function addBookToLibrary (){
    const {title,author,pages,read} = getInput();
    let newBook = new Book(title,author,pages,read);
    if (isDuplicated(myLibrary,newBook)) {
        alert(" book already exists");
        return;
    }  
    myLibrary.push(newBook);    
    refresh();
}

function getInput(){
    let title = document.querySelector(".add_title").value;
    let author = document.querySelector(".add_author").value;
    let pages = document.querySelector(".add_pages").value;
    let read = document.querySelector(".add_read").value;
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
    let lib = document.querySelector(".library");
    let main = document.querySelector(".main")
    let libHTML = '<section class="library"></div>';
    lib.remove();
    main.insertAdjacentHTML('beforeend', libHTML);

    return myLibrary.forEach(function (book, i){
        const {title, author, pages, read} = book;
        let box = document.querySelector(".library");
        let status = (read == "1" ? "Read" : "Not Read")
        
    let html = `<div class ="book"><div class="leftB"><span class="title">Title: ${title} </span> <span class="author"> Author: ${author} </span> <span class="pages"> Pages Count: ${pages} </span> </div><div class="rightB"><button class="removeBtn" onclick="removeBook(${i})">Remove Book</button><button class="statusBtn" onclick="changeStatus(${i})">${status}</button></div></div>`;
    box.insertAdjacentHTML('beforeend', html);
    
    
    

    })
}

function removeBook(index){
    myLibrary.splice(index, 1);
    refresh();
}

function changeStatus(index){
    let chng = document.querySelectorAll(".statusBtn")[index]; 
        
    if (myLibrary[index].read == "2"){
        myLibrary[index].read = "1";
        chng.classList.remove('not_read');
        chng.classList.add('read');
    } else {
        myLibrary[index].read = "2";
        chng.classList.remove('read');
        chng.classList.add('not_read')
    }
    
    
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


