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
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
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

          if (this.isHomePage) {
            // 刷新页面
            window.location.reload();
          } else {
            // 跳转到首页
            this.$router.push("/");
          }
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
  background: linear-gradient(135deg, rgba(173, 216, 230, 0.8), rgba(230, 230, 250, 0.8));
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInBackground 0.6s ease-in-out;
}

@keyframes fadeInBackground {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 表单容器 */
.form-container {
  position: relative;
  z-index: 999;
  width: 450px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.5s ease-in-out;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 关闭按钮 */
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 2;
  color: #999;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #007bff;
}

/* 导航切换 */
#switch {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

#switch li {
  list-style: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 30px;
  transition: all 0.3s ease;
}

#switch li.active {
  background-color: #007bff;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 表单项 */
.form-item {
  margin-bottom: 1.5rem;
  width: 100%;
}

.form-container label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
  color: #555;
}

.form-container input {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.form-container input:focus {
  border-color: #007bff;
  outline: none;
}

/* 验证码区域 */
.vcbox {
  display: flex;
  align-items: center;
}

.verification-code {
  padding: 0.6rem 1.2rem;
  background: #ddd;
  border-radius: 8px;
  margin-left: 0.5rem;
  cursor: pointer;
}

.captcha-refresh {
  margin-left: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  font-size: 1rem;
  font-weight: bold;
}

.captcha-refresh:hover {
  text-decoration: underline;
}

/* 按钮样式 */
#login-submit-btn,
#register-submit-btn {
  width: 100%;
  padding: 0.7rem;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

#login-submit-btn:hover,
#register-submit-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

#login-submit-btn:active,
#register-submit-btn:active {
  background-color: #007bff;
  transform: translateY(0);
}
</style>

