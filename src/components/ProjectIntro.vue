<!-- src/components/ProjectIntro.vue -->
<template>
  <main class="container py-5">
    <div class="row justify-content-center">
      <div
        class="col-lg-4 col-md-6 mb-4"
        v-for="(item, index) in items"
        :key="index"
      >
          <div class="card border-0 rounded shadow-sm">
            <img
              :src="require('@/assets/' + item.image)"
              class="card-img-top rounded-top"
              alt=""
            />
            <div class="card-body bg-white rounded-bottom p-4">
              <h2 class="card-title h5 mb-3 text-center">{{ item.title }}</h2>
              <p class="card-text text-muted">{{ item.content }}</p>
            </div>
          </div>
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
          image: "images/index/indexImg2.jpg",
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
          image: "images/index/indexImg4.jpg",
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
          image: "images/index/indexImg6.jpg",
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
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 200px; /* 统一高度 */
  object-fit: cover; /* 图片填充方式 */
}

.card-body {
  padding: 1.5rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  transition: color 0.3s ease;
}

.card-text {
  font-size: 1rem;
  color: #666;
}

/* 动画库 */
@import '~animate.css/animate.min.css';
</style>
