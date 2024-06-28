function showLogin() {
    var container=document.getElementById("form-background");
    var loginContainer = document.querySelector('.form-container');
    loginContainer.classList.add('show');
    container.classList.add('show');
    loginContainer.classList.remove('hide');
}

function hideLogin() {
    var container=document.getElementById("form-background");
    var loginContainer = document.querySelector('.form-container');
    loginContainer.classList.remove('show');
    container.classList.remove('show');
    loginContainer.classList.add('hide');
    setTimeout(function () {
        loginContainer.classList.remove('hide');
    }, 500);
}


// 获取DOM元素
const loginBtn = document.getElementById('login-tab');
const registerBtn = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginSubmitBtn = document.getElementById('login-submit-btn');
const registerSubmitBtn = document.getElementById('register-submit-btn');
const usernameInput = document.getElementById('username');
const usernameInput2 = document.getElementById('username2');
const passwordInput = document.getElementById('password');
const passwordInput2 = document.getElementById('password2');
const confirmPasswordInput = document.getElementById('confirm-password');
const verificationCodeInput = document.getElementById('captcha');
const verificationCodeInput2 = document.getElementById('captcha2');
const verificationCode = document.querySelector('.verification-code');
const verificationCodeRefresh = document.querySelector('.captcha-refresh');
const verificationCode2 = document.querySelector('.verification-code2');
const verificationCodeRefresh2 = document.querySelector('.captcha-refresh2');
// 生成随机验证码
function generateCode() {
    const codes = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 4; i++) {
        code += codes.charAt(Math.floor(Math.random() * codes.length));
    }
    return code;
}

// 更新验证码
function updateVerificationCode() {
    verificationCode.textContent = generateCode();
    verificationCode2.textContent = generateCode();
}

// 点击登录按钮
function login() {
    const code = verificationCode.textContent;
    const inputCode = verificationCodeInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (inputCode !== code) {
        alert('验证码错误！');
        return;
    } else if (username == '') {
        alert('账号不能为空！');
        return;
    } else if (password == '') {
        alert('密码不能为空！');
        return;
    }
    alert('登录成功！');
}

// 点击注册按钮
function register() {
    const code = verificationCode2.textContent;
    const inputCode = verificationCodeInput2.value;
    const username = usernameInput2.value;
    const password = passwordInput2.value;
    const confirmPassword = confirmPasswordInput.value;
    if (inputCode !== code) {
        alert('验证码错误！');
        return;
    } else if (username == '') {
        alert('账号不能为空！');
        return;
    } else if (password == '') {
        alert('密码不能为空！');
        return;
    } else if (password !== confirmPassword) {
        alert('两次输入的密码不一致！');
        return;
    }
    alert('注册成功！');
}

// 绑定事件
loginBtn.addEventListener('click', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
    updateVerificationCode();
});
registerBtn.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    loginBtn.classList.remove('active');
    registerBtn.classList.add('active');
    updateVerificationCode();
});
loginSubmitBtn.addEventListener('click', login);
registerSubmitBtn.addEventListener('click', register);
verificationCode.addEventListener('click', updateVerificationCode);
verificationCodeRefresh.addEventListener('click', updateVerificationCode);
verificationCode2.addEventListener('click', updateVerificationCode);
verificationCodeRefresh2.addEventListener('click', updateVerificationCode);
// 初始化
updateVerificationCode();

verificationCodeRefresh.addEventListener("click", function (event) {
    event.preventDefault();
});

verificationCodeRefresh2.addEventListener("click", function (event) {
    event.preventDefault();
});