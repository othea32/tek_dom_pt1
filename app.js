console.log("hello world");

// let titleEl = document.getElementById('title');
// console.dir(titleEl);

// let pEl = document.querySelector('.cool');
// console.log(pEl);

let commentEls = document.querySelectorAll('.comment');
// console.log(commentsEls);

// let li = document.getElementsByTagName('li');
// console.log(li);

for(let commentEl of commentEls) {
 commentEl.style.backgroundColor = 'yellow';
 commentEl.style.fontSize ='30px';
	console.log(commentEl);
}

let li = document.getElementsByTagName('li');

let myArray = Array.prototype.slice.call(li, 1, 3);

let comments = document.querySelector('#comments');
console.log(comments.firstChild);
console.log(comments.lastChild);


const newLi = document.createElement('li');
const newLiTwo = document.createElement('li');


let lastItem = document.querySelector('#lastItem');

newLi.innerText = 'new item';
newLiTwo.innerText = 'new item two';

lastItem.append(newLi);
lastItem.prepend(newLiTwo);

const div1 = document.createElement('div');
const div2 = document.createElement('div');
const ol = document.createElement('ul');
const ul = document.createElement('ul');

function createListItems(parent, count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.innerText = `item ${i}`;
    ul.append(li);
  }
}

createListItems(ul, 6);

div1.append(ul);
div2.append(ol);

document.body.append(div1, div2);

linkElement.href = 'https://www.google.com';


