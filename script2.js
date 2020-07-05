var nameElem = document.querySelector('#name');
var buttonElem = document.querySelector('#submit');
var tableNameElem = document.querySelector('#winnerNameHere');

// listen for click events on the submit button
buttonElem.addEventListener('click', function() {
// store the value of the user-specified name
var name = nameElem.value;
// store the user name in local storage
localStorage.setItem('name', name);
// set the user name in the table
tableNameElem.innerHTML = name;
})

var name = localStorage.getItem('name');
if (name !== null) {
tableNameElem.innerHTML = name;
}