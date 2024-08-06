//nav responsiveness here

function navResponse(){
    const navBox = document.getElementById('nav_holder');
    if(navBox.style.display === 'none' || navBox.style.display === ''){
        navBox.style.display  = 'block';
    } else{
        navBox.style.display = 'none';
    }
}

//image transformation

const captures = document.querySelectorAll('.capture1');

captures.forEach(capture => {
  capture.addEventListener('click', function(){
    this.classList.toggle('clicked');
  });
});

//about profile read popup

const profileRead = document.getElementById('profile_read');
const fullProfile = document.getElementById('full_profile');
const content = document.getElementById('content');
profileRead.addEventListener('click', ()=> {
   if(fullProfile.style.display === 'block'){
    fullProfile.style.display = 'none';
   } else{
  fullProfile.style.display = 'block';
  fullProfile.style.top = content.offsetTop + 'px';
  fullProfile.style.left  = '400px';
}});

// script.js
function submitForm(event) {
    event.preventDefault();

    const form = document.forms['userForm'];
    const data = {
      name: form['name'].value,
      email: form['email'].value,
      number: form['number'].value,
      date: form['date'].value,
      from: form['from'].value,
      to: form['to'].value,
      message: form['message'].value
    };

    fetch('https://script.google.com/macros/s/AKfycbxjIlmJdGs4Dtj3AGCBsmjaLT-7Mg0rN8NOPV32ORBKkNwnixto-IBTpTQFsACkiLaqqw/exec', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      if (result.result === 'success') {
        alert('Form submitted successfully! We will give you a call back.');
        form.reset();
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    })
    .catch(error => {
      alert('There was an error submitting the form. Please try again.');
      console.error('Error:', error);
    });
  }
//services form script  here
function submitForm(event, formId) {
    event.preventDefault();

    const form = document.getElementById(formId);
    const data = {
      name: form['name'].value,
      email: form['email'].value,
      number: form['number'].value,
      date: form['date'].value,
      from: form['from'].value,
      to: form['to'].value,
      message: form['message'].value
    };

    fetch('https://script.google.com/macros/s/AKfycbxjIlmJdGs4Dtj3AGCBsmjaLT-7Mg0rN8NOPV32ORBKkNwnixto-IBTpTQFsACkiLaqqw/exec',{
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      if (result.result === 'success') {
        alert('Form submitted successfully! We will give you a call back.');
        form.reset();
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    })
    .catch(error => {
      alert('There was an error submitting the form. Please try again.');
      console.error('Error:', error);
    });
  }

  //contact form script here

  function submitForm(event) {
    event.preventDefault();
    var formData = new FormData(document.forms['userForm']);

    fetch('https://script.google.com/macros/s/AKfycbwxMC-f-pc7G2_Q8zQUURuZ2sDA-u1xEHMRJ_7tMd9X9uw2WE7pU20d5fnq5eHEOeQ-/exec', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(data => {
        if (data.result === 'success') {
          alert("Thanks for contacting us, we'll get back to you shortly!");
          document.forms['userForm'].reset(); // Reset form after successful submission
        } else {
          alert("There was an error: " + data.error);
        }
      }).catch(error => {
        console.error('Error:', error);
        alert("There was an error. Please try again.");
      });
    }



