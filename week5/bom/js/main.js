const tagUl = document.querySelector('ul');
const tagInput = document.querySelector('input');
const tagButton = document.querySelector('button');

tagButton.addEventListener('click', function() {
  const item = tagInput.value;
  if (item) {
    tagInput.value = '';

    const newTagLi = document.createElement('li');
    const newTagSpan = document.createElement('span');
    const newTagButton = document.createElement('button');
    
    newTagLi.appendChild(newTagSpan);
    newTagLi.appendChild(newTagButton);
    newTagSpan.textContent = item;
    newTagButton.textContent = "❌";
    tagUl.appendChild(newTagLi);
    newTagButton.setAttribute('class', 'delete-box');

    newTagButton.onclick = function(e) {
      tagUl.removeChild(newTagLi);
    }

    tagInput.focus();
  }
})