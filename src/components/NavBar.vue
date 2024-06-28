<template>
  <header>
    <nav>
      <div class="navbar-header">
        <router-link to="/" class="navbar-logo">唐统一·牛逼</router-link>
      </div>
      <div class="split-nav">
        <ul class="nav-left">
          <li><router-link to="/" class="nav-link">首页</router-link></li>
          <li><router-link to="/animal-detect" class="nav-link">图像识别</router-link></li>
          <li><router-link to="/animal-data" class="nav-link">数据分析</router-link></li>
          <li><router-link to="/animal-intro" class="nav-link">野生动物</router-link></li>
        </ul>
        <ul class="nav-right">
          <li><a href="javascript:void(0)" @click="showLogin()">登录</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    showLogin() {
      // 显示登录窗口
      const loginBackground = document.getElementById("form-background");
      if (loginBackground) loginBackground.style.display = "block";
    }
  }
};
</script>

<style scoped>
/* 包含外部的样式 */
@import "@/assets/css/index.css";
@import "@/assets/css/global.css";

@font-face {
            font-family: "方正硬笔行楷";
            src: url("@/assets/fonts/FZYBXSK.TTF");
        }

</style>
