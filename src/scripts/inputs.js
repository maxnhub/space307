let inputEmail = document.getElementById('form-email');
let labelEmail = document.getElementById('label-email');
let inputPass = document.getElementById('form-password');
let labelPass = document.getElementById('label-password');

inputEmail.addEventListener('keyup', ()=> {
  if(inputEmail.value.length >= 1) {
    labelEmail.classList.add('active');
  } else {
    labelEmail.classList.remove('active');
  }
})

inputPass.addEventListener('keyup', ()=> {
  if(inputPass.value.length >= 1) {
    labelPass.classList.add('active');
  } else {
    labelPass.classList.remove('active');
  }
})

