let addButton = document.getElementById(`add`);
let toContainer = document.getElementById(`toContainer`);
let inputField = document.getElementById(`inputField`);

addButton.addEventListener(`click`, function () {
  //creates string after submiting in the input field
  var paragraph = document.createElement(`p`);
  paragraph.classList.add(`paragraph-styling`);
  paragraph.innerText = inputField.value;

  toContainer.appendChild(paragraph);
  inputField.value = ``;
  //adds a line through the paragraph once clicked
  paragraph.addEventListener(`click`, function () {
    paragraph.style.textDecoration = `line-through`;
  });

  //Removes paragraph when double clicked
  paragraph.addEventListener(`dblclick`, function () {
    toContainer.removeChild(paragraph);
  });
});
