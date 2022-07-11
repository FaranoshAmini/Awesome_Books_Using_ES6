import BookStorage from './BookStorage.js';

export default class UI {
  static removeBook(e, btn, index, bookArray) {
    const bookDiv = e.target.parentElement;
    bookDiv.parentElement.removeChild(bookDiv);

    bookArray = bookArray.filter((ele, idx) => idx !== index);

    BookStorage.saveData(bookArray);
    this.getBookList(bookArray);
  }

  static getBookList(bookArray) {
    let books = '';
    bookArray.forEach((book) => {
      books += `<div class="book-div"> 
      <h3 class="book-title-author">${book.title} By ${book.author}</h3>
      <button class="btn btn-remove" type="button">Remove</button>
    </div>`;
    });

    const bookDisplay = document.querySelector('.book-list');
    bookDisplay.innerHTML = books;

    const removeBtn = document.querySelectorAll('.btn-remove');
    removeBtn.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        this.removeBook(e, btn, index, bookArray);
      });
    });
  }

  static showSection(id) {
    const bookDisplay = document.querySelector('.book-list');
    const addBooksSection = document.querySelector('.add-new');
    const contactSection = document.querySelector('.contact');

    if (id === 'list') {
      bookDisplay.classList.remove('hidden');
      addBooksSection.classList.add('hidden');
      contactSection.classList.add('hidden');
    } else if (id === 'add-new') {
      bookDisplay.classList.add('hidden');
      addBooksSection.classList.remove('hidden');
      contactSection.classList.add('hidden');
    } else if (id === 'contact') {
      bookDisplay.classList.add('hidden');
      addBooksSection.classList.add('hidden');
      contactSection.classList.remove('hidden');
    }
  }
}
