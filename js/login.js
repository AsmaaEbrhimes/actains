
let sign = document.querySelector('.sign');
let login_email = document.querySelector('.login-email');
let login_password = document.querySelector('.login-password');

sign.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');

    if (login_email.value === email && login_password.value === password) {
        window.location = 'index.html';
    } else {
        if (login_email.value !== email) {
            showAllert('من فضلك ادخل الايميل بشكل صحيح');
        }
        if (login_password.value !== password) {
            showAllert('من فضلك ادخل الباسورد بشكل صحيح');
        }
    }
});

const showAllert = (message) => {
    let allert = document.querySelector('.allert');
    allert.classList.add('block');
    allert.textContent = message;
    setTimeout(() => {
        allert.classList.remove('block');
    }, 1500);
};
