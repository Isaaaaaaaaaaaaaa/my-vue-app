<template>
  <PreLoader />
  <LoadingAnime v-if="isLoading" />
  <NavBar />
  <LoginModule />
  <div class="animal-detect">
    <ImgBanner :image-src="require('@/assets/images//banner.jpg')" />
    <DetectModule class="detect" />
  </div>
  <FooterModule />
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
.animal-detect {
  text-align: center;
  position: relative;
  top: 100px;
}

.detect {
  margin: 40px;
}
</style>
