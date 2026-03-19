const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === '' || password === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
}
