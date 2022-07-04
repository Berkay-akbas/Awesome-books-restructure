import {
  pageTitle, listBtn, addNewBtn, contactInfo, contactUs, listView, newBookAdd,
} from './buttons.js';
import { BookList } from './class.js';

const list = new BookList();
const showTitleList = () => {
  pageTitle.innerHTML = 'All awesome books';
  if (listBtn.classList.contains('active') === false) {
    listBtn.classList.add('active');
    listView.classList.add('displayOn');
  }
  if (addNewBtn.classList.contains('active') === true) {
    addNewBtn.classList.remove('active');
    newBookAdd.classList.remove('displayOn');
  }
  if (contactUs.classList.contains('active') === true) {
    contactUs.classList.remove('active');
    contactInfo.classList.remove('displayOn');
  }
};
const showTitleAdd = () => {
  pageTitle.innerHTML = 'Add new book';
  if (listBtn.classList.contains('active') === true) {
    listBtn.classList.remove('active');
    listView.classList.remove('displayOn');
  }
  if (addNewBtn.classList.contains('active') === false) {
    addNewBtn.classList.add('active');
    newBookAdd.classList.add('displayOn');
  }
  if (contactUs.classList.contains('active') === true) {
    contactUs.classList.remove('active');
    contactInfo.classList.remove('displayOn');
  }
};
const showTitleContanct = () => {
  pageTitle.innerHTML = 'Contact Information';
  if (listBtn.classList.contains('active') === true) {
    listBtn.classList.remove('active');
    listView.classList.remove('displayOn');
  }
  if (addNewBtn.classList.contains('active') === true) {
    addNewBtn.classList.remove('active');
    newBookAdd.classList.remove('displayOn');
  }
  if (contactUs.classList.contains('active') === false) {
    contactUs.classList.add('active');
    contactInfo.classList.add('displayOn');
  }
};

const regexTest = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const addMessage = document.getElementById('popupMessage');
  const regX = /^[^-\s][a-zA-Z0-9_\s-]+$/;
  const popup = document.getElementById('popup');
  let isTitleValid = false;
  let isAuthorValid = false;
  if (regX.test(title)) {
    document.getElementById('titleError').innerHTML = '';
    isTitleValid = true;
  } else {
    document.getElementById('titleError').innerHTML = '* Please fill out Title';
  }

  if (regX.test(author)) {
    document.getElementById('authorError').innerHTML = '';
    isAuthorValid = true;
  } else {
    document.getElementById('authorError').innerHTML = '* Please fill out Title';
  }
  if (isTitleValid && isAuthorValid) {
    list.addBook(title, author);
    popup.classList.toggle('motion');
    addMessage.innerHTML = `Congradulations ! You have added this book ( ${title} by ${author} ) to your library successfuly.  `;

    for (let i = 0; i < 1; i += 1) {
      setTimeout(() => {
        popup.classList.toggle('motion');
      }, 3900);
    }
  }
  list.display();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
};

export {
  showTitleList, showTitleAdd, showTitleContanct, regexTest, list,
};
