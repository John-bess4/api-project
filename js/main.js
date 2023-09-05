const resultsDiv = document.getElementById('results');
const savedEntriesDiv = document.getElementById('savedEntries');

function displayResults(result) {
  resultsDiv.textContent = ''; // Clear previous results

  if (result.length === 0) {
    resultsDiv.textContent = 'No results found.';
    return;
  }

  const ul = document.createElement('ul');
  const nameItem = document.createElement('li');
  nameItem.textContent = result[0].name;
  ul.appendChild(nameItem);

  for (const prop in result[0]) {
    if (prop !== 'name') {
      const li = document.createElement('li');
      const propertyText = document.createTextNode(prop + ': ' + result[0][prop]);
      li.appendChild(propertyText);
      ul.appendChild(li);
    }
  }

  resultsDiv.appendChild(ul);
}

function saveEntry() {
  const result = resultsDiv.querySelector('ul');

  if (!result) {
    return; // No result to save
  }

  const savedUl = result.cloneNode(true);
  savedEntriesDiv.appendChild(savedUl);

  // Clear the displayed results
  resultsDiv.textContent = '';
}

document.addEventListener('DOMContentLoaded', function () {
  const saveButton = document.querySelector('.saved');
  if (saveButton) {
    saveButton.addEventListener('click', saveEntry);
  }
});
// Nav menu function
function myFunction() {
  var x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
