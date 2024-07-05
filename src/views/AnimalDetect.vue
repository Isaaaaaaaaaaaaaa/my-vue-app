<template>
  <PreLoader />
  <LoadingAnime v-if="isLoading" />
  <NavBar />
  <LoginModule />
  <div class="animal-detect">
    <ImgBanner :image-src="require('@/assets/images/banner.jpg')" />
    <DetectModule class="detect" />
    <AnimalModelIntro />
  </div>
  <FooterModule class="footer-style" />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import LoginModule from "@/components/LoginModule.vue";
import FooterModule from "@/components/FooterModule.vue";
import ImgBanner from "@/components/ImgBanner.vue";
import LoadingAnime from "@/components/LoadingAnime.vue";
import DetectModule from "@/components/DetectModule.vue";
import PreLoader from "@/components/PreLoader.vue";
import EventBus from '@/eventBus';
import AnimalModelIntro from '@/components/AnimalModelIntro.vue'

export default {
  name: "AnimalDetect",
  components: {
    NavBar,
    LoginModule,
    FooterModule,
    ImgBanner,
    LoadingAnime,
    DetectModule,
    PreLoader,
    AnimalModelIntro,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  created() {
    // 监听识别开始事件
    EventBus.on("recognize-start", () => {
      this.isLoading = true;
    });
    // 监听识别结束事件
    EventBus.on("recognize-end", () => {
      this.isLoading = false;
    });
  },
  beforeUnmount() {
    EventBus.off("recognize-start");
    EventBus.off("recognize-end");
  },
};
</script>

<style scoped>
.animal-detect ,.footer-style{
  text-align: center;
  position: relative;
  top: 100px;
}

.detect {
  margin: 40px;
}

.animal-detect .img-banner {
  margin-bottom: 30px;
}

.animal-detect .loading-animation {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}

.animal-detect .detect .card {
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.animal-detect .detect .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.animal-detect .detect .card-body {
  padding: 20px;
}

.animal-detect .detect .card-title {
  font-size: 20px;
  font-weight: bold;
}

.animal-detect .detect .card-text {
  font-size: 16px;
  line-height: 1.6;
}

.animal-detect .detect .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  font-size: 14px;
  padding: 8px 16px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.animal-detect .detect .btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
