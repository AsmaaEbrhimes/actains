
let sign_up = document.querySelector('.sign-up');
let sign_username = document.querySelector('.sign-username');
let sign_email = document.querySelector('.sign-email');
let sign_password = document.querySelector('.sign-password');
let sign = document.querySelector('.sign')
const reg_username = /\w+/;
const reg_email = /\w+@\w+/;
const reg_password = /\w+\d+\w+/;


sign_up.addEventListener('submit', (e) => {
    e.preventDefault();
    match_username = reg_username.test(sign_username.value);
    match_email = reg_email.test(sign_email.value);
    match_password = reg_password.test(sign_password.value);

    if (match_username && match_email && match_password) {
        SaveDataUser()
        window.location = '../html/index.html';

        fetch("https://sendmail-api-docs.vercel.app/api/send", {
            method: "POST",
            body: JSON.stringify({
                to: email_user.value,
                subject: "Trying SendMail",
                message: "لقد تم تسجيل دخولك في الموقع",

            })
        })
    } else {
        if (!match_username) {
            sign_username.classList.add('error');
        } else {
            sign_username.classList.remove('error');
        }

        if (!match_email) {
            sign_email.classList.add('error');
        } else {
            sign_email.classList.remove('error');
        }

        if (!match_password) {
            sign_password.classList.add('error');
        } else {
            sign_password.classList.remove('error');
        }
    }
});

const SaveDataUser = () => {
    localStorage.setItem('username', sign_username.value)
    localStorage.setItem('email', sign_email.value)
    localStorage.setItem('password', sign_password.value)
}


document.querySelector('.close-eye').addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('fa-eye-slash')) {
        sign_password.type = 'text'
        target.classList.remove('fa-eye-slash')
        target.classList.add('fa-eye')
    } else {
        sign_password.type = 'password'
        target.classList.add('fa-eye-slash')
        target.classList.remove('fa-eye')
    }
})



