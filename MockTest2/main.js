const inputBox = document.getElementById('inputBox');
const submitButton = document.getElementById('submitButton');
const outputList = document.getElementById('outputList');

submitButton.addEventListener('click', function() {
  const inputValue = inputBox.value.trim();
  if (inputValue !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    outputList.appendChild(listItem);
    inputBox.value = '';
  }
});
