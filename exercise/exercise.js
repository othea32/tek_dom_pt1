let body = document.createElement('body');
let div1 = document.createElement('div');
let ol = document.createElement('ol');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let div2 = document.createElement('div');
let ul = document.createElement('ul');
let li4 = document.createElement('li');
let li5 = document.createElement('li');
let li6 = document.createElement('li');

li1.innerText = 'item 1';
li2.innerText = 'item 2';
li3.innerText = 'item 3';
li4.innerText = 'item 4';
li5.innerText = 'item 5';
li6.innerText = 'item 6';

body.append(div1);
div1.append(ol);
ol.append(li1, li2, li3);
// ol.append(li1);
// ol.append(li2);
// ol.append(li3);
body.append(div2);
div2.append(ul);
ul.append(li4, li5, li6);
// ul.append(li4);
// ul.append(li5);
// ul.append(li6);

document.documentElement.append(body);

