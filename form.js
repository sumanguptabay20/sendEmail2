let array = [];
const name = document.getElementById('name');
const email = document.getElementById('email');

function clearFields() {
  document.getElementById('name').value = '',
    document.getElementById('email').value = ''
}
document.querySelector('#myform').addEventListener('submit', e => {
  e.preventDefault();
//  console.log("clicked");
  var sname = name.value,
    semail = email.value

  var userData = {
    name: sname,
    email: semail
  }
  // console.log(userData);

  // array.push(userData)
  // localStorage.setItem('userData', JSON.stringify(array));

  // validate
  if (sname === '' || semail === '') {
    // document.querySelector('.succ').innerHTML = 'please fill all the fields'
    alert('please fill all the fields');
  } else {
    array.push(userData)
    localStorage.setItem('userData', JSON.stringify(array));
  }
  emailSent();
  clearFields();

});


