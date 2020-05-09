const myForm = document.getElementById('start');
const formButton = document.getElementById('formButton');

formButton.addEventListener('click', event => {
  event.preventDefault();

  if (validateForm(myForm)) {
      alert('Валидация прошла!');
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.email)) {
    valid = false;
  }
  if (!validateField(form.elements.password)) {
    valid = false;
  }
  if (!validateField(form.elements.checkbox)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  if (!field.checkValidity()) {
      field.nextElementSibling.textContent = field.validationMessage;
      field.nextElementSibling.classList.add('active');
      field.classList.add('invalid');
      return false;
  } else {
      field.nextElementSibling.textContent = '';
      field.nextElementSibling.classList.remove('active');
      field.classList.remove('invalid');
      return true;
  }
}