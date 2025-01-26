const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const trimName = nameInput.value.trim();

  if (trimName === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimName;
  }
});
