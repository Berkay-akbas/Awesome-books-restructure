import {
  showTitleAdd, showTitleList, showTitleContanct, regexTest, list,
} from './modules/functions.js';
import { listBtn, addNewBtn, contactUs } from './modules/buttons.js';
import { DateTime } from './modules/luxon.js';
import { library } from './modules/class.js';

setInterval(() => {
  const dt = DateTime.now();
  const clock = dt.toLocaleString(DateTime.TIME_WITH_SECONDS);
  const month = dt.toLocaleString({ month: 'long', day: 'numeric' });
  document.getElementById('date').innerHTML = `${month} ${dt.year}, ${clock} `;
}, 1000);

const localStorageBookList = JSON.parse(localStorage.getItem('Book Library'));

if (localStorageBookList != null) {
  localStorageBookList.forEach((element) => {
    library.push(element);
  });
  list.display();
}

const add = document.getElementById('add_btn');
add.addEventListener('click', regexTest);
// listBtn event listener
listBtn.addEventListener('click', showTitleList);
// addNewBtn event listener
addNewBtn.addEventListener('click', showTitleAdd);
// ContactUs event listener
contactUs.addEventListener('click', showTitleContanct);
