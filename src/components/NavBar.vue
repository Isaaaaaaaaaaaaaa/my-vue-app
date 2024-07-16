<template>
  <header :class="{ scrolled: isScrolled }">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <img :src="require('@/assets/logo.png')" alt="Logo" class="me-2 logo-img" />
          <span class="navbar-logo">鉴图识灵</span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">首页</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/animal-intro" class="nav-link">野生动物</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/animal-detect" class="nav-link">图像识别</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/animal-data" class="nav-link">数据分析</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item" v-if="isLoggedIn">
              <span class="nav-link user">你好，{{ username }}</span>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <a href="javascript:void(0)" class="nav-link" @click="triggerLogin">登录</a>
            </li>
            <li class="nav-item" v-else>
              <a href="javascript:void(0)" class="nav-link" @click="handleLogout">退出</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import EventBus from "@/eventBus.js";
import axios from "@/axiosInstance";

export default {
  data() {
    return {
      isLoggedIn: false,
      isScrolled: false,
      username: "",
    };
  },
  methods: {
    triggerLogin() {
      console.log("触发登录事件");
      EventBus.emit("showLogin");
    },
    async handleLogout() {
      try {
        await axios.post("/logout");
        this.isLoggedIn = false;
        this.username = "";
        alert("退出成功！");
      } catch (error) {
        alert("退出失败！");
      }
    },
    async checkLoginStatus() {
      try {
        const response = await axios.get("/status");
        this.isLoggedIn = response.data.logged_in;
        if (this.isLoggedIn) {
          this.username = response.data.username;
          console.log("登录状态：已登录", this.username); // 添加调试信息
        } else {
          console.log("登录状态：未登录"); // 添加调试信息
        }
      } catch (error) {
        this.isLoggedIn = false;
        this.username = "";
        console.error("检查登录状态失败:", error);
      }
    },
    handleScroll() {
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
  mounted() {
    this.checkLoginStatus();
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a,
:visited,
a:hover,
a:active {
  text-decoration: none;
}

ul,
li {
  list-style: none;
}

body {
  font-family: "微软雅黑";
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.5s ease-in-out;
  z-index: 999;
}

.navbar {
  transition: all 0.5s ease-in-out;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
}

.navbar-light .navbar-brand,
.navbar-light .navbar-nav .nav-link {
  color: #495057;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.navbar-logo {
  font-family: "方正硬笔行楷";
  font-size: 30px;
  color: #007bff;
  transition: all 0.5s ease-in-out;
}
.logo-img {
  width: 60px;
  height: 60px;
  transition: all 0.3s ease-in-out;
}
.nav-item {
  margin-right: 20px;
}

.user {
  color: #007bff;
  font-weight: bold;
}

header.scrolled .navbar {
  background-color: #343a40 !important;
  padding: 0.8rem 1.5rem;
}

header.scrolled .navbar-light .navbar-brand, 
header.scrolled .navbar-light .navbar-nav .nav-link {
  color: #f8f9fa !important;
}

header.scrolled .navbar-light .navbar-nav .nav-link:hover {
  color: #343a40 !important;
  background-color: #f8f9fa !important;
}

header.scrolled .navbar-logo {
  color: #f8f9fa !important;
}

@media (max-width: 991.98px) {
  .navbar-nav {
    text-align: center;
  }
  .nav-item {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
