<template>
  <LoadingAnime />
  <NavBar />
  <LoginModule />
    <div class="animal-detect">
      <ImgBanner :image-src="require('@/assets/images//banner.jpg')" />
      <DetectModule class="detect"/>
    </div>
    <FooterModule />
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import LoginModule from '@/components/LoginModule.vue';
  import FooterModule from '@/components/FooterModule.vue';
  import ImgBanner from '@/components/ImgBanner.vue';
  import LoadingAnime from '@/components/LoadingAnime.vue';
  import DetectModule from '@/components/DetectModule.vue';

  export default {
    name: 'AnimalDetect',
    components: {
      NavBar,
      LoginModule,
      FooterModule,
      ImgBanner,
      LoadingAnime,
      DetectModule,
    },
  };
  </script>
  
  <style scoped>
  .animal-detect {
    text-align: center;
    position: relative;
    top:100px;
  }

  .detect{
    margin: 40px;
  }
  </style>
  