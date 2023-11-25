function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    const login_container = document.querySelector('.login-container');
    if (username === 'CSEquiz' && password === 'CSE@2023') {
        alert('login successful!');
        login_container.innerHTML = `
        <div class ="start">
        <pre>This quiz test contain 
questions of C programming</pre>
        <h5>Total question : 20</h5>
        <h5>each question of 5 marks</h5>
        <button type="button" class="button" ><a href="main.html">Start Quiz</a></button>
        </div>
        `;
    }
    else {
        alert('Invalid username or password. please try again.');
    }
}
function register() {
    const uname1 = document.getElementById('uname1').value;
    const email = document.getElementById('email').value;
    const upswd1 = document.getElementById('upswd1').value;
    const upswd2 = document.getElementById('upswd2').value;
    const box = document.querySelector('.box');
    if ((uname1 !== '' || email !== '' || upswd1 !== '' || upswd2 !== '') && (upswd1===upswd2)) {
        alert('login successful!');
        box.innerHTML = `
        <div class ="start">
        <h3>Note:</h3>
        <pre>This quiz test contain 
questions of C programming</pre>
        <h5>Total question : 20</h5>
        <h5>Each question carries 5 marks</h5>
        <h5>All the questions are compulsory</h5>
        <h5>There is no negative marking</h5>
        <h5>Best of Luck!</h5>
        <button type="button" class="button" ><a href="main.html">Start Quiz</a></button>
        </div>
        `;
    }
    else if(upswd1!==upswd2){
        alert('Password and confirm password is not match. please try again.');
    }
    else {
        alert('Invalid username or password. please try again.');
    }
}
