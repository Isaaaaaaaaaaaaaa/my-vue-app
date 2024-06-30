<template>
  <main :class="{ show: isLoaded }">
    <p class="title">野生动物保护项目概述</p>
    <div class="flex-container">
      <div
        class="flex-item"
        v-for="(item, index) in items"
        :key="index"
        :class="{ show: isInViewport[index] }"
        ref="flexItems"
      >
        <router-link :to="item.link" class="item-link">
          <img :src="require('@/assets/' + item.image)" alt="" />
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
      isInViewport: [], // 用于存储是否在视口中的布尔值数组
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
  mounted() {
    this.handleLoadAnimation();
    window.addEventListener("scroll", this.handleScrollAnimation);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScrollAnimation);
  },
  methods: {
    checkIsInViewport(el) {
      const rect = el.getBoundingClientRect();
      const threshold = 100; // 阈值，单位为像素
      return (
        rect.top >= -threshold &&
        rect.left >= -threshold &&
        rect.bottom - threshold <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right - threshold <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    handleScrollAnimation() {
      this.$refs.flexItems.forEach((item, index) => {
        if (this.checkIsInViewport(item)) {
          this.isInViewport[index] = true;
          this.isInViewport = [...this.isInViewport]; // 强制更新响应式数据
        }
      });
    },
    handleLoadAnimation() {
      this.isLoaded = true;
    },
  },
};
</script>

<style scoped>
main {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

main.show {
  opacity: 1;
  transform: translateY(0);
}

.title {
  text-align: center;
  background: url("@/assets/images/hr.jpg") no-repeat center bottom;
  height: 60px;
  line-height: 76px;
  color: #0f8f3a;
  font-size: 24px;
  font-weight: bold;
  margin: 14px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  padding: 20px;
}

.flex-item {
  flex-basis: calc(33.33% - 30px);
  margin: 15px;
  text-align: center;
  max-width: 400px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, opacity 0.6s ease, transform 0.6s ease;
  opacity: 0;
  transform: translateY(20px);
}

.flex-item.show {
  opacity: 1;
  transform: translateY(0);
}

.flex-item:hover {
  transform: translateY(-10px);
}

.flex-item img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
}

.flex-item h2 {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
}

.flex-item p {
  padding: 20px;
  font-size: 16px;
  line-height: 1.5;
}

.item-link {
  display: block;
  color: inherit;
  text-decoration: none;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in {
  animation: slideIn 0.6s ease forwards;
}
</style>
