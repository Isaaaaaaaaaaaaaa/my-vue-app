<template>
  <div id="form-background" v-if="isVisible" class="show">
    <div class="form-container show">
      <span class="close-btn" @click="hideLogin">&times;</span>
      <div id="login-selector">
        <ul id="switch">
          <li
            id="login-tab"
            :class="{ active: isLoginActive }"
            @click="toggleTab(true)"
          >
            登录
          </li>
          <li
            id="register-tab"
            :class="{ active: !isLoginActive }"
            @click="toggleTab(false)"
          >
            注册
          </li>
        </ul>
      </div>

      <div id="login-form" v-if="isLoginActive">
        <form @submit.prevent="handleLogin">
          <div class="form-item">
            <label for="username">账号：</label>
            <input
              type="text"
              id="username"
              v-model="loginForm.username"
              placeholder="请输入账号"
            />
          </div>
          <div class="form-item">
            <label for="password">密码：</label>
            <input
              type="password"
              id="password"
              v-model="loginForm.password"
              placeholder="请输入密码"
            />
          </div>
          <div class="form-item">
            <label for="captcha">验证码：</label>
            <div class="vcbox">
              <input
                type="text"
                id="captcha"
                v-model="loginForm.captcha"
                placeholder="请输入验证码"
              />
              <span class="verification-code">{{ verificationCode }}</span>
              <button @click.prevent="refreshCaptcha" class="captcha-refresh">
                刷新
              </button>
            </div>
          </div>
          <div class="form-item">
            <button type="submit" id="login-submit-btn">登录</button>
          </div>
        </form>
      </div>

      <div id="register-form" v-else>
        <form @submit.prevent="handleRegister">
          <div class="form-item">
            <label for="username2">账号：</label>
            <input
              type="text"
              id="username2"
              v-model="registerForm.username"
              placeholder="请输入账号"
            />
          </div>
          <div class="form-item">
            <label for="password2">密码：</label>
            <input
              type="password"
              id="password2"
              v-model="registerForm.password"
              placeholder="请输入密码"
            />
          </div>
          <div class="form-item">
            <label for="confirm-password">确认密码：</label>
            <input
              type="password"
              id="confirm-password"
              v-model="registerForm.confirmPassword"
              placeholder="请再次输入密码"
            />
          </div>
          <div class="form-item">
            <label for="captcha2">验证码：</label>
            <div class="vcbox">
              <input
                type="text"
                id="captcha2"
                v-model="registerForm.captcha"
                placeholder="请输入验证码"
              />
              <span class="verification-code">{{ verificationCode }}</span>
              <button @click.prevent="refreshCaptcha" class="captcha-refresh">
                刷新
              </button>
            </div>
          </div>
          <div class="form-item">
            <button type="submit" id="register-submit-btn">注册</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/eventBus.js";
import axios from "@/axiosInstance";

export default {
  data() {
    return {
      isVisible: false,
      isLoginActive: true,
      loginForm: {
        username: "",
        password: "",
        captcha: "",
      },
      registerForm: {
        username: "",
        password: "",
        confirmPassword: "",
        captcha: "",
      },
      verificationCode: this.generateCode(),
    };
  },
  methods: {
    hideLogin() {
      this.isVisible = false;
    },
    showLogin() {
      console.log("Show login module");
      this.isVisible = true;
      this.refreshCaptcha();
    },
    toggleTab(isLogin) {
      this.isLoginActive = isLogin;
      this.refreshCaptcha();
    },
    refreshCaptcha() {
      this.verificationCode = this.generateCode();
    },
    generateCode() {
      const codes =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let code = "";
      for (let i = 0; i < 4; i++) {
        code += codes.charAt(Math.floor(Math.random() * codes.length));
      }
      return code.toUpperCase();
    },
    async handleLogin() {
      const { username, password, captcha } = this.loginForm;
      if (captcha !== this.verificationCode) {
        alert("验证码错误！");
      } else if (!username) {
        alert("账号不能为空！");
      } else if (!password) {
        alert("密码不能为空！");
      } else {
        try {
          const response = await axios.post("/login", {
            username,
            password,
            captcha,
          });
          alert("登录成功！");
          this.hideLogin();
          // 设置 session 或者 token
          document.cookie = `session=${response.data.session}; path=/`;
          // 刷新页面
          window.location.reload();
        } catch (error) {
          alert("登录失败！");
        }
      }
    },
    async handleRegister() {
      const { username, password, confirmPassword, captcha } =
        this.registerForm;
      if (captcha !== this.verificationCode) {
        alert("验证码错误！");
      } else if (!username) {
        alert("账号不能为空！");
      } else if (!password) {
        alert("密码不能为空！");
      } else if (password !== confirmPassword) {
        alert("两次输入的密码不一致！");
      } else {
        try {
          await axios.post("/register", {
            username,
            password,
            captcha,
          });
          alert("注册成功！");
          this.hideLogin();
        } catch (error) {
          alert("注册失败！");
        }
      }
    },
  },
  mounted() {
    this.refreshCaptcha();
    EventBus.on("showLogin", this.showLogin);
  },
  beforeUnmount() {
    EventBus.off("showLogin", this.showLogin);
  },
};
</script>

<style scoped>
/* 背景 */
#form-background.show {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 表单容器 */
.form-container {
  position: relative;
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 450px; /* 增加宽度 */
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out; /* 淡入动画 */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 关闭按钮 */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2;
  color: #888;
  transition: color 0.3s ease-in-out;
}

.close-btn:hover {
  color: #ff0000;
}

/* 导航切换 */
#switch {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

#switch li {
  font-size: 1.2rem;
  list-style: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

#switch li.active {
  background-color: #c00;
  color: #fff;
}

.form-item {
  margin-bottom: 1.5rem;
  width: 100%; /* 确保每个表单项占满宽度 */
}

/* 表单标签 */
.form-container label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
}

/* 输入框样式 */
.form-container input[type="text"],
.form-container input[type="password"] {
  width: calc(100% - 20px); /* 确保输入框宽度 */
  padding: 0.75rem; /* 增加内边距 */
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.form-container input[type="text"]:focus,
.form-container input[type="password"]:focus {
  border-color: #0077cc;
  box-shadow: 0 0 5px rgba(0, 119, 204, 0.5);
}

.form-container form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* 确保表单占满容器宽度 */
}

/* 提交按钮样式 */
.form-container button[type="submit"] {
  width: 100%; /* 全宽以保证对齐 */
  margin-top: 1rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  background-color: #c00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.form-container button[type="submit"]:hover {
  background-color: #900;
  transform: scale(1.05);
}

/* 验证码框及刷新按钮 */
.vcbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  width: 100%; /* 确保vcbox占满宽度 */
}

.verification-code {
  width: calc(100% - 130px); /* 调整宽度 */
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.verification-code:focus {
  box-shadow: 0 0 5px rgba(0, 119, 204, 0.5);
}

/* 验证码刷新按钮样式 */
.captcha-refresh {
  width: 100px; /* 固定宽度 */
  padding: 0.5rem;
  font-size: 0.8rem;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  margin-left: 10px; /* 确保元素间有一定空隙 */
}

.captcha-refresh:hover {
  background-color: #005bb5;
  transform: scale(1.05);
  box-shadow: 0 0 5px rgba(0, 91, 181, 0.5);
}
</style>
