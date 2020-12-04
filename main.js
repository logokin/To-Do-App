const button = document.querySelector(".button");
const para = document.querySelector(".para");
const list = document.getElementsByTagName("ol")[0];
const img = document.querySelector(".img");

const input = document.querySelector(".input");

button.addEventListener("click", function () {
  const textValue = input.value;
  if (input.value == "") {
    alert("empty");
  } else {
    //   create your cancel element and add to the ul tag in the document body
    const img = document.createElement("img");
    img.src = "./img/icon-close.svg";
    list.appendChild(img);
    img.setAttribute("class", "img");

    // create your li tags and add to the ul tag in the document body
    const text = document.createElement("li");
    text.setAttribute("class", "style");
    const show = document.createTextNode(textValue);
    text.appendChild(show);

    list.appendChild(text);

    // make input box empty immediately after submit
    input.value = "";

    //add an event listentener to the cancel img
    img.addEventListener("click", function () {
      text.classList.add("style-cancel");
      img.style.display = "none";
    });
  }
});
