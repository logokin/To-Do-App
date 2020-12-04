var list = document.getElementsByTagName("ul")[0]; //get the <ul> element

var listOne = document.querySelector(".list-1");
listOne.setAttribute("class", "pin");

//add new item to the end of the of the list
var newItemLast = document.createElement("li");
var newTextLast = document.createTextNode("cream");
newItemLast.appendChild(newTextLast);
newItemLast.className = "pin";

list.appendChild(newItemLast); // append method put the element at the end of the an list item

var newItemFirst = document.createElement("li");
var newTextFirst = document.createTextNode("kale");

newItemFirst.appendChild(newTextFirst);

list.insertBefore(newItemFirst, list.firstChild); // insertBefore put an item at the begining  of an list item

var allList = document.querySelectorAll("li");

for (i = 0; i < allList.length; i++) {
  allList[i].className = "yeah";
}
