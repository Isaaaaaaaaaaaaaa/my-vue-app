<template>
  <PreLoader />
  <NavBar />
  <LoginModule />
  <div class="home">
    <SliderModule />
    <h1>关于我们</h1>
    <p>
      欢迎来到野生动物平台，
      本项目利用深度学习技术对红外相机拍摄的野生动物图像进行自动识别和分类，开发了一个野生动物数据分析平台，为野生动物监测和生物多样性保护提供技术支持。项目不仅探索和改进了适合野生动物识别的深度学习模型，还为野生动物的栖息环境、生活习性、活动规律等提供科学依据，推动了红外图像处理和识别技术的创新与发展。
    </p>
    <ProjectIntro />
  </div>
  <FooterModule />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import LoginModule from "@/components/LoginModule.vue";
import FooterModule from "@/components/FooterModule.vue";
import SliderModule from "@/components/SliderModule.vue";
import ProjectIntro from "@/components/ProjectIntro.vue";
import PreLoader from '@/components/PreLoader.vue';

export default {
  name: "HomePage",
  components: {
    NavBar,
    LoginModule,
    FooterModule,
    SliderModule,
    ProjectIntro,
    PreLoader,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  position: relative;
  top:100px;
}
.home p {
  max-width: 800px; /* 根据需要调整最大宽度 */
  margin: 0 auto; /* 居中显示 */
  text-align: justify; /* 文字两端对齐 */
  font-size: 16px; /* 字体大小 */
  line-height: 1.6; /* 行高 */
  color: #333; /* 文字颜色 */
}

</style>
