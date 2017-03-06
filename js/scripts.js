var add = document.getElementById('addElem');
var list = document.getElementById('list');
var listElements = document.getElementsByTagName('li');

add.addEventListener('click', function() {
    list.innerHTML += '<li>item ' + listElements.length + '</li>';
});