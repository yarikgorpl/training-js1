const input = document.querySelector('#validation-input');
input.addEventListener('blur', onBlurInput);
const length = Number(input.dataset.length);

function onBlurInput(event) {
  const isValid = event.currentTarget.value.length === length;

  input.classList.toggle('valid', isValid);
  input.classList.toggle('invalid', !isValid);
}
