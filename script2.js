var nameElem = document.querySelector('#nameID');
var buttonElem = document.querySelector('#submit');
var tableNameElem = document.querySelector('#winnerNameHere');
var scoreHere = document.querySelector('#scoreID');
var score = 10;

buttonElem.addEventListener('click', function() {
var name = nameElem.value;
localStorage.setItem('name', name);
tableNameElem.innerHTML = name;
})

var name = localStorage.getItem('name');
if (nameID !== null) {
tableNameElem.innerHTML = name;
scoreHere.innerHTML = score;
}