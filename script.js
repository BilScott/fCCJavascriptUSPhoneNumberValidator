const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

function validatePhoneNumber(phoneNumber) {
  const pnRegex = new RegExp('^(1\\s?)?(\\([0-9]{3}\\)|[0-9]{3})[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{4}$')

  return `${pnRegex.test(phoneNumber) ? 'Valid' : 'Invalid'} US number: ${phoneNumber}`
}

checkBtn.addEventListener('click', () => {
  const phoneNumber = userInput.value.trim();
  if (!phoneNumber) {
    alert('Please provide a phone number');
  } else {
    resultsDiv.textContent = validatePhoneNumber(phoneNumber);
  }
});

clearBtn.addEventListener('click', () => {
  userInput.value = '';
  resultsDiv.textContent = '';
});
