const contactForm = document.getElementById('contact');
const Inputname = document.getElementById('NameInputname');
const Inputmobile = document.getElementById('MobileInputname');
const Inputemail = document.getElementById('exampleInputEmail1');
const Inputmessage = document.getElementById('exampleFormControlTextarea1');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Inputname.value === '' || Inputmobile.value === '' || Inputemail.value === '' || Inputmessage.value === '') {
        Inputname.style.border = '1px solid red';
        Inputmobile.style.border = '1px solid red';
        Inputemail.style.border = '1px solid red';
        Inputmessage.style.border = '1px solid red';
        formMessage.innerHTML = 'Please fill in all fields!!';
        formMessage.style.color = 'red';
        formMessage.style.fontSize = '1.2rem';
    }
    else {
        formMessage.innerHTML = 'Thank you for your message ' + Inputname.value + '. We will get back to you soon!!';
        formMessage.style.color = 'green';
        formMessage.style.fontSize = '1.2rem';
        setTimeout(() => {
            formMessage.innerHTML = 'You sumbitted the form successfully!!';
            Inputname.value = '';
            Inputmobile.value = '';
            Inputemail.value = '';
            Inputmessage.value = '';
            Inputname.style.border = '';
            Inputmobile.style.border = '';
            Inputemail.style.border = '';
            Inputmessage.style.border = '';
        }, 3000);
    }
});
