<template>
  <main class="container py-5">
    <h1 class="text-center title animate__animated animate__fadeInDown">
      野生动物保护项目概述
    </h1>
    <div class="row flex-container">
      <div
        class="col-md-4 flex-item animate__animated animate__fadeInUp"
        v-for="(item, index) in items"
        :key="index"
      >
        <router-link :to="item.link" class="item-link">
          <img
            :src="require('@/assets/' + item.image)"
            class="img-fluid rounded-top"
            alt=""
          />
          <div class="card-body">
            <h2 class="card-title">{{ item.title }}</h2>
            <p class="card-text">{{ item.content }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: "images/index/indexImg1.jpg",
          title: "项目简介",
          content:
            "本项目集野生动物保护、识别与数据分析于一体，旨在通过科技手段加强对野生动物的保护，提升物种识别的准确性，并为数据分析提供有力支持。",
          link: "/project-intro",
        },
        {
          image: "images/index/indexImg2.jpeg",
          title: "野生动物保护",
          content:
            "我们通过建立保护区和实施保护措施，减少人类活动对野生动物栖息地的破坏，保护濒危物种，维护生态平衡。",
          link: "/wildlife-protection",
        },
        {
          image: "images/index/indexImg3.jpg",
          title: "野生动物识别",
          content:
            "项目采用先进的人工智能技术，实现对野生动物的自动识别，包括物种分类、行为识别等，提升识别效率和准确性。",
          link: "/wildlife-identification",
        },
        {
          image: "images/index/indexImg4.jpeg",
          title: "数据采集与分析",
          content:
            "通过传感器网络和监控系统收集野生动物数据，利用大数据分析技术，对野生动物的行为模式、栖息地选择等进行深入分析。",
          link: "/data-analysis",
        },
        {
          image: "images/index/indexImg5.jpg",
          title: "科技创新",
          content:
            "项目结合最新的科技发展，如无人机监控、卫星遥感、物联网等，提供全面的技术支持，推动野生动物保护工作向前发展。",
          link: "/technology-innovation",
        },
        {
          image: "images/index/indexImg6.jpeg",
          title: "公众参与",
          content:
            "我们通过公众教育活动和参与平台，提升公众对野生动物保护的认识，鼓励更多人加入到保护行动中，共同维护地球的生物多样性。",
          link: "/public-participation",
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  background: url("@/assets/images/hr.jpg") no-repeat center bottom;
  height: 60px;
  line-height: 76px;
  color: #0f8f3a;
  font-size: 24px;
  font-weight: bold;
  margin: 14px;
  padding: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px; /* 调整间距 */
}

.flex-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 400px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.flex-item:hover {
  transform: translateY(-10px); /* 调整浮动效果的距离 */
}

.flex-item img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
}

.card-text {
  font-size: 1rem;
  color: #666;
}

.item-link {
  display: block;
  color: inherit;
  text-decoration: none;
}

/* 动画库 */
@import '~animate.css/animate.min.css';

/* Bootstrap */
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>
