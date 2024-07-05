<!-- src/components/FooterModule.vue -->
<template>
  <footer class="footer">
    <div class="footer-container container py-5 animate__animated animate__fadeInUp">
      <!-- 快速链接、联系我们、订阅 -->
      <div class="row justify-content-between text-start">
        <!-- 快速链接 -->
        <div class="col-md-3 footer-section quick-links">
          <h5 class="animate__animated animate__fadeInDown">快速链接</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light">关于我们</a></li>
            <li><a href="#" class="text-light">项目介绍</a></li>
            <li><a href="#" class="text-light">野生动物保护</a></li>
            <li><a href="#" class="text-light">最新新闻</a></li>
          </ul>
        </div>

        <!-- 联系我们 -->
        <div class="col-md-4 footer-section contact">
          <h5 class="animate__animated animate__fadeInDown">联系我们</h5>
          <ul class="list-unstyled">
            <li><i class="bi bi-geo-alt-fill"></i> 地址: 北京市海淀区清华东路35号</li>
            <li><i class="bi bi-telephone-fill"></i> 电话: (010) 1234-5678</li>
            <li><i class="bi bi-envelope-fill"></i> 邮箱: contact@wildlife.cn</li>
            <li>
              <i class="bi bi-github"></i> 
              <a href="https://github.com/tty-team" class="text-light" target="_blank">GitHub 账号</a>
            </li>
          </ul>
        </div>

        <!-- 订阅 -->
        <div class="col-md-4 footer-section subscribe">
          <h5 class="animate__animated animate__fadeInDown">订阅我们的新闻简报</h5>
          <form @submit.prevent="subscribe">
            <div class="input-group">
              <input type="email" v-model="email" class="form-control" placeholder="输入你的邮箱" required>
              <button type="submit" class="btn btn-success">订阅</button>
            </div>
          </form>
        </div>
      </div>

      <!-- 加入我们 -->
      <div class="footer-section join-us text-center mt-4">
        <h2 class="animate__animated animate__fadeInDown">加入我们，一起保护环境！</h2>
        <button class="btn btn-primary mt-3 animate__animated animate__pulse animate__infinite">联系我们</button>
      </div>
    </div>

    <!-- 版权信息 -->
    <div class="footer-bottom text-center py-3 animate__animated animate__fadeIn">
      <p>&copy; 2024 鉴图识灵团队 | 保留所有权利</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterModule',
  data() {
    return {
      email: ''
    };
  },
  methods: {
    subscribe() {
      alert(`已订阅: ${this.email}`);
      this.email = '';
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section h5,
.footer-section h2 {
  font-family: "方正硬笔行楷";
}

.footer-section h5 {
  margin-bottom: 15px;
  font-size: 18px;
}

.footer-section h2 {
  font-size: 32px;
}

.footer-section ul {
  list-style: none;
  padding-left: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #ffcc00;
}

.footer-section .input-group {
  max-width: 400px;
}

.footer-section .input-group input {
  border: none;
  border-radius: 0;
}

.footer-section .input-group button {
  border-radius: 0;
}

.footer-bottom {
  background-color: #222;
  color: #aaa;
}

.bi {
  margin-right: 8px;
  color: #ffcc00;
}

@font-face {
  font-family: "方正硬笔行楷";
  src: url("@/assets/fonts/FZYBXSK.TTF");
}
</style>
