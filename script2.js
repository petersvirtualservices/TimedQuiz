var nameElem = document.querySelector('#name');
var buttonElem = document.querySelector('#submit');
var tableNameElem = document.querySelector('#winnerNameHere');

buttonElem.addEventListener('click', function() {
var name = nameElem.value;
localStorage.setItem('name', name);
tableNameElem.innerHTML = name;
})

var name = localStorage.getItem('name');
if (name !== null) {
tableNameElem.innerHTML = name;
}
