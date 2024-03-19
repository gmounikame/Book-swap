const books = [];

function addBook() {
    const titleInput = document.getElementById('book-title');
    const authorInput = document.getElementById('book-author');
    
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    
    
    if (title === '' || author === '') {
        alert('Please fill in both title and author fields.');
        return;
    }
    
    const book = { title, author };
    books.push(book);
    
    displayBooks();
    
    titleInput.value = '';
    authorInput.value = '';
}

function displayBooks() {
    const booksList = document.getElementById('books');
    booksList.innerHTML = '';
    
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        booksList.appendChild(li);
    

    });
}
