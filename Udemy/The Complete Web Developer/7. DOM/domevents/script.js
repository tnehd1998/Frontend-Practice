var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  deleteBtn.classList.add("delete");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  input.value = "";
  updateFunction();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function clickListItem(item) {
  item.target.classList.toggle("done");
}

function deleteItem(item) {
  item.target.parentElement.remove();
}

function updateFunction() {
  var allLi = document.querySelectorAll("li");
  var allDeleteBtn = document.querySelectorAll(".delete");
  for (let item of allLi) {
    item.addEventListener("click", clickListItem);
  }
  for (let item of allDeleteBtn) {
    item.addEventListener("click", deleteItem);
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
updateFunction();
