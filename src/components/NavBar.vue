<template>
  <header :class="{ scrolled: isScrolled }">
    <nav>
      <div class="navbar-header">
        <router-link to="/" class="navbar-logo">鉴图识灵</router-link>
      </div>
      <div class="split-nav">
        <ul class="nav-left">
          <li><router-link to="/" class="nav-link">首页</router-link></li>
          <li>
            <router-link to="/animal-intro" class="nav-link"
              >野生动物</router-link
            >
          </li>
          <li>
            <router-link to="/animal-detect" class="nav-link"
              >图像识别</router-link
            >
          </li>
          <li>
            <router-link to="/animal-data" class="nav-link"
              >数据分析</router-link
            >
          </li>
        </ul>
        <ul class="nav-right">
          <li v-if="isLoggedIn" class="user">你好，{{ username }}</li>
          <li v-if="!isLoggedIn">
            <a href="javascript:void(0)" @click="triggerLogin">登录</a>
          </li>
          <li v-else>
            <a href="javascript:void(0)" @click="handleLogout">退出</a>
          </li>
        </ul>
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
      isScrolled: false, // 添加一个状态来标记页面是否发生滚动
      username: "", // 用户名
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
        this.username = ""; // 退出登录后清空用户名
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
          this.username = response.data.username; // 更新用户名
        }
      } catch (error) {
        this.isLoggedIn = false;
        this.username = ""; // 出错时清空用户名
        console.error("检查登录状态失败:", error);
      }
    },
    handleScroll() {
      // 监听页面滚动事件，根据滚动距离设置 isScrolled 状态
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
  mounted() {
    this.checkLoginStatus(); // 组件挂载时检查登录状态
    window.addEventListener("scroll", this.handleScroll); // 监听滚动事件
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll); // 组件卸载时移除滚动事件监听
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
  background-color: #f2f2f2; /* 浅灰色背景 */
  color: #333; /* 深灰色文字 */
  font-size: 16px;
  padding: 20px;
  z-index: 999;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  height: 120px;
  transition: all 0.3s ease-in-out;
}

nav {
  position: relative;
  top: 10px;
}

.split-nav {
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2; 
  color: #fff; /* 白色文字 */
  padding: 10px;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
}

.navbar-header {
  float: left;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
}

.nav-left li,
.nav-right li {
  margin-right: 30px;
}

.user {
  color: aqua;
}
.nav-left li:last-child,
.nav-right li:last-child {
  margin-right: 0;
}

.nav-left a,
.nav-right a {
  display: block;
  padding: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #637dba; /* 深蓝色文字 */
  transition: all 0.3s ease-in-out;
}

.nav-left a:hover,
.nav-right a:hover {
  color: #e7e7e7; /* 浅灰色文字 */
  background-color: #676767; /* 深灰色背景 */
  border-radius: 3px;
}

.navbar-logo {
  font-family: "方正硬笔行楷";
  font-size: 50px;
  line-height: 60px;
  color: #637dba; /* 深蓝色文字 */
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.navbar-logo:hover {
  color: #475881; /* 深蓝色文字 */
}

header.scrolled,
header.scrolled .split-nav {
  background-color: #333; /* 深灰色背景 */
  color: #e7e7e7; /* 浅灰色文字 */
  padding: 15px;
  opacity: 0.8;
}

header.scrolled .navbar-logo {
  color: #e7e7e7; /* 浅灰色文字 */
}

header.scrolled .nav-left a,
header.scrolled .nav-right a {
  color: #e7e7e7; /* 浅灰色文字 */
}

header.scrolled .nav-left a:hover,
header.scrolled .nav-right a:hover {
  color: #333; /* 深灰色文字 */
  background-color: #e7e7e7; /* 浅灰色背景 */
}
</style>

