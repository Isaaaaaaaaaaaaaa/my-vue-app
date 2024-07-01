<template>
  <LoadingAnime />
  <NavBar />
  <LoginModule />
    <div class="animal-detect">
      <ImgBanner :image-src="require('@/assets/images/humanity.jpg')" />
      <h1>野生动物识别</h1>
      <p>这里是野生动物识别的内容</p>
    </div>
    <FooterModule />
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import LoginModule from '@/components/LoginModule.vue';
  import FooterModule from '@/components/FooterModule.vue';
  import ImgBanner from '@/components/ImgBanner.vue';
  import LoadingAnime from '@/components/LoadingAnime.vue';

  export default {
    name: 'AnimalDetect',
    components: {
      NavBar,
      LoginModule,
      FooterModule,
      ImgBanner,
      LoadingAnime,
    },
  };
  </script>
  
  <style scoped>
  .animal-detect {
    text-align: center;
    position: relative;
    top:100px;
  }
  </style>
  