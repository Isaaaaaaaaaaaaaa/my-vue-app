<!-- AnimalIntro.vue -->
<template>
  <PreLoader />
  <div>
    <NavBar />
    <LoginModule />
    <div class="animal-intro">
      <ImgBanner :image-src="require('@/assets/images/banner1.jpg')" />
      <div class="main-content">
        <h2 class="display-4 mt-5 mb-4 animate__animated animate__fadeIn">栖息环境</h2>
        <WildlifeEnvironment />
        <h2 class="display-4 mt-5 mb-4 animate__animated animate__fadeIn">动物种类</h2>
        <animalTypes />
      </div>
    </div>
  </div>
  <FooterModule class="footer-style" />
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import FooterModule from "@/components/FooterModule.vue";
import ImgBanner from "@/components/ImgBanner.vue";
import PreLoader from "@/components/PreLoader.vue";
import LoginModule from "@/components/LoginModule.vue";
import WildlifeEnvironment from '@/components/WildlifeEnvironment.vue';
import AnimalTypes from '@/components/AnimalTypes.vue';

export default {
  name: "AnimalIntro",
  components: {
    NavBar,
    FooterModule,
    ImgBanner,
    PreLoader,
    WildlifeEnvironment,
    LoginModule,
    AnimalTypes,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    selectAnimal(animal) {
      this.selectedAnimal = animal;
    },
  },
};
</script>

<style scoped>
.animal-intro ,.footer-style{
  text-align: center;
  position: relative;
  top: 100px;
  margin: 0 auto;
}

.main-content {
  margin: 20px auto; /* 适当的间距 */
  max-width: 1600px;
}
</style>
