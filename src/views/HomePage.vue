<template>
  <PreLoader />
  <NavBar />
  <LoginModule />
  <div class="home container">
    <AnimalCarousel />
    <!-- 关于我们 -->
    <h1 class="display-4 mt-5 mb-4 animate__animated animate__fadeIn">关于我们</h1>
    <p class="lead animate__animated animate__fadeInUp">
      欢迎来到野生动物平台，本项目利用深度学习技术对红外相机拍摄的野生动物图像进行自动识别和分类，开发了一个野生动物数据分析平台，为野生动物监测和生物多样性保护提供技术支持。项目不仅探索和改进了适合野生动物识别的深度学习模型，还为野生动物的栖息环境、生活习性、活动规律等提供科学依据，推动了红外图像处理和识别技术的创新与发展。
    </p>
    <h1 class="display-4 mt-5 mb-4 animate__animated animate__fadeIn">野生动物保护项目概述</h1>
    <ProjectIntro />
    
    <!-- 特性模块 -->
    <div class="features-section py-5 animate__animated animate__fadeInUp">
      <h2 class="mb-4">平台特性</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card border-0 shadow-sm h-100">
            <img :src="require(`@/assets/images/slideImg1.jpg`)" class="card-img-top" alt="Feature Image 1">
            <div class="card-body">
              <h5 class="card-title">特性一</h5>
              <p class="card-text">我们先进的识别算法可以处理各种复杂的野外图像，提供高精度的分类结果。</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0 shadow-sm h-100">
            <img :src="require('@/assets/images/slideImg2.jpg')" class="card-img-top" alt="Feature Image 2">
            <div class="card-body">
              <h5 class="card-title">特性二</h5>
              <p class="card-text">平台提供丰富的数据分析工具，可以帮助科学家们深入了解野生动物的行为模式。</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0 shadow-sm h-100">
            <img :src="require('@/assets/images/slideImg3.jpg')" class="card-img-top" alt="Feature Image 3">
            <div class="card-body">
              <h5 class="card-title">特性三</h5>
              <p class="card-text">用户友好的界面设计，让非专业人士也能轻松使用平台的各种功能。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 数据统计 -->
    <div class="stats-section py-5 animate__animated animate__fadeInUp">
      <h2 class="mb-4">数据统计</h2>
      <div class="row text-center">
        <div class="col-md-3">
          <div class="stat-item p-4 rounded shadow-lg bg-gradient-primary text-white animate__animated animate__zoomIn animate__delay-1s">
            <h3>10,000+</h3>
            <p>处理图像</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stat-item p-4 rounded shadow-lg bg-gradient-success text-white animate__animated animate__zoomIn animate__delay-2s">
            <h3>10+</h3>
            <p>识别种类</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stat-item p-4 rounded shadow-lg bg-gradient-warning text-white animate__animated animate__zoomIn animate__delay-3s">
            <h3>100+</h3>
            <p>野生动物覆盖面</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="stat-item p-4 rounded shadow-lg bg-gradient-danger text-white animate__animated animate__zoomIn animate__delay-4s">
            <h3>2000+</h3>
            <p>网站点击量</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 互动模块 -->
    <div class="interactive-section py-5 animate__animated animate__fadeInUp">
      <h1 class="display-4 mt-5 mb-4 animate__animated animate__fadeIn">评论与留言</h1>
      <CommentSection />
    </div>
  </div>
  <FooterModule />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import LoginModule from "@/components/LoginModule.vue";
import FooterModule from "@/components/FooterModule.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import PreLoader from '@/components/PreLoader.vue';
import CommentSection from "@/components/CommentSection.vue";  // 导入新的组件
import AnimalCarousel from '@/components/AnimalCarousel.vue';

export default {
  name: "HomePage",
  components: {
    NavBar,
    LoginModule,
    FooterModule,
    ProjectIntro,
    PreLoader,
    CommentSection,  // 注册新的组件
    AnimalCarousel,
  },
  mounted() {
    // Scroll to the top of the page on each route change
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  position: relative;
  top: 100px;
  padding-bottom: 100px; /* 增加下方的空白区域 */
}

.home h1,
.home h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.home p {
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 2rem;
}

.features-section .card {
  margin-bottom: 2rem;
}

.stats-section .stat-item {
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  transition: transform 0.3s, box-shadow 0.3s;
}

.stats-section .stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.stats-section .stat-item h3 {
  font-size: 2rem;
  font-weight: bold;
}

.interactive-section {
  margin: 3rem auto;
}

/* 动画库 */
@import '~animate.css/animate.min.css';

/* 自定义样式 */
.bg-gradient-primary {
  background: linear-gradient(45deg, #1a73e8, #4285f4);
}

.bg-gradient-success {
  background: linear-gradient(45deg, #34a853, #0f9d58);
}

.bg-gradient-warning {
  background: linear-gradient(45deg, #fbbc05, #fbbd23);
}

.bg-gradient-danger {
  background: linear-gradient(45deg, #ea4335, #d93025);
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}
</style>
